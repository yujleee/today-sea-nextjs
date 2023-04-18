import BeachInfoList from 'components/beachInfo/BeachInfoList';
import Waves from 'components/common/Waves';
import Guide from 'components/guide/Guide';
import Header from 'components/layout/Header';
import containerstyles from 'styles/components/Container.module.scss';
import guideStyles from 'styles/components/Guide.module.scss';
import { useGuide } from 'hooks';
import BeachInfoTop from 'components/beachInfo/BeachInfoTop';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useBeachDetailData from 'hooks/useBeachDetailData';

export default function Info() {
  const router = useRouter();
  const { isOpen, handleGuideClose, handleGuideOpen } = useGuide();
  const [beachInfo, setBeachInfo] = useState({});
  const [currentTime, setCurrentTime] = useState<Now>({ date: '', time: '' });
  //   const { } = useBeachDetailData(beachInfo['beach-num'], currentTime);

  const { query } = router;

  useEffect(() => {
    setBeachInfo(JSON.parse(query.info as string));
    setCurrentTime(JSON.parse(query.time as string));
  }, [query]);

  console.log('beachInfo', beachInfo);
  console.log('currentTime', currentTime);

  return (
    <>
      <Header onOpen={handleGuideOpen} />
      <main className={containerstyles.main}>
        <BeachInfoTop />
        <BeachInfoList />
      </main>
      {isOpen && <Guide onClose={handleGuideClose} />}
      {isOpen && <div className={guideStyles.overlay}></div>}
      <Waves />
    </>
  );
}
