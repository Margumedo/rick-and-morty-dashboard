import Image from "next/image";
import { CharacterInformationTypes } from "./CharacterInformation.types";
import { CharacterForm } from "../CharacterForm/CharacterForm";



export function CharacterInformation(props: CharacterInformationTypes) {

    const { character } = props
    const { image } = character


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">
            <div className="rounded-lg bg-background shadow-md hover:shadow-lg p-4">
                <div>
                    <Image src={image} alt="imagen" width={100} height={100} className="rounded-md mb-3" />
                    <CharacterForm character={character} />
                </div>
            </div>

        </div>
    )
}
