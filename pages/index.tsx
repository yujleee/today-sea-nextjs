import type { NextPage } from 'next';
import Clouds from '../components/common/Clouds';
import Waves from '../components/common/Waves';
import Search from '../components/home/Search';

const Home: NextPage = () => {
  return (
    <div>
      <Clouds />
      <main className="main">
        <div className="title-wrapper">
          <h1 className="title">오늘의 바다</h1>
          <p className="desc-text">해수욕장을 검색해 일기 예보를 확인해보세요.</p>
        </div>
        <Search />
      </main>
      <Waves />
    </div>
  );
};

export default Home;
