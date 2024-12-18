import { LuSearch } from "react-icons/lu"


export const Forms = () => {
    return (
        <>  
            <div className="m-5">
                <h2 className="text-slate-900 text-xl font-bold ">
                    Área de Formulários
                </h2>
                <div className="flex mt-2">
                    <input
                        type="text"
                        placeholder="Pesquise seu formulário aqui"
                        className="border-2 rounded-l-lg py-2 px-4 flex-1"
                    />
                    <button className="flex items-center justify-center bg-green-600 text-lg text-white py-2 px-4 rounded-r-lg hover:bg-green-800 transition-colors">
                        <LuSearch className="mr-2" />
                    </button>
                </div>
            </div>
        </>
    )
} 