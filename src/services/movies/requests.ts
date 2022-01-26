import API from "services/api";
import { ResponseMovies } from "./interface";

export const getMovies = async (page?: number): Promise<ResponseMovies> => {
  try {
    const response = await API.get(
      `upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR&page=1`,
      { params: { page } }
    );

    return response;
  } catch (error: any) {
    throw error?.response;
  }
};
