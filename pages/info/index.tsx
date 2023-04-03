import BeachInfoList from 'components/beachInfo/BeachInfoList';
import { useState } from 'react';
import Waves from 'components/common/Waves';
import Guide from 'components/guide/Guide';
import Header from 'components/layout/Header';
import containerstyles from 'styles/components/Container.module.scss';
import guideStyles from 'styles/components/Guide.module.scss';
import { useGuide } from 'hooks';
import BeachInfoTop from 'components/beachInfo/BeachInfoTop';

export default function Info() {
  const { isOpen, handleGuideClose, handleGuideOpen } = useGuide();

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
