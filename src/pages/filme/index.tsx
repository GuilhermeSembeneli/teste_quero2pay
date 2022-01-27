import { GetServerSideProps } from "next";
import Slider from "react-slick";
import Head from "next/head";

import { getCookieData } from "services/cookies";
import {
  ResponseDetailsMovies,
  VideoResponse,
} from "services/movies/interface";
import { getMovie, getVideoMovie } from "services/movies/requests";
import { getStarUse } from "services/star";

import {
  ArticleInformation,
  ArticleYT,
  ContainerMovie,
  ContainerPage,
  DescriptionMovie,
  TitleMovie,
} from "styles/pages/Movie";
import Arrow from "components/Arrow";

import { GlobalContainerSlider, SliderContainer } from "styles/_global";

export interface RentMovieProps extends ResponseDetailsMovies {
  moviesTrailer: VideoResponse[];
}
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const RentMovie: React.FC<RentMovieProps> = ({
  data: movie,
  moviesTrailer,
}) => {
  const stars = getStarUse(movie?.vote_average ?? 0);

  return (
    <>
      <Head>
        <title> {movie?.title} | Quero 2 Aluga </title>
      </Head>
      <ContainerPage>
        <ContainerMovie>
          <ArticleInformation>
            <div>
              <TitleMovie>{movie?.title}</TitleMovie>
              <DescriptionMovie>{movie?.overview}</DescriptionMovie>
              {!!stars?.length && (
                <p className="stars-avaliate">
                  Avaliação:
                  {stars?.map((star, index) => (
                    <img src={star} alt="Estrela" key={index} />
                  ))}
                </p>
              )}
            </div>

            <div className="movie-image">
              <img
                src={`http://image.tmdb.org/t/p/w185/${movie.backdrop_path}`}
                alt={movie.title}
              />
            </div>
          </ArticleInformation>

          <ArticleYT>
            <TitleMovie>Trailer {movie?.title}</TitleMovie>
            <GlobalContainerSlider>
              <SliderContainer
                as={Slider}
                prevArrow={<Arrow />}
                nextArrow={<Arrow />}
                {...settings}
              >
                {moviesTrailer?.map((movieTrailer) => (
                  <div key={movieTrailer?.key}>
                    <iframe
                      src={`https://www.youtube.com/embed/${movieTrailer.key}`}
                    />
                  </div>
                ))}
              </SliderContainer>
            </GlobalContainerSlider>
          </ArticleYT>
        </ContainerMovie>
      </ContainerPage>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const productId = getCookieData("productId", ctx);
    if (!productId)
      return {
        props: {},
        redirect: "/",
      };

    const { data } = await getMovie(productId);
    const moviesTrailer = await getVideoMovie(productId);

    return {
      props: {
        data,
        moviesTrailer,
      },
    };
  } catch (error) {
    return {
      props: {
        data: {},
      },
    };
  }
};

export default RentMovie;
