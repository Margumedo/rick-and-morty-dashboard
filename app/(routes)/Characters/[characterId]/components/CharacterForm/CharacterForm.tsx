
"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { CharacterFormTypes } from "./CharacterForm.types";

import { Button } from "@/components/ui/button"
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from '@/components/ui/form'
import {
    Select,
    SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

import { useRouter } from "next/navigation";
import { useState } from "react";

import { UploadButton } from "@/utils/uploadthing";
import { formSchema } from "./CharacterForm.form";
import { toast } from "@/hooks/use-toast";

import { useCharacterStore } from "@/store/charactersStore/charactersStore"

export function CharacterForm(props: CharacterFormTypes) {

    const { gender, id, image, name, species, status, type } = props.character

    const router = useRouter();
    const [photoUploaded, setPhotoUploaded] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({


        resolver: zodResolver(formSchema),
        defaultValues: {
            name: name,
            status: status,
            type: type,
            gender: gender,
            species: species,
            image: image,
        }

    });


    const { editCharacters } = useCharacterStore();

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {

            const updatedCharacter = {
                id: id,
                ...values,
            };

            editCharacters(updatedCharacter);

            toast({
                title: "Personaje editado",
                description: `El personaje ${values.name} ha sido actualizado correctamente.`,
            });

            router.push("/characters");

        } catch (error) {
            console.error("Error al editar el personaje:", error);
            toast({
                title: "Error",
                description: "Hubo un problema al editar el personaje.",
            });
        }
    };


    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <div className="grid grid-cols-1 gap-3">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre del personaje</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nombre..." type="text" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Estado</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Escoge un estado" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Alive">Vivo</SelectItem>
                                        <SelectItem value="Dead">Muerto</SelectItem>
                                        <SelectItem value="Unknown">Desconocido</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tipo del personaje</FormLabel>
                                <FormControl>
                                    <Input placeholder="Tipo..." type="text" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="species"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Especie del personaje</FormLabel>
                                <FormControl>
                                    <Input placeholder="Tipo..." type="text" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Genero del personaje</FormLabel>
                                <FormControl>
                                    <Input placeholder="Tipo..." type="text" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Imagen del personaje</FormLabel>
                                <FormControl>
                                    <div>

                                        {photoUploaded ?
                                            <p className="text-sm" >Imagen cargada!</p>
                                            :
                                            <UploadButton
                                                className="bg-slate-500/40 rounded-lg outline-dotted text-slate-800 outline-2"
                                                {...field}
                                                endpoint="profileImage"
                                                onClientUploadComplete={async (res) => {
                                                    form.setValue("image", res?.[0].url)
                                                    await form.trigger("image");
                                                    toast({
                                                        title: "Exito",
                                                        description: "Imgagen cargada"
                                                    })
                                                    setPhotoUploaded(true)
                                                }}
                                                onUploadError={(error: Error) => {

                                                    toast({
                                                        title: "Error",
                                                        description: "Ocurrio un error al cargar la imgagen"
                                                    })
                                                    console.log("error image", error)
                                                }}
                                            />
                                        }
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit">Editar personaje</Button>
            </form>
        </Form >

    )
};


