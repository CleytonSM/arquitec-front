import { LuSend } from "react-icons/lu"

interface SaveButtonProps {
    isSaveButtonDisabled: boolean
}

export const SaveButton = ({ isSaveButtonDisabled }: SaveButtonProps) => {
    return (
        <div className="m-5">
            <button 
                type="submit"
                disabled={isSaveButtonDisabled}
                className={`flex items-center justify-center w-full text-lg text-white py-2 px-4 rounded transition-colors
                    ${isSaveButtonDisabled 
                        ? 'bg-green-200 cursor-not-allowed' 
                        : 'bg-green-600 hover:bg-green-800'}`}
            >
                <LuSend className="mr-2" /> Salvar
            </button>
        </div>
    )
}