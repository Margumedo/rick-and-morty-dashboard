// store/episodeStore.ts
import { create } from 'zustand';
import { EpisodeStore } from './episodesStore.types';



const useEpisodeStore = create<EpisodeStore>((set) => ({
    episodes: [],
    isLoading: false,
    error: null,

    fetchEpisodes: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await fetch('https://rickandmortyapi.com/api/episode');
            const data = await response.json();
            set({ episodes: data.results, isLoading: false });
        } catch (error) {
            set({ error: 'Failed to fetch episodes', isLoading: false });
        }
    },
}));

export default useEpisodeStore;
