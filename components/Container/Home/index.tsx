import React, { FC } from 'react';
import 'twin.macro';

import HomeHeader from './HomeHeader';

const Home: FC = () => {
  return (
    <div tw="min-h-screen w-screen flex flex-col">
      <HomeHeader />
    </div>
  );
};

export default Home;
