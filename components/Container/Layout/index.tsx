import React, { FC } from 'react';
import 'twin.macro';

import Footer from './Footer';
import Header from './Header';

interface BaseLayoutProps {
  children?: React.ReactNode;
}

type LayoutProps = BaseLayoutProps;

const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <div tw="min-h-screen w-screen relative flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
