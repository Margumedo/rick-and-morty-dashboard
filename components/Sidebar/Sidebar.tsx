import { Logo } from "@/components/Logo";
import { SidebarRoutes } from "../SidebarRoutes";




export function Sidebar() {
    return (
        <div className="h-screen">
            <div className="">
                <Logo />
                <SidebarRoutes />
            </div>
        </div>
    )
}
