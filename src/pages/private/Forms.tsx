import { LuSearch } from "react-icons/lu"
import { TitleForPrivateRoutes } from "../../components/titles/TitleForPrivateRoutes"


export const Forms = () => {
    return (
        <main>
            <TitleForPrivateRoutes title="Área de Formulários"/>
            
            <div className="flex m-5">
                <input
                    type="text"
                    placeholder="Pesquise seu formulário aqui"
                    className="border-2 rounded-l-lg py-2 px-4 flex-1"
                />
                <button className="flex items-center justify-center bg-green-600 text-lg text-white py-2 px-4 rounded-r-lg hover:bg-green-800 transition-colors">
                    <LuSearch className="mr-2" />
                </button>
            </div>
        </main>
    )
} 