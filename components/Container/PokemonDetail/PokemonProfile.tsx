import PokemonDetailCard from '@/components/Cards/PokemonDetailCard';
import React, { FC } from 'react';
import { styled } from 'twin.macro';

const PokemonProfile: FC = () => {
  return (
    <StyledPokemonProfile>
      <PokemonDetailCard name={'Bulbasaur'} id={1} />
      <div className="pokemon-description__container">
        <span className="pokemon-description__text">
          Sometimes seen at the foot of trees in humid forests. The mushrooms on its back—called
          tochukaso—are not present on infant specimens and instead emerge as Paras matures.
        </span>
        <div className="pokemon-profile__container">
          <div tw="flex flex-col justify-between w-full text-white gap-10">
            <div tw="flex flex-col">
              <span tw="font-medium text-base">Height</span>
              <span tw="font-semibold text-lg">0.3 M</span>
            </div>
            <div tw="flex flex-col ">
              <span tw="font-medium text-base">Weight</span>
              <span tw="font-semibold text-lg">5.4 Kg</span>
            </div>
            <div tw="flex flex-col ">
              <span tw="font-medium text-base">Gender</span>
              <span tw="font-semibold text-lg">50%♀ 50%♂</span>
            </div>
          </div>
          <div tw="flex flex-col justify-between w-full text-white gap-10">
            <div tw="flex flex-col ">
              <span tw="font-medium text-base">Capture rate</span>
              <span tw="font-semibold text-lg">190%</span>
            </div>
            <div tw="flex flex-col ">
              <span tw="font-medium text-base">Abilities</span>
              <span tw="font-semibold text-lg">Effect-Spore, Dry-Skin, Damp</span>
            </div>
            <div tw="flex flex-col ">
              <span tw="font-medium text-base">Habitat</span>
              <span tw="font-semibold text-lg">Forest</span>
            </div>
          </div>
        </div>
      </div>
    </StyledPokemonProfile>
  );
};

export default PokemonProfile;

const StyledPokemonProfile = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  gap: 28px;
  align-items: center;

  .pokemon-description__container {
    display: flex;
    flex-direction: column;
    text-align: justify;
    gap: 24px;
    width: 100%;

    .pokemon-description__text {
      font-size: 20px;
      font-weight: 500;
      color: #555555;
    }

    .pokemon-profile__container {
      display: flex;
      justify-content: space-between;
      background: #97d2ff;
      padding: 16px;
      width: 95%;
      height: max-content;

      border-radius: 12px;
    }
  }
`;
