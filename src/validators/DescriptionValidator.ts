import { z } from "zod";

export const descriptionSchema = z.object({
    bestPlace: z.string().max(255, "O local favorito não pode ter mais que 255 caracteres"),
    wkndBestPlace: z.string().max(255, "O local favorito no fim de semana não pode ter mais que 255 caracteres"),
    missActualHouse: z.string().max(255, "O que sente falta na casa atual não pode ter mais que 255 caracteres"),
    actualHouseSatisfaction: z.boolean(),
    actualHouseSatisfactionDesc: z.string().max(255, "A descrição da satisfação com a casa atual não pode ter mais que 255 caracteres"),
    job: z.string().max(255, "O trabalho não pode ter mais que 255 caracteres"),
    workRoutine: z.string().max(255, "A rotina de trabalho não pode ter mais que 255 caracteres"),
    workAtHome: z.boolean(),
    daysWorkingAtHome: z.number().int().min(0, "O número de dias trabalhando em casa deve ser um número inteiro positivo"),
    travelsForWork: z.boolean(),
    travelsForWorkDesc: z.string().max(255, "A descrição das viagens a trabalho não pode ter mais que 255 caracteres"),
    practiceSports: z.boolean(),
    practiceSportsDesc: z.string().max(255, "A descrição da prática de esportes não pode ter mais que 255 caracteres"),
    travel: z.boolean(),
    travelDesc: z.string().max(255, "A descrição das viagens não pode ter mais que 255 caracteres"),
    watchTv: z.boolean(),
    watchTvDesc: z.string().max(255, "A descrição do hábito de assistir TV não pode ter mais que 255 caracteres"),
    read: z.boolean(),
    bookRead: z.boolean(),
    tabletRead: z.boolean(),
    pets: z.boolean(),
    petsDesc: z.string().max(255, "A descrição dos pets não pode ter mais que 255 caracteres"),
    cook: z.boolean(),
    cookDesc: z.string().max(255, "A descrição do hábito de cozinhar não pode ter mais que 255 caracteres")
});

export type DescriptionSchemaType = z.infer<typeof descriptionSchema>;