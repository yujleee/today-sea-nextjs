import { useQueries, useQuery } from '@tanstack/react-query';
import { getForecastInfo, getSunInfo, getTideInfo } from 'common/api';

const useBeachDetailData = (num: number, now: Now) => {
  const [{ data: forecasts }, { data: suns }, { data: tides }] = useQueries({
    queries: [
      { queryKey: ['forecast', num, now], queryFn: getForecastInfo, suspense: true },
      { queryKey: ['sun', num, now], queryFn: getSunInfo, suspense: true },
      { queryKey: ['tide', num, now], queryFn: getTideInfo, suspense: true },
    ],
  });

  return { forecasts, suns, tides };
};

export default useBeachDetailData;
