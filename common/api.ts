import { QueryClient, QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';

const queryClient = new QueryClient();

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
``;

export const getForecastInfo = async (params: QueryFunctionContext<[string, number, Now]>) => {
  const num = params.queryKey[1];
  const now = params.queryKey[2];

  try {
    const response = await axiosInstance.get(
      `/getVilageFcstBeach?serviceKey=${process.env.NEXT_PUBLIC_API_KEY}&dataType=JSON&base_date=${now.date}&base_time=${now.time}&beach_num=${num}&numOfRows=20`
    );

    return response.data.response.body.items.item;
  } catch (error) {
    // moveToErrorPage();
  }
};

export const getSunInfo = async (params: QueryFunctionContext<[string, number, Now]>) => {
  const num = params.queryKey[1];
  const now = params.queryKey[2];

  try {
    const response = await axiosInstance.get(
      `/getSunInfoBeach?serviceKey=${process.env.NEXT_PUBLIC_API_KEY}&dataType=JSON&base_date=${now.date}&beach_num=${num}`
    );

    return response.data.response.body.items.item;
  } catch (error) {
    // moveToErrorPage();
  }
};

export const getTideInfo = async (params: QueryFunctionContext<[string, number, Now]>) => {
  const num = params.queryKey[1];
  const now = params.queryKey[2];

  try {
    const response = await axiosInstance.get(
      `getTideInfoBeach?serviceKey=${process.env.NEXT_PUBLIC_API_KEY}&dataType=JSON&base_date=${now.date}&beach_num=${num}`
    );

    return response.data.response.body.items.item;
  } catch (error) {
    // moveToErrorPage();
  }
};

export const getInfoData = (num: string, now: Now) => {
  return queryClient.getQueriesData(['forecast', num, now]);
};
