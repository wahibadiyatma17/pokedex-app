import React, { FC } from 'react';
import 'twin.macro';

const PokemonTypeLabel: FC = () => {
  return (
    <div tw="flex items-center justify-center   rounded-[8px] w-[124px] h-[48px] bg-[#7ac74c]">
      <span tw="font-bold text-white text-lg">Grass</span>
    </div>
  );
};

export default PokemonTypeLabel;
