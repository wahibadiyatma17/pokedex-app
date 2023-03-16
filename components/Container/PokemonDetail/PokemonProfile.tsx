import {
  useGetPokemonEvolutionChain,
  useGetPokemons,
  useGetPokemonSpecies,
} from '@/common/hooks/pokemonHooks';
import PokemonDetailCard from '@/components/Cards/PokemonDetailCard';
import { useRouter } from 'next/router';
import React, { FC, useMemo } from 'react';
import { styled } from 'twin.macro';

const PokemonProfile: FC = () => {
  const router = useRouter();
  const id = router.query.id;
  const parsedId = String(id);

  const { data: pokemonSpeciesRes } = useGetPokemonSpecies(parsedId);
  const { data: pokemonDetailRes } = useGetPokemons(parsedId);
  const pokemonSpeciesData = useMemo(() => pokemonSpeciesRes?.data ?? {}, [pokemonSpeciesRes]);
  const pokemonDetailData = useMemo(() => pokemonDetailRes?.data ?? {}, [pokemonDetailRes]);

  const pokemonHeight = pokemonDetailData.height * 0.1;
  const pokemonWeight = pokemonDetailData.weight * 0.1;
  const pokemonAbilities = pokemonDetailData?.abilities?.map((data: any) => {
    return data?.ability?.name;
  });
  const pokemonHabitat = pokemonSpeciesData?.habitat?.name ?? '-';

  return (
    <StyledPokemonProfile>
      <PokemonDetailCard name={pokemonSpeciesData.name} id={parseInt(parsedId)} />
      <div className="pokemon-description__container">
        <span className="pokemon-description__text">
          Sometimes seen at the foot of trees in humid forests. The mushrooms on its back—called
          tochukaso—are not present on infant specimens and instead emerge as Paras matures.
        </span>
        <div className="pokemon-profile__container">
          <div tw="flex flex-col justify-between w-full text-white gap-10">
            <div tw="flex flex-col">
              <span tw="font-medium text-base">Height</span>
              <span tw="font-semibold text-lg">{pokemonHeight} M</span>
            </div>
            <div tw="flex flex-col ">
              <span tw="font-medium text-base">Weight</span>
              <span tw="font-semibold text-lg">{pokemonWeight} Kg</span>
            </div>
            <div tw="flex flex-col ">
              <span tw="font-medium text-base">Gender</span>
              <span tw="font-semibold text-lg">50%♀ 50%♂</span>
            </div>
          </div>
          <div tw="flex flex-col justify-between w-full text-white gap-10">
            <div tw="flex flex-col ">
              <span tw="font-medium text-base">Capture rate</span>
              <span tw="font-semibold text-lg">{pokemonSpeciesData.capture_rate}%</span>
            </div>
            <div tw="flex flex-col ">
              <span tw="font-medium text-base">Abilities</span>
              <div tw="flex gap-2">
                {pokemonAbilities.map((ability: string, idx: number) => (
                  <span tw="font-semibold text-lg capitalize" key={idx}>
                    {ability}
                    {idx + 1 !== pokemonAbilities.length && ', '}
                  </span>
                ))}
              </div>
            </div>
            <div tw="flex flex-col ">
              <span tw="font-medium text-base">Habitat</span>
              <span tw="font-semibold text-lg capitalize">{pokemonHabitat}</span>
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
