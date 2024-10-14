import { CustomIcon } from "@/components/CustomIcon";
import { MonitorPlay } from "lucide-react";
import { EspisodesTable } from "../EspisodesTable";


export function LastEpisodes() {
    return (
        <div className="shadow-sm bg-background   rounded-lg py-2">
            <div className="flex gap-x-2 items-center px-6 py-2">
                <CustomIcon icon={MonitorPlay} />
                <p>Lista de episodios</p>
            </div>
            <div className="px-6 py-2">
                <EspisodesTable />
            </div>
        </div>
    )
}
