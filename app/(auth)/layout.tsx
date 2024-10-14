import { Logo } from "@/components/Logo";


export default function layoutAuth({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <Logo />
            <h1 className="text-3xl my-4">¡Welcome to Rick And Morty App!</h1>
            {children}
        </div>
    )
}
