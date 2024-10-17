"use client"

import { useAuth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

import { useCharacterStore } from '@/store/charactersStore'
import { CharacterInformation } from './components/CharacterInformation';
import Header from './components/Header/Header';

export default function CharacterIdPage({ params }: { params: { characterId: string } }) {

    const characterId = parseInt(params.characterId);

    const { userId } = useAuth();

    const { characters } = useCharacterStore();

    if (!userId) return redirect('/');

    const character = characters.find(item => item.id === characterId);

    if (!character) {
        return <div>Character not found</div>;
    }

    return (
        <div>
            <Header />
            <CharacterInformation character={character} />
        </div>
    );
}
