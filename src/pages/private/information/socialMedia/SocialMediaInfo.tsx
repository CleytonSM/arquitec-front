import { useForm, useFieldArray } from "react-hook-form";
import { socialMediaSchema, SocialMediasSchemaType } from "../../../../validators/SocialMediaValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "../../../../components/inputs/TextField";
import { LuPlus } from "react-icons/lu";
import { TitleForPrivateRoutes } from "../../../../components/titles/TitleForPrivateRoutes";
import { ToastContainer } from "react-toastify";
import { z } from "zod";
import { SaveButton } from "../../../../components/buttons/SaveButton";
import { useAuth } from "../../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { SocialMediaService } from "../../../../services/SocialMediaService";

export const SocialMediaInfo = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }, 
    } = useForm<{ socialMedias: SocialMediasSchemaType }>({
        resolver: zodResolver(z.object({ socialMedias: socialMediaSchema })),
        defaultValues: {
            socialMedias: [],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "socialMedias",
    });

    const onSubmit = useCallback(async (data: { socialMedias: SocialMediasSchemaType }) => {
        const socialMediaService = new SocialMediaService;
        const response = await socialMediaService.create(data.socialMedias, user?.token).catch((error) => {
            if(error.status === 401) {
                logout()
            } else {
                navigate("/information", {
                    state: {
                        message: "Algo deu errado",
                        success: false
                    }
                })
            }
        })
        
        if(response?.status === 201) {
            navigate("/information", {
            state: {
                message: "Informações das Redes Sociais salvas com sucesso",
                success: true
            }
            })
        }
    }, [user, navigate, logout]);
    

    const addSocialMedia = () => {
        append({ name: "", userSocialMedia: "" });
    };

    const isSaveButtonDisabled = fields.length === 0;

    return (
        <main>
            <ToastContainer />
            <TitleForPrivateRoutes title="Informações das Redes Sociais" backButtonRoute="/information" />

            <form onSubmit={handleSubmit(onSubmit)}>
                {fields.map((field, index) => (
                    <div key={field.id} className="mb-4 border-b-2 p-4 rounded-lg">
                        <TextField 
                            label="Nome da Rede Social"
                            type="text"
                            inputName={`socialMedias.${index}.name`}
                            register={register}
                            error={errors.socialMedias?.[index]?.name}
                        />
                        <TextField 
                            label="Nome de Usuário"
                            type="text"
                            inputName={`socialMedias.${index}.userSocialMedia`}
                            register={register}
                            error={errors.socialMedias?.[index]?.userSocialMedia}
                        />
                        <div className="m-5">
                            <button
                                type="button"
                                onClick={() => remove(index)}
                                className="mt-2 text-sm text-red-600 hover:text-red-800"
                            >
                                Remover
                            </button>
                        </div>
                    </div>
                ))}

                <div className="m-5">
                    <button
                        type="button"
                        onClick={addSocialMedia}
                        className="flex items-center justify-center w-full text-lg text-white py-2 px-4 rounded bg-blue-600 hover:bg-blue-800 transition-colors"
                    >
                        <LuPlus className="mr-2" /> Adicionar Rede Social
                    </button>
                </div>

                <SaveButton isSaveButtonDisabled={isSaveButtonDisabled} />
            </form>
        </main>
    );
};