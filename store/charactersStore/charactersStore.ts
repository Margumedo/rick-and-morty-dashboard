// store/characterStore.ts
import { create } from 'zustand';
import { CharacterStore } from './chatactesStore.types'

export const useCharacterStore = create<CharacterStore>((set) => ({
    characters: [],
    isLoading: false,
    error: null,

    fetchCharacters: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();

            console.log(data)
            set({ characters: data.results, isLoading: false });
        } catch (error) {
            set({ error: 'Failed to fetch characters', isLoading: false });
        }
    },
}));


