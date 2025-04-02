import { z } from "zod";

const residentSchema = z.object({
    id: z.number().optional(),
    name: z.string().max(100, "O nome não pode ter mais que 100 caracteres"),
    age: z.number().int().min(0, "A idade deve ser um número inteiro positivo"),
});

export const residentsSchema = z.array(residentSchema);

export type ResidentSchemaType = z.infer<typeof residentSchema>;
export type ResidentsSchemaType = z.infer<typeof residentsSchema>;