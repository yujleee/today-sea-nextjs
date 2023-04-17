import axios from 'axios';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { beachInfoState } from 'recoil/atoms/atoms';

const useBeachData = () => {
  const [beachInfo, setBeachInfo] = useRecoilState(beachInfoState);
  const [beachNames, setBeachNames] = useState<string[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios('../assets/beachData.json');

      if (!response.data) {
        throw new Error('JSON 데이터를 받아오지 못했습니다.');
      }

      setBeachInfo(Object.values(response.data));

      getBeachNames();
    } catch (error) {
      //   moveToErrorPage();
    }
  };

  const getBeachNames = () => {
    let names: string[] = [];

    for (const [idx, beach] of Object.entries(beachInfo)) {
      names[parseInt(idx)] = beach.name;
    }

    setBeachNames(names);
  };

  const resetBeachInfo = async () => {
    await fetchData();
    getBeachNames();
  };

  return { beachNames, resetBeachInfo };
};

export default useBeachData;
