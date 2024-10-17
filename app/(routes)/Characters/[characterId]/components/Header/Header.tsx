
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";



export default function Header() {

    const router = useRouter();
    return (
        <div className="flex items-center text-xl">
            <ArrowLeft className="h-5 w-5 mr-2 cursor-pointer" onClick={() => router.push('/characters')} />
            <p className="text-xl">Editar Personaje</p>
        </div>
    )
}
