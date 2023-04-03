import React from 'react';
import styles from 'styles/components/Guide.module.scss';
import { IoClose } from 'react-icons/io5';

interface GuideProps {
  onClose: () => void;
}

const Guide = ({ onClose }: GuideProps) => {
  return (
    <article className={styles.guideWrapper}>
      <header className={styles['guide-header']}>
        <h3 className={styles['guide-title']}>🏖 안내사항</h3>
        <button className={styles.btnClose} type="button" onClick={onClose}>
          <IoClose className={styles.icClose} aria-label="창닫기" />
        </button>
      </header>
      <ul className={styles['guide-text-list']}>
        <li className={styles['guide-text-item']}>
          🌊 오늘의 바다는 공공데이터 오픈 API인 <b>기상청의 해수욕장 예보 데이터</b>를 기반으로
          하고 있습니다.
        </li>
        <li className={styles['guide-text-item']}>
          🌊 일부 데이터(수온, 일출일몰, 파고)는 <b>여름철(6~8월)</b>에만 제공됩니다.
        </li>
        <li className={styles['guide-text-item']}>
          <b>🌊 일기예보 업데이트 기준 시각</b>
          <br />
          오전 2시, 오전 5시, 오전 8시, 오전 11시, 오후 14시, 오후 17시, 오후 20시, 오후 23시
        </li>
      </ul>
    </article>
  );
};

export default Guide;
