import Image from 'next/image';
import React, { FC } from 'react';
import { styled } from 'twin.macro';
import PokemonTypeLabel from '../Labels/PokemonTypeLabel';

const PokemonCard: FC = () => {
  return (
    <StyledPokemonCard tw="shadow-lg">
      <div className="title__container">
        <h3>Bulbasaur</h3>
        <span>#001</span>
      </div>
      <div className="image__container">
        <Image
          src={'/img/img-pokemon-dummy.png'}
          alt={'img pokemon'}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="type__container">
        <PokemonTypeLabel />
        <PokemonTypeLabel />
      </div>
    </StyledPokemonCard>
  );
};

export default PokemonCard;

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
