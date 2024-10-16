"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormCreateCustomerProps } from "./FormCreateCustomer.types"
import { useState } from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { UploadButton } from "@/utils/uploadthing"
import { toast } from "@/hooks/use-toast"
import { useCharacterStore } from "@/store/charactersStore"
import { useRouter } from "next/navigation"

const formSchema = z.object({

    name: z.string().min(2),
    status: z.string(),
    species: z.string().min(2),
    type: z.string().min(2),
    gender: z.string().min(2),
    image: z.string(),
})




export default function FormCreateCustomer(props: FormCreateCustomerProps) {

    const { setOpenModalCreate } = props
    const [photoUploaded, setPhotoUploaded] = useState(false)

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            status: "",
            species: "",
            type: "",
            gender: "",
            image: "",
        },
    })

    const { isValid } = form.formState

    const { characters, addCharacters } = useCharacterStore();
    const router = useRouter();
    // 2. Define a submit handler.

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            // const newId = uuidv4();
            const newId = characters.length + 1

            const newCharacter = {
                id: newId,
                ...values,
            };
            addCharacters(newCharacter);

            toast({
                title: "Personaje agregado",
                description: `El personaje ${values.name} ha sido agregado correctamente.`,
            });
            router.refresh()
            setOpenModalCreate(false)

        } catch (error) {
            console.error("Error al agregar personaje:", error);

            // Feedback de error al usuario
            toast({
                title: "Error",
                description: "Hubo un problema al agregar el personaje.",

            });
        }
    };



    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-2 gap-4">

                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nombre</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Nombre" type='text' {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Dale un nombre cool a tu personaje.
                                    </FormDescription>
                                    <FormMessage />
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
                                            <SelectGroup>
                                                <SelectItem value="Alive">Vivo</SelectItem>
                                                <SelectItem value="Dead">Muerto</SelectItem>
                                                <SelectItem value="unknown">Desconocido</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                        <FormDescription>
                                            Esperemos que tu personaje este vivo.
                                        </FormDescription>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="species"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Especie</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Especie" type='text' {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Elige bien tu raza.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tipo</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Tipo" type='text' {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Escoje un tipo fuera de lo comun.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Genero</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Genero" type='text' {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Puede ser el tu quieras.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Image</FormLabel>
                                    <FormControl>
                                        {photoUploaded ?
                                            <p className="text-sm" >Imagen cargada</p>
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
                                    </FormControl>
                                    <FormDescription>
                                        Solo para personajes fotogenicos.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit" disabled={!isValid}>Submit</Button>
                </form>
            </Form>
        </div>


    )
}
