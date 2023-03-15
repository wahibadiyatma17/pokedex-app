import Image from 'next/image';
import React, { FC } from 'react';
import 'twin.macro';

const HomeHeader: FC = () => {
  return (
    <div tw="w-full h-[132px] flex items-center justify-center bg-[#5DB9FF]">
      <div tw="relative w-[200px] h-[68px]">
        <Image
          src={'/img/img-pokedex.png'}
          alt={'pokedex banner'}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  );
};

export default HomeHeader;
