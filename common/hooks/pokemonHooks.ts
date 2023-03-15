import { useQuery } from 'react-query';
import { getPokemons } from 'services/pokemon/pokemonService';

// export const useGetPokemonDetail = (searchQuery: string) => {
//   return useQuery("get_pokemon_detail", () => getPokemonDetail(searchQuery));
// };

export const useGetPokemons = (searchQuery?: string) => {
  return useQuery(['get_pokemons', searchQuery], () => getPokemons(searchQuery));
};
