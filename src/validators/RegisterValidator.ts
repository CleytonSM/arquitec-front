import { z } from "zod";

export const registerSchema = z.object({
    name: z.string()
        .min(3, "Nome não pode ser menor que 3 caracteres")
        .max(100, "Nome não pode ter mais que 100 characters"),
    lastname: z.string()
        .min(3, "Sobrenome não pode ser menor que 3 caracteres")
        .max(100, "Sobrenome não pode ser maior que 100 caracteres"),
    email: z.string()
        .email("Email inválido"),
    password: z.string()
        .min(8, "Password must be at least 8 characters long")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});


export type RegisterSchemaType = z.infer<typeof registerSchema>;