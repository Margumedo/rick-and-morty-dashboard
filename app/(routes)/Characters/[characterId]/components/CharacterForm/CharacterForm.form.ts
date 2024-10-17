import { z } from "zod";
export const formSchema = z.object({
    name: z.string(),
    status: z.string(),
    species: z.string().min(2),
    type: z.string().min(2),
    gender: z.string().min(4),
    image: z.string()

});

