import React from 'react';
import { FiSearch } from 'react-icons/fi';
import styles from 'styles/components/Search.module.scss';

const Search = () => {
  return (
    <div className={styles.searchWrapper}>
      <form action="./info.html" role="search" method="get">
        <input
          type="text"
          className={styles.inputSearch}
          title="검색어 입력"
          name="beachName"
          maxLength={30}
          placeholder="해수욕장 찾기"
          autoComplete="off"
        />
        <button type="submit" className={styles.searchBtn}>
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
