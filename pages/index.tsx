import React from 'react';
import { NextPage } from 'next';
import 'twin.macro';

import SEO from '@/common/seo';
import Home from '@/components/Container/Home';

const HomePage: NextPage = () => {
  return (
    <>
      <SEO
        title="Pokedex"
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
      <Home />
    </>
  );
};

export default HomePage;
