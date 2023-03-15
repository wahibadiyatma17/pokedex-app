import PokemonEvolutionCard from '@/components/Cards/PokemonEvolutionCard';
import React, { FC } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { styled } from 'twin.macro';

const PokemonEvolution: FC = () => {
  return (
    <StyledPokemonEvolution tw="shadow-lg">
      <h3 tw="font-bold text-xl text-[#97d2ff]">Evolution</h3>
      <div tw="flex w-full justify-between items-center">
        <PokemonEvolutionCard id={1} name={'bulbasaur'} />
        <FaArrowRight size={40} color={'#97d2ff'} />
        <PokemonEvolutionCard id={2} name={'bulbasaur'} />
        <FaArrowRight size={40} color={'#97d2ff'} />
        <PokemonEvolutionCard id={3} name={'bulbasaur'} />
      </div>
    </StyledPokemonEvolution>
  );
};

export default PokemonEvolution;

const StyledPokemonEvolution = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 3px solid #97d2ff;
  border-radius: 12px;

  width: 100%;
  height: max-content;
  min-height: 320px;
`;
