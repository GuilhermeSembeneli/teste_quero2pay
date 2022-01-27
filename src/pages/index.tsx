import Head from "next/head";
import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import {
  MoviesList,
  Container,
  SectionHome,
  ContainerPagination,
  AboutRent,
} from "styles/pages/Home";
import { GetStaticProps } from "next";
import Movies from "components/Movies";
import { Pagination } from "components/Pagination";
import ScrollContainer from "react-indiana-drag-scroll";
import { getMovies } from "services/movies/requests";
import { ResponseMovies, ResultMovie } from "services/movies/interface";
import { PaginationState } from "components/Pagination/interface";
import { ModalInformationMovie } from "components/Modal/ModalInformationMovie";

import RentImage from "/public/images/want2Rent.png";
import { setCookieData } from "services/cookies";

export default function Home({ data }: ResponseMovies) {
  const [visible, setVisible] = useState(false);
  const [movieModal, setMovieModal] = useState<ResultMovie>();

  const [movies, setMovies] = useState<ResultMovie[]>(data?.results || []);
  const [pagination, setPagination] = useState<PaginationState>({
    current_page: data?.page,
    total_pages: data?.total_pages,
    per_page: 10,
  });

  const { moviesAverage, BestOfLastYear, lastYear } = useMemo(() => {
    const moviesAverage = data?.results?.filter(
      (item) => item.vote_average > 7
    );
    const lastYear = new Date().getFullYear() - 1;
    const BestOfLastYear = data?.results?.filter(
      (item) =>
        item.vote_average > 7 &&
        item?.release_date?.includes(lastYear?.toString())
    );
    return {
      moviesAverage,
      BestOfLastYear,
      lastYear,
    };
  }, []);

  const openModal = (item: ResultMovie) => {
    setMovieModal(item);
    setVisible(true);
  };

  const handleAddProduct = (item: ResultMovie) => {
    setCookieData("productId", item?.id);
  };

  const fetchMovies = useCallback(async () => {
    try {
      const { data: response } = await getMovies(pagination?.current_page);
      setMovies(response?.results);
    } catch (error) {
      console.log(error);
    }
  }, [pagination]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <>
      <Head>
        <title>Quero 2 Aluga | Filmes em Cartaz</title>
      </Head>
      <ModalInformationMovie
        onClickRent={handleAddProduct}
        visible={visible}
        onClose={() => setVisible(false)}
        item={movieModal}
      />
      <Container>
        <SectionHome>
          <AboutRent>
            <div>
              <h4>Filmes por apenas 9.99R$!</h4>
              <p>
                {" "}
                Alugue seus filmes no conforto de sua casa, sem precisar
                <br />
                sair de casa!
              </p>
            </div>

            <Image src={RentImage} alt="Quero 2 ingresso" />
          </AboutRent>

          <MoviesList>
            <div className="create-title-decoration">
              <span></span>
              <p>Mais Avaliados</p>
            </div>

            <ScrollContainer className="container-movies-averages">
              {moviesAverage?.map((item) => (
                <React.Fragment key={item.id}>
                  <Movies item={item} onClick={openModal} />
                </React.Fragment>
              ))}
            </ScrollContainer>
          </MoviesList>

          <MoviesList>
            <div className="create-title-decoration">
              <span></span>
              <p>Melhores de {lastYear}</p>
            </div>

            <ScrollContainer className="container-movies-averages">
              {BestOfLastYear?.map((item) => (
                <React.Fragment key={item.id}>
                  <Movies item={item} onClick={openModal} />
                </React.Fragment>
              ))}
            </ScrollContainer>
          </MoviesList>

          <MoviesList>
            <div className="create-title-decoration">
              <span></span>
              <p>Todos os Filmes</p>
            </div>

            <div className="container-all-movies">
              {movies?.map((item) => (
                <React.Fragment key={item.id}>
                  <Movies item={item} onClick={openModal} />
                </React.Fragment>
              ))}
            </div>

            <ContainerPagination>
              <Pagination
                pagination={pagination}
                onClick={(current_page: number) =>
                  setPagination({ ...pagination, current_page })
                }
              />
            </ContainerPagination>
          </MoviesList>
        </SectionHome>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await getMovies();
    return {
      props: {
        data,
      },
      revalidate: 60 * 60 * 24, //24h
    };
  } catch (error) {
    return {
      props: {
        data: {},
      },
    };
  }
};
