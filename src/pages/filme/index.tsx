import { GetServerSideProps } from "next";
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

import { Button } from "components/Button";
import { SliderView } from "components/SliderView";

export interface MovieViewProps extends ResponseDetailsMovies {
  moviesTrailer: VideoResponse[];
}

const MovieView: React.FC<MovieViewProps> = ({
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
                <p className="stars-avaliate MovieView">
                  Avaliação:
                  {stars?.map((star, index) => (
                    <img src={star} alt="Estrela" key={index} />
                  ))}
                </p>
              )}
              <Button disabled top={15} bottom={15} maxWidth>
                Alugar {movie?.title} por 9.99R$
              </Button>
            </div>

            <div className="movie-image">
              <img
                src={`http://image.tmdb.org/t/p/w185/${movie.backdrop_path}`}
                alt={movie.title}
              />
            </div>
          </ArticleInformation>

          {!!moviesTrailer?.length && (
            <ArticleYT>
              <TitleMovie>Trailer {movie?.title}</TitleMovie>
              <SliderView>
                {moviesTrailer?.map((movieTrailer) => (
                  <div key={movieTrailer?.key}>
                    <iframe
                      src={`https://www.youtube.com/embed/${movieTrailer.key}`}
                    />
                  </div>
                ))}
              </SliderView>
            </ArticleYT>
          )}
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

export default MovieView;
