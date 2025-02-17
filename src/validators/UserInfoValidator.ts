import { z } from "zod";


export const userInfoSchema = z.object({
    name: z.string()
    .min(3, "Nome não pode ser menor que 3 caracteres")
    .max(100, "Nome não pode ter mais que 100 characters"),
    lastname: z.string()
        .min(3, "Sobrenome não pode ser menor que 3 caracteres")
        .max(100, "Sobrenome não pode ser maior que 100 caracteres"),
    email: z.string()
        .email("Email inválido")
})

export type UserInfoSchemaType = z.infer<typeof userInfoSchema>;