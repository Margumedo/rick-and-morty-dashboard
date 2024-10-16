import { CustomIcon } from "@/components/CustomIcon";
import { UsersRound } from "lucide-react";
import { LastCharacterTable } from "../LastCharacterTable";



export function LastCharacters() {
    return (
        <div className="shadow-sm bg-background rounded-lg py-2">
            <div className="flex gap-x-2 items-center px-6 py-2">
                <CustomIcon icon={UsersRound} />
                <p>ultimos de personajes</p>
            </div>
            <div className="py-2 px-6">
                <LastCharacterTable />
            </div>
        </div>
    )
}
