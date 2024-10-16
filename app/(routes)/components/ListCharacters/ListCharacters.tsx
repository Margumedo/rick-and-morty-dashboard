import { CustomIcon } from "@/components/CustomIcon";
import { CharactersTable } from "../CharactersTable";
import { UsersRound } from "lucide-react";



export function ListCharacters() {
    return (
        <div className="shadow-sm bg-background rounded-lg">
            {/* <div className="flex gap-x-2 items-center px-6 py-2">
                <CustomIcon icon={UsersRound} />
            </div> */}
            <div className="py-2 px-6">
                <CharactersTable />
            </div>
        </div>
    )
}
