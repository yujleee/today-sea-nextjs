import Image from 'next/image';
import styles from 'styles/components/BeachInfoTop.module.scss';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { useRecoilValue } from 'recoil';
import { currentBeachNameState, currentTimeState } from 'recoil/atoms/atoms';

interface BeachInfoTopProps {
  forecasts: Forecast[];
}

const BeachInfoTop = ({ forecasts }: BeachInfoTopProps) => {
  const currentTime = useRecoilValue(currentTimeState);
  const currentBeachName = useRecoilValue(currentBeachNameState);

  return (
    <div className={styles.beachInfoTop}>
      <FaUmbrellaBeach className={styles.icBeach} aria-disabled />
      <h1 className={`${styles.title} ${styles.beachName}`}>{currentBeachName ?? '없음'}</h1>
      <p className={styles.baseTime}>오늘 {currentTime.time.slice(0, 2) ?? '00'}시 기준</p>
      <div className={styles.weatherWrapper}>
        <div className={styles.weatherImg}>
          <Image src={`/assets/images/clear.png`} alt="맑음" width={72} height={72} />
        </div>
        <h3 className={styles.currentTemp}>33°</h3>
      </div>
    </div>
  );
};

export default BeachInfoTop;
