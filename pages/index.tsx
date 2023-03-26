import type { NextPage } from 'next';
import Clouds from 'components/common/Clouds';
import Waves from 'components/common/Waves';
import Search from 'components/home/Search';
import Containerstyles from 'styles/components/Container.module.scss';
import Homestyles from 'styles/components/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div>
      <Clouds />
      <main className={Containerstyles.main}>
        <div className={Homestyles.titleWrapper}>
          <h1 className={Containerstyles.title}>오늘의 바다</h1>
          <p className={Homestyles.descText}>해수욕장을 검색해 일기 예보를 확인해보세요.</p>
        </div>
        <Search />
      </main>
      <Waves />
    </div>
  );
};

export default Home;
