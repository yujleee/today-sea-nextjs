import { useRouter } from 'next/router';
import React from 'react';
import styles from 'styles/components/Wave.module.scss';

const Waves = () => {
  const router = useRouter();
  const currentPath = router.pathname.split('/')[1];

  return (
    <div className={styles.waveWrapper}>
      {currentPath !== 'info' && (
        <p className={`${styles.descText} ${styles.bottom}`}>
          이 사이트는 공공 데이터의 Open API를 이용하고 있습니다.
        </p>
      )}
      {currentPath !== 'info' && (
        <svg
          className={styles.waves}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className={styles.parallax}>
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(62, 122, 212,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(62, 122, 212,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(62, 122, 212,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(62, 122, 212)" />
          </g>
        </svg>
      )}
      {currentPath === 'info' && (
        <svg
          className={styles.waves}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className={styles.parallax}>
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(62, 203, 212,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(62, 203, 212,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(62, 203, 212,0.1)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(62, 203, 212)" />
          </g>
        </svg>
      )}
    </div>
  );
};

export default Waves;
