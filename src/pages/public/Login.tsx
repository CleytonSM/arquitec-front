import { LuArrowRightToLine } from "react-icons/lu"
import { TopBarWithoutMenu } from "../../components/topbar/TopBarWithoutMenu"
import { NavLink } from "react-router-dom"


export const Login = () => {

    return (
        <main className="">
            <div className="topbar-divisor shadow-md">
                <TopBarWithoutMenu />  
            </div>
            <div className="m-5 flex justify-center">
                <h2
                    className="text-slate-900 text-lg font-bold"
                >
                    Login
                </h2>
            </div>

            <div className="m-5">
                <h3 className="text-slate-900 text-base font-bold">Email</h3>
                <label>
                    <input
                        type="text"
                        placeholder=""
                        className="border-2 bg-slate-100 rounded-lg pt-2 pb-2 pl-2 w-full mt-2"
                    />
                </label>
            </div>
            <div className="m-5">
                <h3 className="text-slate-900 text-base font-bold">Senha</h3>
                <label>
                    <input
                        type="password"
                        placeholder=""
                        className="border-2 bg-slate-100 rounded-lg pt-2 pb-2 pl-2 w-full mt-2"
                    />
                </label>
            </div>
            <div className="m-5">
                <button className="flex items-center justify-center bg-slate-700 w-full text-lg text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                    <LuArrowRightToLine className="mr-2" /> Entrar
                </button>
            </div>
            <div className="flex justify-center">
                <p className="text-slate-900">
                    Não possui uma conta ainda? <NavLink to={"/register"} className={`text-blue-500 underline`}>Crie aqui.</NavLink>
                </p>
            </div>
        </main>
    )
}