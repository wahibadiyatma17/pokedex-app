import React, { FC } from 'react';
import { BsGithub } from 'react-icons/bs';
import 'twin.macro';

const Footer: FC = () => {
  return (
    <div tw="flex items-center justify-center bg-[#97D2FF] p-6">
      <div tw="flex flex-col items-center justify-center">
        <h3 tw="text-base font-semibold text-white">
          Developed by <strong>Wahib Adiyatma</strong>
        </h3>
        <div tw="flex items-center justify-center gap-2 text-white">
          <span tw="text-sm font-medium">
            View code on <strong tw="italic">Github</strong>
          </span>
          <BsGithub size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
