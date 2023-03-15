import React, { FC, useEffect, useMemo, useState } from 'react';
import { useDebounce } from 'usehooks-ts';
import { styled } from 'twin.macro';

import { TextInput } from '@/components/Froms/Text';
import PokemonCard from '@/components/Cards/PokemonCard';
import { useGetPokemons } from '@/common/hooks/pokemonHooks';
import SkeletonPokemonCard from '@/components/Skeleton/SkeletonPokemonCard';

const HomePokeList: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const { data: pokemonRes } = useGetPokemons(searchValue);
  const pokemonData = useMemo(() => pokemonRes?.data ?? {}, [pokemonRes]);

  return (
    <StyledHomePokeList>
      <div className="search__container">
        <h4 tw="font-bold text-[#555555] text-xl italic">Search Name or Number</h4>
        <TextInput
          value={searchValue}
          placeholder={'Ex. Pikachu'}
          onChange={(event: any) => setSearchValue(event.target.value)}
        />
      </div>
      <div className="poke-card__container">
        {!!!pokemonRes ? (
          renderLoading()
        ) : !!searchValue ? (
          <PokemonCard name={pokemonData.name} id={pokemonData.id} />
        ) : (
          pokemonData?.results?.map((data: { name: string; url: string }, idx: number) => (
            <PokemonCard key={idx} name={data.name} url={data.url} id={idx + 1} />
          ))
        )}
      </div>
    </StyledHomePokeList>
  );
};

export default HomePokeList;

const renderLoading = () => (
  <>
    {[0, 1, 2, 3].map((data: number) => (
      <SkeletonPokemonCard key={data} />
    ))}
  </>
);

const StyledHomePokeList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  gap: 32px;

  .search__container {
    display: flex;
    heigth: max-content;
    flex-direction: column;
    gap: 8px;
    padding: 0px 24px;
  }

  .poke-card__container {
    width: 100%;
    height: max-content;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }
`;
