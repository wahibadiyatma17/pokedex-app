import React, { FC } from 'react';
import 'twin.macro';

import Layout from '@/components/Layout';
import PokemonProfile from './PokemonProfile';
import PokemonEvolution from './PokemonEvolution';

const PokemonDetail: FC = () => {
  return (
    <Layout>
      <PokemonProfile />
      <PokemonEvolution />
    </Layout>
  );
};
export default PokemonDetail;
