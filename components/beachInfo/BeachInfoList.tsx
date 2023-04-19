import styles from 'styles/components/InfoArea.module.scss';
import BeachInfoItem from './BeachInfoItem';

interface BeachInfoListProps {
  forecasts: Forecast[];
  tides: Tide[];
  suns: Sun[];
}

const BeachInfoList = ({ forecasts, tides, suns }: BeachInfoListProps) => {
  return (
    <section className={styles.infoArea}>
      <BeachInfoItem type="swim" text={['수온', '습도']} />
      <BeachInfoItem type="sun" text={['일출', '일몰']} />
      <BeachInfoItem type="water" text={['간조', '만조', '파도']} />
      <BeachInfoItem type="wind" text={['풍속', '풍향']} />
    </section>
  );
};

export default BeachInfoList;
