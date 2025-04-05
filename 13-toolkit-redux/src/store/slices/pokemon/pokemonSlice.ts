import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Define a type for the slice state
interface PokemonState {
  page: number;
  pokemons: [];
  isLoading: boolean;
}

// Define the initial state using that type
const initialState: PokemonState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action: PayloadAction<[]>) => {
      state.pokemons = action.payload;
      state.isLoading = false;
    },
  },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.pokemons.pokemons;

export default pokemonSlice.reducer;
