import API from "services/api";
import { ResponseDetailsMovies, ResponseMovies, VideoResponse } from "./interface";

const params = {
  api_key: process.env.NEXT_PUBLIC_API_KEY,
  language: "pt-BR",
};

export const getMovies = async (page?: number): Promise<ResponseMovies> => {
  try {
    const response = await API.get(`upcoming`, { params: { page, ...params } });

    return response;
  } catch (error: any) {
    throw error?.response;
  }
};

export const getVideoMovie = async (movie_id: string): Promise<VideoResponse[]> => {
  try {
    const { data } = await API.get(`/${movie_id}/videos`, {
      params,
    });
    
    return data?.results;
  } catch (error: any) {
    console.log(error?.response);
    throw error?.response;
  }
};

export const getMovie = async (
  movie_id: string
): Promise<ResponseDetailsMovies> => {
  try {
    const response = await API.get(`/${movie_id}`, {
      params,
    });

    return response;
  } catch (error: any) {
    console.log(error?.response);
    throw error?.response;
  }
};
