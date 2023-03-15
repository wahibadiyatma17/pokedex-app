import React, { FC } from 'react';
import 'twin.macro';

const SkeletonPokemonCard: FC = () => {
  return <div tw="w-[256px] h-[392px] bg-gray-400 rounded-[12px] animate-pulse" />;
};

export default SkeletonPokemonCard;
