import { create } from 'zustand';
import { CharacterStore, addCharacter, Character } from './charactesStore.types';


// Función para guardar personajes en LocalStorage
const saveToLocalStorage = (characters: Character[]) => {
    if (typeof window !== 'undefined') { // Verificar si estamos en el cliente
        localStorage.setItem('characters', JSON.stringify(characters));
    }
};

// Función para cargar personajes desde LocalStorage
const loadFromLocalStorage = (): Character[] => {
    const storedCharacters = localStorage.getItem('characters');
    return storedCharacters ? JSON.parse(storedCharacters) : [];
};


export const useCharacterStore = create<CharacterStore>((set) => ({
    characters: loadFromLocalStorage(), // Cargar personajes de LocalStorage al iniciar
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
                // Guardar los personajes actualizados en LocalStorage
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

            // Guardar los personajes actualizados en LocalStorage
            saveToLocalStorage(updatedCharacters);

            return {
                characters: updatedCharacters,
            };
        });
    },
}));
