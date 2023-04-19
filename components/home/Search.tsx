import useBeachData from 'hooks/useBeachData';
import { useRouter } from 'next/router';
import React, { FormEvent, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  beachInfoState,
  beachNumState,
  currentBeachNameState,
  currentTimeState,
} from 'recoil/atoms/atoms';
import styles from 'styles/components/Search.module.scss';
import { removeSpace } from 'util/text';

const BASE_TIME = [2, 5, 8, 11, 14, 17, 20, 23];

const Search = () => {
  const [keyword, setKeyword] = useState<string>('');

  const setBeachNum = useSetRecoilState(beachNumState);
  const setCurrentTime = useSetRecoilState(currentTimeState);
  const setCurrentBeachName = useSetRecoilState(currentBeachNameState);
  const beachInfo = useRecoilValue(beachInfoState);
  const { resetBeachInfo } = useBeachData();
  const router = useRouter();

  const getBaseTime = (now: number) => {
    const index = BASE_TIME.findIndex((it) => now <= it);
    const baseTime = BASE_TIME[index - 1];
    return baseTime < 10 ? `0${baseTime}00` : `${baseTime}00`;
  };

  const getCurrentTime = async () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.toLocaleString('ko-KO', { month: '2-digit' }).slice(0, 2);
    const date = today.toLocaleString('ko-KO', { day: '2-digit' }).slice(0, 2);

    setCurrentTime({
      date: `${year}${month}${date}`,
      time: getBaseTime(today.getHours()),
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const info = beachInfo.find((beach) => removeSpace(beach.name) === removeSpace(keyword));
    const beachNum = info ? info['beach-num'] : 1;

    router.push(
      {
        pathname: '/info/[beachNum]',
        query: {
          info: JSON.stringify(info),
        },
      },
      `/info/${beachNum}`
    );

    setBeachNum(beachNum);
    setCurrentBeachName(info ? info.name : '');
  };

  useEffect(() => {
    resetBeachInfo();
    getCurrentTime();
  }, [resetBeachInfo, getCurrentTime]);

  return (
    <div className={styles.searchWrapper}>
      <form action="./info.html" role="search" onSubmit={handleSubmit} method="post">
        <input
          type="text"
          className={styles.inputSearch}
          title="검색어 입력"
          name="beachName"
          maxLength={30}
          placeholder="해수욕장 찾기"
          autoComplete="off"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="button" className={styles.searchBtn}>
          <FiSearch className={styles.icSearch} aria-label="검색하기" />
        </button>
      </form>
      <p className={styles.errorText}>검색 결과가 존재하지 않습니다.</p>
      <div className={styles.searchResult}>
        <ul className={styles.resultList}></ul>
      </div>
    </div>
  );
};

export default Search;
