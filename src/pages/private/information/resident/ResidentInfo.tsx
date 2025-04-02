import { useForm, useFieldArray } from "react-hook-form";
import { residentsSchema, ResidentsSchemaType } from "../../../../validators/ResidentValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "../../../../components/inputs/TextField";
import { LuPlus } from "react-icons/lu";
import { z } from "zod";
import { ToastContainer } from "react-toastify";
import { TitleForPrivateRoutes } from "../../../../components/titles/TitleForPrivateRoutes";
import { SaveButton } from "../../../../components/buttons/SaveButton";
import { useAuth } from "../../../../hooks/useAuth";
import { useCallback } from "react";
import { ResidentService } from "../../../../services/ResidentService";
import { useNavigate } from "react-router-dom";

export const ResidentInfo = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }, 
    } = useForm<{ descendants: ResidentsSchemaType }>({
        resolver: zodResolver(z.object({ descendants: residentsSchema })),
        defaultValues: {
            descendants: [],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "descendants",
    });

    const onSubmit = useCallback(async (data: { descendants: ResidentsSchemaType }) => {
        if(!user?.token) {
            return;
        }

        const residentService = new ResidentService;
        const response = await residentService.create(data.descendants, user?.token).catch((error) => {
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
                message: "Informações dos Moradores salvas com sucesso",
                success: true
            }
           })
        }
    }, [user, navigate, logout]);

    const addDescendant = () => {
        append({ name: "", age: 0 });
    };

    const isSaveButtonDisabled = fields.length === 0;

    return (
        <main>
            <ToastContainer />
            <TitleForPrivateRoutes title="Informação dos Moradores" backButtonRoute="/information"/>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                {fields.map((field, index) => (
                    <div key={field.id} className="mb-4 border-b-2 p-4 rounded-lg">
                        <TextField 
                            label="Nome"
                            type="text"
                            inputName={`descendants.${index}.name`}
                            register={register}
                            error={errors.descendants?.[index]?.name}
                        />
                        <TextField 
                            label="Idade"
                            type="number"
                            inputName={`descendants.${index}.age`}
                            register={register}
                            error={errors.descendants?.[index]?.age}
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
                        onClick={addDescendant}
                        className="flex items-center justify-center w-full text-lg text-white py-2 px-4 rounded bg-blue-600 hover:bg-blue-800 transition-colors"
                        >
                        <LuPlus className="mr-2" /> Adicionar Morador
                    </button>
                </div>

                <SaveButton isSaveButtonDisabled={isSaveButtonDisabled} />
            </form>
        </main>
    );
};