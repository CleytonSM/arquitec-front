import { LuDoorOpen, LuSend } from "react-icons/lu";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { userInfoSchema, UserInfoSchemaType } from "../../validators/UserInfoValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "../../components/inputs/TextField";
import { toast, ToastContainer } from "react-toastify";
import { useCallback } from "react";
import { UserService } from "../../services/UserService";
import { TitleForPrivateRoutes } from "../../components/titles/TitleForPrivateRoutes";

export const Profile = () => {
    const { user, logout, login } = useAuth();

    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        watch
    } = useForm<UserInfoSchemaType>({
        resolver: zodResolver(userInfoSchema),
        defaultValues: {
            email: user?.email || "",
            name: user?.name || "",
            lastname: user?.lastname || ""
        }
    });
    
    const formValues = watch();

    const onSubmit = useCallback( async (data: UserInfoSchemaType) => {
        if (!user?.token) {
            return;
        }

        
        const userService = new UserService;
        const response = await userService.update(user?.token, data).catch((error) => {
            if(error.status === 409) {
                toast.error("Este email já está em uso.")
            } else {
                toast.error("Algo de errado ocorreu.")
            }
        });

        if(response?.status === 200) {
            toast.success("Informações atualizadas com sucesso!")
            const relogin: boolean = user.email !== data.email;

            login({
                ...user,
                name: data.name,
                lastname: data.lastname,
                email: data.email,
            });

            if(relogin) {
                toast.warning("Verifique seu email e faça o login novamente.");
                
                setTimeout(logout, 5000)
            }
        }
    }, [user, login, logout]);


    const userInfoHasChanged = (): boolean => {
        return (
            formValues.email !== user?.email ||
            formValues.name !== user?.name ||
            formValues.lastname !== user?.lastname
        );
    };

    return (
        <>
            <ToastContainer />
            <TitleForPrivateRoutes title="Perfil"/>

            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField 
                    label="Nome" 
                    type="text"
                    inputName="name"
                    register={register}
                    error={errors.name}
                />
                <TextField 
                    label="Sobrenome" 
                    type="text"
                    inputName="lastname"
                    register={register}
                    error={errors.lastname}
                />
                <TextField 
                    label="Email" 
                    type="email"
                    inputName="email"
                    register={register}
                    error={errors.email}
                />
                
                <div className="m-5">
                    <button 
                        type="submit"
                        disabled={!userInfoHasChanged()}
                        className={`flex items-center  justify-center w-full text-lg text-white py-2 px-4 rounded transition-colors
                            ${userInfoHasChanged() 
                                ? 'bg-green-600 hover:bg-green-800' 
                                : 'bg-green-200 cursor-not-allowed'}`}
                    >
                        <LuSend className="mr-2" /> Salvar
                    </button>
                    <button 
                        type="button"
                        onClick={logout}
                        className="flex items-center justify-center bg-fuchsia-500 w-full text-lg text-white py-2 px-4 rounded hover:bg-fuchsia-800 transition-colors mt-2"
                    >
                        <LuDoorOpen className="mr-2" /> Sair
                    </button>
                </div>
            </form>
        </>
    );
};
