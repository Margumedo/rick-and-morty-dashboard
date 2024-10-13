import { Navbar } from "@/components/Navabar"

export default function layoutDashboard({ children }: { children: React.ReactElement }) {
    return (
        <div className="flex w-full h-full">
            <div className="hidden lg:block w-80 h-full xl:fixed">sidebard</div>
            <div className="w-full xl:ml-80">
                <Navbar />
                <div className="p-6 bg-gray-100 dark:bg-secondary" >
                    {children}
                </div>
            </div>

        </div >
    )
}
