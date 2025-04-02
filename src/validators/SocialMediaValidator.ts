import { z } from "zod";

const socialMediaEntrySchema = z.object({
    id: z.number().optional(),
    name: z.string().max(60, "O nome não pode ter mais que 60 caracteres"),
    userSocialMedia: z.string().max(100, "O usuário não pode ter mais que 100 caracteres"),
});

export const socialMediaSchema = z.array(socialMediaEntrySchema);

export type SocialMediaEntrySchemaType = z.infer<typeof socialMediaEntrySchema>;
export type SocialMediasSchemaType = z.infer<typeof socialMediaSchema>;