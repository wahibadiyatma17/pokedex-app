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
    <div tw="w-screen relative ">
      <Header />
      <div tw="max-w-[1366px] mx-auto h-[max-content] min-h-[calc(100vh-302px)] flex flex-col gap-10 px-[72px] py-10">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
