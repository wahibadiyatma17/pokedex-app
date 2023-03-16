import React, { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
import 'twin.macro';

const Header: FC = () => {
  const router = useRouter();
  const isDetailPage = router.pathname.includes('pokemon-detail');

  return (
    <div tw="w-full h-[132px] relative flex items-center justify-center bg-[#97D2FF] shadow-md">
      {isDetailPage && (
        <div tw="absolute left-[72px] cursor-pointer" onClick={() => router.back()}>
          <FaArrowLeft size={32} color={'#ffffff'} />
        </div>
      )}

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
