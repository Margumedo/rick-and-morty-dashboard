
interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
}

export type CharacterFormTypes = {
    character: Character;
}