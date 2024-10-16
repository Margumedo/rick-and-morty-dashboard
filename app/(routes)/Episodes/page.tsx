import { HeaderEpisodes } from "../components/HeaderEpisodes/HeaderEpisodes";
import { ListEpisodes } from "../components/ListEpisodes";

export default function EpisodesPage() {
    return (
        <div className="flex flex-col gap-y-4">
            <HeaderEpisodes />
            <ListEpisodes />
        </div>
    )
}
