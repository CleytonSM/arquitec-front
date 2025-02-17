import { LuArrowRightToLine } from "react-icons/lu"
import { TopBarWithoutMenu } from "../../components/topbar/TopBarWithoutMenu"
import { TitleForPublicRoutes } from "../../components/titles/TitleForPublicRoutes"
import { TextField } from "../../components/inputs/TextField"
import { ButtonForPublicRoutes } from "../../components/buttons/ButtonForPublicRoutes"
import { MessagesLoginOrRegister } from "../../components/tips/MessagesLoginOrRegister"
import { useForm } from "react-hook-form"
import { registerSchema, RegisterSchemaType } from "../../validators/RegisterValidator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback } from "react"
import { RegisterService } from "../../services/RegisterService"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import { EnhancedTextField } from "../../components/inputs/EnhancedTextField"

export const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterSchemaType>({
        resolver: zodResolver(registerSchema),
    });

    const navigate = useNavigate();
    
    
    const onSubmit = useCallback(async (data: RegisterSchemaType) => {
        const registerService = new RegisterService();
        const response = await registerService.register(data).catch((error) => {
            if(error.status === 409) {
                toast.error("Este email já está em uso.")
            } else {
                toast.error("Algo de errado ocorreu.")
            }

            throw error;
        });


        if(response.status === 201) {
            navigate("/login", {
                state: {
                    status: response.status,
                    message: "Conta criada com sucesso, agora verifique seu e-mail para ativá-la!"
                }
            })
        }
        
    }, [navigate])
    
    return (
        <main>
            <ToastContainer />
            <TopBarWithoutMenu />
            <TitleForPublicRoutes title="Register" />

            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    type="text"
                    label="Nome"
                    inputName="name"
                    error={errors.name}
                    register={register}
                />

                <TextField
                    type="text"
                    label="Sobrenome"
                    inputName="lastname"
                    error={errors.lastname}
                    register={register}
                />

                <TextField
                    type="email"
                    label="Email"
                    inputName="email"
                    error={errors.email}
                    register={register}
                />

                <EnhancedTextField
                    type="password"
                    label="Senha"
                    inputName="password"
                    error={errors.password}
                    register={register}
                    showRequirements={true}
                />

                <EnhancedTextField
                    type="password"
                    label="Confirmar Senha"
                    inputName="confirmPassword"
                    error={errors.confirmPassword}
                    register={register}
                    showRequirements={false}
                />

                <ButtonForPublicRoutes name="Registrar">
                    <LuArrowRightToLine className="mr-2" />
                </ButtonForPublicRoutes>
            </form>

            <MessagesLoginOrRegister
                redirectText="Login"
                redirectTo="/login"
                text="Já tem uma conta?"
            />
        </main>
    );
};