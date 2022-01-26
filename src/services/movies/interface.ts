export interface ResultMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<String>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
}

export type DatesRange = { maximum: string; minimum: string };

export interface ResponseMovies {
  data: {
    results: ResultMovie[];
    dates: DatesRange;
    page: number;
    total_pages: number;
    total_results: number;
  };
}
