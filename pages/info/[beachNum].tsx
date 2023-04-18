import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { beachNumState, currentTimeState } from 'recoil/atoms/atoms';
import { useGuide, useBeachDetailData } from 'hooks';
import BeachInfoList from 'components/beachInfo/BeachInfoList';
import Waves from 'components/common/Waves';
import Guide from 'components/guide/Guide';
import Header from 'components/layout/Header';
import BeachInfoTop from 'components/beachInfo/BeachInfoTop';
import containerstyles from 'styles/components/Container.module.scss';
import guideStyles from 'styles/components/Guide.module.scss';

export default function Info() {
  const router = useRouter();
  const { isOpen, handleGuideClose, handleGuideOpen } = useGuide();
  const [beachInfo, setBeachInfo] = useState<Beach | null>(null);
  const beachNum = useRecoilValue(beachNumState);
  const currentTime = useRecoilValue(currentTimeState);
  const { forecasts, suns, tides } = useBeachDetailData(beachNum, currentTime);

  const { query } = router;

  useEffect(() => {
    setBeachInfo(JSON.parse(query.info as string));
  }, [query]);

  return (
    <>
      <Header onOpen={handleGuideOpen} />
      <main className={containerstyles.main}>
        <BeachInfoTop forecasts={forecasts} />
        <BeachInfoList forecasts={forecasts} tides={tides} suns={suns} />
      </main>
      {isOpen && <Guide onClose={handleGuideClose} />}
      {isOpen && <div className={guideStyles.overlay}></div>}
      <Waves />
    </>
  );
}
