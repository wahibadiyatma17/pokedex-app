import { useQuery } from 'react-query';
import {
  getPokemonEvolutionChain,
  getPokemons,
  getPokemonSpecies,
  getPokemonTypes,
} from 'services/pokemon/pokemonService';

export const useGetPokemons = (searchQuery?: string) => {
  return useQuery(['get_pokemons', searchQuery], () => getPokemons(searchQuery));
};

export const useGetPokemonTypes = (searchQuery?: string) => {
  return useQuery(['get_pokemon_types', searchQuery], () => getPokemonTypes(searchQuery));
};

export const useGetPokemonSpecies = (searchQuery?: string) => {
  return useQuery(['get_pokemon_species', searchQuery], () => getPokemonSpecies(searchQuery));
};

export const useGetPokemonEvolutionChain = (id?: number) => {
  return useQuery(['get_pokemon_evolution', id], () => getPokemonEvolutionChain(id));
};
