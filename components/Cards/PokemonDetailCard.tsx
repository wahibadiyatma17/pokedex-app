import { useGetPokemons } from '@/common/hooks/pokemonHooks';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, useMemo } from 'react';
import { styled } from 'twin.macro';
import PokemonTypeLabel from '../Labels/PokemonTypeLabel';
import { generatePokemonId, PokemonCardProps } from './PokemonCard';

const PokemonDetailCard: FC<PokemonCardProps> = (props) => {
  const { name, id } = props;
  const generatedId = generatePokemonId(id);
  const router = useRouter();

  const { data: pokemonRes } = useGetPokemons(id.toString());
  const detailPokemonData = useMemo(() => pokemonRes?.data ?? {}, [pokemonRes]);

  return (
    <StyledPokemonDetailCard
      tw="shadow-lg transition-all"
      onClick={() => router.push(`/pokemon-detail/${id}`)}
    >
      <div className="title__container">
        <h3 tw="capitalize">{name}</h3>
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
      <div className="type__container">
        {detailPokemonData?.types?.map((type: any, idx: number) => (
          <PokemonTypeLabel pokeType={type?.type?.name} key={idx} />
        ))}
      </div>
    </StyledPokemonDetailCard>
  );
};

export default PokemonDetailCard;

const StyledPokemonDetailCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  height: 392px;
  width: 100%;
  gap: 24px;
  background-color: #97d2ff;
  border-radius: 12px;
  cursor: pointer;

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
