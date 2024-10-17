import { create } from 'zustand';
import { CharacterStore, addCharacter, Character } from './charactesStore.types';


const saveToLocalStorage = (characters: Character[]) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('characters', JSON.stringify(characters));
    }
};


const loadFromLocalStorage = (): Character[] => {
    const storedCharacters = localStorage.getItem('characters');
    return storedCharacters ? JSON.parse(storedCharacters) : [];
};

export const useCharacterStore = create<CharacterStore>((set) => ({
    characters: loadFromLocalStorage(),
    isLoading: false,
    error: null,

    fetchCharacters: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();
            set((state) => {
                const existingIds = new Set(state.characters.map((character: Character) => character.id));
                const newCharacters = data.results.filter((character: Character) => !existingIds.has(character.id));

                const updatedCharacters = [...state.characters, ...newCharacters];

                saveToLocalStorage(updatedCharacters);

                return {
                    characters: [...state.characters, ...newCharacters],
                    isLoading: false,
                };
            });
        } catch (error) {
            set({ error: 'Failed to fetch characters', isLoading: false });
        }
    },

    addCharacters: (newCharacter: addCharacter) => {
        set((state) => {
            const updatedCharacters = [...state.characters, newCharacter];
            console.log("Updated characters:", updatedCharacters);

            saveToLocalStorage(updatedCharacters);

            return {
                characters: updatedCharacters,
            };
        });
    },


    editCharacters: (updatedCharacter: Character) => {
        set((state) => {
            const updatedCharacters = state.characters.map((character) =>
                character.id === updatedCharacter.id ? updatedCharacter : character
            );

            saveToLocalStorage(updatedCharacters);

            return {
                characters: updatedCharacters,
            };
        });
    },
}));
