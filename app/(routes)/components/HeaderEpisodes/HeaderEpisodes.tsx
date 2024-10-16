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
import { UsersRound } from "lucide-react";
import { CustomIcon } from "@/components/CustomIcon";



import React from 'react'

export function HeaderEpisodes() {
    const [openModalCreate, setOpenModalCreate] = useState(false)

    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-4">
                <CustomIcon icon={UsersRound} />
                <h2 className="text-2xl">Lista de Episodios</h2>
            </div>

            <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
                <DialogTrigger asChild>
                    <Button>Crear Episodio</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                    <DialogHeader>
                        <DialogTitle>Crear un Episodio</DialogTitle>
                        <DialogDescription>Crear una aventura</DialogDescription>
                    </DialogHeader>

                    <FromCreateCustomer setOpenModalCreate={setOpenModalCreate} />
                </DialogContent>
            </Dialog>

        </div>
    )
}
