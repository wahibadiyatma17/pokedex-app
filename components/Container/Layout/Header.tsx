import Image from 'next/image';
import React, { FC } from 'react';
import 'twin.macro';

const Header: FC = () => {
  return (
    <div tw="w-full h-[132px] flex items-center justify-center bg-[#97D2FF]">
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

export default Header;
