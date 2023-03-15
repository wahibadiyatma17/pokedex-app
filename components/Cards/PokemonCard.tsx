import { useGetPokemons } from '@/common/hooks/pokemonHooks';
import Image from 'next/image';
import React, { FC, useMemo } from 'react';
import { styled } from 'twin.macro';
import PokemonTypeLabel from '../Labels/PokemonTypeLabel';

interface BasePokemonCardProps {
  name: string;
  url?: string;
  id: number;
}

type PokemonCardProps = BasePokemonCardProps;

const PokemonCard: FC<PokemonCardProps> = (props) => {
  const { name, id } = props;
  const generatedId = generatePokemonId(id);

  const { data: pokemonRes } = useGetPokemons(id.toString());
  const detailPokemonData = useMemo(() => pokemonRes?.data ?? {}, [pokemonRes]);

  return (
    <StyledPokemonCard tw="shadow-lg">
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
      <div className="type__container">
        {detailPokemonData.types.map((type: any, idx: number) => (
          <PokemonTypeLabel pokeType={type?.type?.name} key={idx} />
        ))}
      </div>
    </StyledPokemonCard>
  );
};

export default PokemonCard;

const generatePokemonId = (id: number) => {
  if (id < 10) return `00${id}`;
  else if (id >= 10 && id < 100) return `0${id}`;
  else return id;
};

const StyledPokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  height: 392px;
  width: 256px;
  gap: 24px;
  background-color: #97d2ff;
  border-radius: 12px;

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
