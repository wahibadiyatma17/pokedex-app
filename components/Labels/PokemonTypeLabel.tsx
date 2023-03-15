import React, { FC } from 'react';
import { css } from 'twin.macro';

interface BasePokemonTypeLabelProps {
  pokeType: string;
}
type PokemonTypeLabelProps = BasePokemonTypeLabelProps;

const PokemonTypeLabel: FC<BasePokemonTypeLabelProps> = (props) => {
  const { pokeType } = props;
  return (
    <div
      tw="flex items-center justify-center rounded-[8px] w-full h-[48px]"
      css={cssLabelBg(pokeType)}
    >
      <span tw="font-bold text-white text-lg capitalize">{pokeType}</span>
    </div>
  );
};

export default PokemonTypeLabel;

const cssLabelBg = (pokeType: string) => css`
  background-color: ${getLabelBg(pokeType)} !important;
`;

export const getLabelBg = (pokeType: string) => {
  switch (pokeType) {
    case 'grass':
      return '#7ac74c';
    case 'poison':
      return '#a33ea1';
    case 'fire':
      return '#ee8130';
    case 'flying':
      return '#a98ff3';
    case 'water':
      return '#6390f0';
    case 'bug':
      return '#a6b91a';
    case 'normal':
      return '#6390f0';
    case 'electric':
      return '#f7d02c';
    case 'ground':
      return '#e2bf65';
    case 'fairy':
      return '#d685ad';
    default:
      return '#6390f0';
  }
};
