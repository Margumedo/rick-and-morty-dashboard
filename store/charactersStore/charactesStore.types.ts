export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    type: string;
    image: string;
    [key: string]: any;
}

export interface addCharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    type: string;
    image: string;
}

export interface CharacterStore {
    characters: Character[];
    isLoading: boolean;
    error: string | null;
    fetchCharacters: () => Promise<void>;
    addCharacters: (newCharacter: addCharacter) => void
}
