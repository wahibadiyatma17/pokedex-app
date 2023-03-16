import { useGetPokemonEvolutionChain } from '@/common/hooks/pokemonHooks';
import PokemonEvolutionCard from '@/components/Cards/PokemonEvolutionCard';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { styled } from 'twin.macro';

const PokemonEvolution: FC = () => {
  const router = useRouter();

  return (
    <StyledPokemonEvolution tw="shadow-lg">
      <h3 tw="font-bold text-xl text-[#97d2ff]">Evolution</h3>
      {router.isReady ? (
        <div tw="flex w-full justify-between items-center">
          <PokemonEvolutionCard name={'bulbasaur'} />
          <FaArrowRight size={40} color={'#97d2ff'} />
          <PokemonEvolutionCard name={'bulbasaur'} />
          <FaArrowRight size={40} color={'#97d2ff'} />
          <PokemonEvolutionCard name={'bulbasaur'} />
        </div>
      ) : (
        <div tw="flex w-full justify-between items-center bg-gray-400 animate-pulse" />
      )}
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
