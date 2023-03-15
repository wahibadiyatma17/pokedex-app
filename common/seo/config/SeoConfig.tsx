import { DefaultSeoProps } from 'next-seo';

const NEXT_SEO_CONFIG = {
  defaultTitle: 'Pokedex',
  description: 'Pokedex App',
  canonical: '#',
  openGraph: {
    type: 'website',
    title: 'Company',
    description: 'Pokedex App',
    images: [
      {
        url: '/icon/icon-pokedex.png',
        width: 640,
        height: 640,
        alt: 'company-logo',
      },
    ],
    url: '#',
    locale: 'en_US',
    site_name: 'Company',
  },
  twitter: {
    cardType: 'summary',
    site: '',
    handle: '',
  },
} as DefaultSeoProps;

export default NEXT_SEO_CONFIG;
