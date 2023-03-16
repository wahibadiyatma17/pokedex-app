import React, { FC } from 'react';
import 'twin.macro';

import Layout from '@/components/Layout';
import PokemonProfile from './PokemonProfile';

const PokemonDetail: FC = () => {
  return (
    <Layout>
      <PokemonProfile />
    </Layout>
  );
};
export default PokemonDetail;
