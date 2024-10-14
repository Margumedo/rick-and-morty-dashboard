interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    [key: string]: any;
}

export interface EpisodeStore {
    episodes: Episode[];
    isLoading: boolean;
    error: string | null;
    fetchEpisodes: () => Promise<void>;
}