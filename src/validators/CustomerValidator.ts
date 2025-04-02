import { z } from "zod";
import { MaritalStatus } from "../types/maritalStatus.types";

export const customerSchema = z.object({
    nickname: z.string()
    .max(100, "Apelido não pode ter mais que 100 caracteres"),
    birthday: z.string().min(10, "Data de Nascimento é obrigatória"),
    maritalStatus: z.enum([
        MaritalStatus.SINGLE,
        MaritalStatus.MARRIED,
        MaritalStatus.SEPARATED,
        MaritalStatus.DIVORCED,
        MaritalStatus.WIDOWED,
        MaritalStatus.CIVIL_UNION,
        MaritalStatus.PARTNER,
        MaritalStatus.ENGAGED
    ]),
    religion: z.string(),
    veganOrVegetarian: z.boolean(),
    individualNeeds: z.string()
})

export type CustomerSchemaType = z.infer<typeof customerSchema>;