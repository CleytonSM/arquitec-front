import { LuArrowRightToLine } from "react-icons/lu"
import { TopBarWithoutMenu } from "../../components/topbar/TopBarWithoutMenu"

export const Register = () => {
    return (
        <main className="">
            <div className="topbar-divisor shadow-md">
                <TopBarWithoutMenu />  
            </div>
            <div className="m-5 flex justify-center">
                <h2
                    className="text-slate-900 text-lg font-bold"
                >
                    Registrar
                </h2>
            </div>

            <div className="m-5">
                <h3 className="text-slate-900 text-base font-bold">Nome</h3>
                <label>
                    <input
                        type="text"
                        placeholder=""
                        className="border-2 bg-slate-100 rounded-lg pt-2 pb-2 pl-2 w-full mt-2"
                    />
                </label>
            </div>
            
            <div className="m-5">
                <h3 className="text-slate-900 text-base font-bold">Sobrenome</h3>
                <label>
                    <input
                        type="text"
                        placeholder=""
                        className="border-2 bg-slate-100 rounded-lg pt-2 pb-2 pl-2 w-full mt-2"
                    />
                </label>
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
                <h3 className="text-slate-900 text-base font-bold">Confirmar Senha</h3>
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
                    <LuArrowRightToLine className="mr-2" /> Registrar
                </button>
            </div>
        </main>
    )
}