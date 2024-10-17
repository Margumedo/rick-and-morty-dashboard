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
import { FormCreateEpisodeProps } from "./FormCreateEpisode.types"
import { toast } from "@/hooks/use-toast"
import { useEpisodeStore } from "@/store/episodesStore"
import { useRouter } from "next/navigation"

const formSchema = z.object({

    name: z.string().min(2),
    air_date: z.string(),
    episode: z.string().min(2),
})



export default function FormCreateEpisode(props: FormCreateEpisodeProps) {

    const { setOpenModalCreate } = props

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            air_date: "",
            episode: "",
        },
    })

    const { isValid } = form.formState

    const { episodes, addEpisode } = useEpisodeStore();
    const router = useRouter();

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const newId = episodes.length + 1

            const newEpisode = {
                id: newId,
                ...values,
            };
            addEpisode(newEpisode);

            toast({
                title: "Episodio agregado",
                description: `El episodio ${values.name} ha sido agregado correctamente.`,
            });
            router.refresh()
            setOpenModalCreate(false)

        } catch (error) {
            console.error("Error al agregar episodio:", error);
            toast({
                title: "Error",
                description: "Hubo un problema al agregar el episodio.",

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
                                        Dale un nombre a tu aventura.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />


                        <FormField
                            control={form.control}
                            name="air_date"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Estreno</FormLabel>
                                    <FormControl>
                                        <Input placeholder="December 2, 2013" type='text' {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Cuando saldra al aire.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="episode"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Episodio</FormLabel>
                                    <FormControl>
                                        <Input placeholder="S01E1 " type='text' {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Define la temporada y episodio.
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
