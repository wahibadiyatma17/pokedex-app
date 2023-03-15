import React, { FC, useState } from 'react';
import { styled } from 'twin.macro';

import { TextInput } from '@/components/Froms/Text';
import PokemonCard from '@/components/Cards/PokemonCard';

const HomePokeList: FC = () => {
  const [searchValue, setSearchValue] = useState('');
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
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((data, idx) => (
          <PokemonCard key={idx} />
        ))}
      </div>
    </StyledHomePokeList>
  );
};

export default HomePokeList;

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
