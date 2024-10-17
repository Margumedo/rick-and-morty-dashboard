// store/episodeStore.ts
import { create } from 'zustand';
import { EpisodeStore, addEpisode, Episode } from './episodesStore.types';



// Función para guardar personajes en LocalStorage
const saveToLocalStorage = (episodes: Episode[]) => {
    if (typeof window !== 'undefined') { // Verificar si estamos en el cliente
        localStorage.setItem('episodes', JSON.stringify(episodes));
    }
};

// Función para cargar personajes desde LocalStorage
const loadFromLocalStorage = (): Episode[] => {
    const storedEpisodes = localStorage.getItem('episodes');
    return storedEpisodes ? JSON.parse(storedEpisodes) : [];
};


export const useEpisodeStore = create<EpisodeStore>((set) => ({
    episodes: loadFromLocalStorage(), // Cargar personajes de LocalStorage al iniciar
    isLoading: false,
    error: null,

    fetchEpisodes: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await fetch('https://rickandmortyapi.com/api/episode');
            const data = await response.json();
            set((state) => {
                const existingIds = new Set(state.episodes.map((episode: Episode) => episode.id));
                const newEpisodes = data.results.filter((episode: Episode) => !existingIds.has(episode.id));

                const updatedCharacters = [...state.episodes, ...newEpisodes];
                // Guardar los personajes actualizados en LocalStorage
                saveToLocalStorage(updatedCharacters);

                return {
                    episodes: [...state.episodes, ...newEpisodes],
                    isLoading: false,
                };
            });
        } catch (error) {
            set({ error: 'Failed to fetch episodes', isLoading: false });
        }
    },

    addEpisode: (newEpisode: addEpisode) => {

        set((state) => {
            const updatedEpisodes = [...state.episodes, newEpisode];
            console.log("Updated Episodes:", updatedEpisodes);

            // Guardar los personajes actualizados en LocalStorage
            saveToLocalStorage(updatedEpisodes);

            return {
                episodes: updatedEpisodes,
            };
        });
    },
}));


