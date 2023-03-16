import SEO from '@/common/seo';
import React, { FC } from 'react';
import PokemonDetail from '@/components/Container/PokemonDetail';
import { NextPage } from 'next';

const PokemonDetailPage: NextPage = () => {
  return (
    <>
      <SEO
        title="Pokemon Detail"
        description="Pokedex App"
        openGraph={{
          type: 'website',
          title: 'Pokedex',
          description: 'Pokedex App',
          images: [
            {
              url: '/img/img-pokedex.ppng',
              alt: 'pokedex-icon',
            },
          ],
          url: '#',
          locale: 'en_US',
          site_name: 'Pokedex',
        }}
      />
      <PokemonDetail />
    </>
  );
};

export default PokemonDetailPage;
