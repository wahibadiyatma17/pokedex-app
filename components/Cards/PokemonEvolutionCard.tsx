import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, useMemo } from 'react';
import { css, styled } from 'twin.macro';

import { useGetPokemons } from '@/common/hooks/pokemonHooks';
import { generatePokemonId, PokemonCardProps } from './PokemonCard';

interface BasePokemonEvolutionProps {
  name: string;
}

type PokemonEvolutionProps = BasePokemonEvolutionProps;

const PokemonEvolutionCard: FC<PokemonEvolutionProps> = (props) => {
  const { name } = props;
  const router = useRouter();

  const { data: pokemonRes } = useGetPokemons(name);
  const detailPokemonData = useMemo(() => pokemonRes?.data ?? {}, [pokemonRes]);
  const generatedId = generatePokemonId(detailPokemonData.id);

  return (
    <StyledPokemonEvolutionCard
      tw="transition-all"
      onClick={() => router.push(`/pokemon-detail/${detailPokemonData.id}`)}
    >
      <div className="title__container">
        <h3>{name}</h3>
        <span>#{generatedId}</span>
      </div>
      <div className="image__container">
        <Image
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${generatedId}.png`}
          alt={'img pokemon'}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </StyledPokemonEvolutionCard>
  );
};

export default PokemonEvolutionCard;

const StyledPokemonEvolutionCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  height: max-content;
  width: 256px;
  gap: 24px;
  border-radius: 12px;
  cursor: pointer;
  background-color: #97d2ff;

  :hover {
    transform: scale(1.02);
  }

  .title__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-style: italic;
    font-weight: 600;
    color: white;
    h3 {
      font-size: 28px;
    }
    span {
      font-size: 20px;
    }
  }

  .image__container {
    position: relative;
    width: 215px;
    height: 215px;
  }

  .type__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    width: 100%;
  }
`;
