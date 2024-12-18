import { LuDoorOpen, LuSend } from "react-icons/lu";

export const Profile = () => {
    return (
        <>
            <h2 className="text-slate-900 text-xl font-bold mt-2 ml-5">
                Perfil
            </h2>

            <div className="m-5">
                <h3 className="text-slate-900 text-base font-bold">Nome</h3>
                <label>
                    <input
                        type="text"
                        placeholder="Seu nome"
                        className="border-2 bg-slate-100 rounded-lg pt-2 pb-2 pl-2 w-full"
                    />
                </label>
            </div>
            <div className="m-5">
                <h3 className="text-slate-900 text-base font-bold">Sobrenome</h3>
                <label>
                    <input
                        type="text"
                        placeholder="Seu sobrenome"
                        className="border-2 bg-slate-100 rounded-lg pt-2 pb-2 pl-2 w-full"
                    />
                </label>
            </div>
            <div className="m-5">
                <h3 className="text-slate-900 text-base font-bold">Email</h3>
                <label>
                    <input
                        type="text"
                        placeholder="email@email.com"
                        className="border-2 bg-slate-100 rounded-lg pt-2 pb-2 pl-2 w-full"
                    />
                </label>
            </div>
            <div className="m-5">
                <button className="flex items-center justify-center bg-green-600 w-full text-lg text-white py-2 px-4 rounded hover:bg-green-800 transition-colors">
                    <LuSend className="mr-2" /> Salvar
                </button>
                <button className="flex items-center justify-center bg-fuchsia-500 w-full text-lg text-white py-2 px-4 rounded hover:bg-fuchsia-800 transition-colors mt-2">
                    <LuDoorOpen className="mr-2" /> Sair
                </button>
            </div>
        </>
    );
};
