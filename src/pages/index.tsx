import { BestAverages, Container, SectionHome } from "styles/pages/Home";
import { GetStaticProps } from 'next'
import API from "services/api";
import { IProps } from "interfaces/Pages/home";
import React, { useMemo } from "react";
import Movies from "components/Movies";
import ScrollContainer from "react-indiana-drag-scroll";

export default function Home({data}: IProps) {
  const moviesAverage = useMemo(() => {
    return data.results.filter(item => item.vote_average > 7)
  }, [])

  return (
    <Container>
      <SectionHome>
        <BestAverages>
          <div className="create-title-decoration">
            <span></span>
            <p>Mais Avaliados</p>
          </div>

          <ScrollContainer className="container-movies-averages" >

            {moviesAverage.map(item => (
              <React.Fragment key={item.id}>
                <Movies item={item}/>
              </React.Fragment>
            ))}

          </ScrollContainer>
        </BestAverages>
      </SectionHome>
    </Container>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const { data } = await API.get('/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=1')
  return {
    props: {
      data
    },
    revalidate: 60 * 60 * 24, //24h
  }
}