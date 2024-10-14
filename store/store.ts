import { create } from 'zustand';



// Define el tipo de los personajes de la API de Rick and Morty
interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string
    [key: string]: any; // Permite manejar propiedades adicionales si es necesario
}

// Define el tipo del estado de la tienda
interface CharacterStore {
    characters: Character[];
    isLoading: boolean;
    error: string | null;
    fetchCharacters: () => Promise<void>; // Acción para obtener personajes
}

// Definir el store utilizando los tipos de TypeScript
const useCharacterStore = create<CharacterStore>((set) => ({
    characters: [],
    isLoading: false,
    error: null,

    // Acción para obtener los personajes de la API de Rick and Morty
    fetchCharacters: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();
            set({ characters: data.results, isLoading: false });
        } catch (error) {
            set({ error: 'Failed to fetch characters', isLoading: false });
        }
    },
}));

export default useCharacterStore;
