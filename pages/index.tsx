import type { NextPage } from 'next';
import Clouds from '../components/common/Clouds';
import Waves from '../components/common/Waves';

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <Clouds />
        <Waves />
      </main>
    </div>
  );
};

export default Home;
