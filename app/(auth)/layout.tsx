

export default function layoutAuth({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-3xl my-4">¡Welcome to Rick And Morty!</h1>
            {children}
        </div>
    )
}
