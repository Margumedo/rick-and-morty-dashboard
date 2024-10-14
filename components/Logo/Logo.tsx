"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Logo() {
    const router = useRouter();

    return (
        <div className="min-h-20 h-20 flex items-center gap-x-2 px-6 cursor-pointer " onClick={() => router.push('/')}>
            <Image src="/logo.svg" alt="logo" width={50} height={50} priority />
            <h1 className="font-bold text-xl md:text-lg  text-">Rick And Morty</h1>
        </div>
    );
}
