import React, { FC } from 'react';
import 'twin.macro';

import Layout from '../../Layout';
import HomePokeList from './HomePokeList';

const Home: FC = () => {
  return (
    <Layout>
      <HomePokeList />
    </Layout>
  );
};

export default Home;
