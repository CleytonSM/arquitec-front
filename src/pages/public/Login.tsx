import { LuArrowRightToLine } from "react-icons/lu"
import { TopBarWithoutMenu } from "../../components/topbar/TopBarWithoutMenu"
import { useLocation, useNavigate } from "react-router-dom"
import { TextField } from "../../components/inputs/TextField"
import { ButtonForPublicRoutes } from "../../components/buttons/ButtonForPublicRoutes"
import { TitleForPublicRoutes } from "../../components/titles/TitleForPublicRoutes"
import { MessagesLoginOrRegister } from "../../components/tips/MessagesLoginOrRegister"
import { toast, ToastContainer } from "react-toastify"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, LoginSchemaType } from "../../validators/LoginValidator"
import { useCallback, useEffect } from "react"
import { LoginService } from "../../services/LoginService"
import { useAuth } from "../../hooks/useAuth"


export const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm<LoginSchemaType>({
            resolver: zodResolver(loginSchema),
        });
    const location = useLocation();

    useEffect(() => {
        const isRegisterSuccessful: boolean = location.state?.status === 201
        
        if(isRegisterSuccessful) {
            toast.success(location.state?.message);
        }
    }, [location])

    const onSubmit = useCallback(async (data: LoginSchemaType) => {
        const loginService = new LoginService();
        const response = await loginService.login(data).catch((error) => {
            if(error.status === 401) {
                toast.error("Credenciais incorretas.")
            } else {
                toast.error("Algo deu errado.")
            }
        })
        
        if(response?.status === 200) {
            login({
                userId: response.data.userId,
                token: response.data.token,
                name: response.data.name,
                lastname: response.data.lastname,
                email: response.data.email
            });


            navigate('/');
        }
    }, [login, navigate]);

    return (
        <main>
            <ToastContainer />
            <TopBarWithoutMenu />  

            <TitleForPublicRoutes title="Login"/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField register={register} type="email" label="Email" inputName="email" error={errors.email}/>
                
                <TextField register={register} type="password" label="Senha" inputName="password" error={errors.password}/>

                <ButtonForPublicRoutes name="Entrar">
                    <LuArrowRightToLine className="mr-2" />
                </ButtonForPublicRoutes>
            </form>

            <MessagesLoginOrRegister redirectText="Crie aqui" redirectTo="/register" text="Não possui uma conta ainda?" />
        </main>
    )
}