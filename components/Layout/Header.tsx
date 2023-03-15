import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import 'twin.macro';

const Header: FC = () => {
  const router = useRouter();
  return (
    <div tw="w-full h-[132px] flex items-center justify-center bg-[#97D2FF] shadow-md">
      <div tw="relative w-[200px] h-[68px] cursor-pointer" onClick={() => router.push('/')}>
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
