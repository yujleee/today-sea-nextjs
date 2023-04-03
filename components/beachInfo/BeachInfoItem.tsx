import styles from 'styles/components/BeachInfoWrapper.module.scss';
import infoStyles from 'styles/components/InfoList.module.scss';
import { FaSwimmer, FaWind } from 'react-icons/fa';
import { BsFillSunFill } from 'react-icons/bs';
import { BiWater } from 'react-icons/bi';

interface BeachInfoItemProps {
  type: string;
  text: string[];
}

const BeachInfoItem = ({ type, text }: BeachInfoItemProps) => {
  return (
    <article className={`${styles.beachInfoWrapper}`}>
      <h1 className="visually-hidden">온도 습도 정보</h1>
      <div className={`${styles.icWrapper}`}>
        {type === 'swim' && <FaSwimmer className={`${styles.faSolid}`} />}
        {type === 'water' && <BiWater className={`${styles.faSolid} `} />}
        {type === 'sun' && <BsFillSunFill className={`${styles.faSolid} `} />}
        {type === 'wind' && <FaWind className={`${styles.faSolid} `} />}
      </div>
      <dl className={`${infoStyles.infoList}`}>
        <dt>{text[0]}</dt>
        <dd>정보없음</dd>
        <dt>{text[1]}</dt>
        <dd>정보없음</dd>
        {text[2] ? (
          <>
            <dt>{text[2]}</dt>
            <dd>정보없음</dd>
          </>
        ) : null}
      </dl>
    </article>
  );
};

export default BeachInfoItem;
