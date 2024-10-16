import { HeaderCharacters } from "../components/HeaderCharacters"
import { ListCharacters } from "../components/ListCharacters"






export default function CharactersPage() {
    return (
        <div className="flex flex-col gap-y-4">
            <HeaderCharacters />
            <ListCharacters />
        </div>
    )
}
