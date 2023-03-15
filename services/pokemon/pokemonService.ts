import axios, { AxiosRequestConfig } from 'axios';
import pokemonEndpoint from './pokemonEndpoint';

export const getPokemons = (searchQuery?: string) => {
  if (searchQuery !== undefined) return axios.get(pokemonEndpoint.pokemon + `/${searchQuery}`);
  else return axios.get(pokemonEndpoint.pokemon);
};

// export const getAllPokemon = (params?: any) => {
//   const options = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     params,
//   } as AxiosRequestConfig;
//   return axios.get(pokemonEndpoint.pokemon, options);
// };
