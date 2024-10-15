"use client"

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { useState } from "react";
import FromCreateCustomer from "../FromCreateCustomer/FormCreateCustomer";

export function HeaderCharacters() {

    const [openModalCreate, setOpenModalCreate] = useState(false)

    return (
        <div className="flex justify-between items-center border border-red-500">
            <h2 className="text-2xl">Lista de Personajes</h2>

            <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
                <DialogTrigger asChild>
                    <Button>Crear Personaje</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                    <DialogHeader>
                        <DialogTitle>Crear un Personaje</DialogTitle>
                        <DialogDescription>Crear un nuevo compañero de aventura</DialogDescription>
                    </DialogHeader>

                    <FromCreateCustomer setOpenModalCreate={setOpenModalCreate} />
                </DialogContent>
            </Dialog>

        </div>
    )
}
