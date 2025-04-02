import { LuArrowLeftToLine } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

interface TitleForPrivateRoutesProps {
    title: string;
    backButtonRoute?: string 
}


export const TitleForPrivateRoutes = ({ title, backButtonRoute }: TitleForPrivateRoutesProps) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        if(backButtonRoute) {
            navigate(backButtonRoute)
        }
    }

    return (
        <main>
            <div className="border-b-2">
                <div className="flex items-center justify-between mt-2 ml-5 mr-5 mb-2">
                    <h2 className="text-slate-900 text-xl font-bold">
                        {title}
                    </h2>
                    {backButtonRoute && (
                        <button onClick={handleBackButtonClick} className="border rounded-lg pt-1 pb-1 pl-5 pr-5 text-xl bg-slate-100 hover:bg-slate-200 transition-colors duration-200">
                            <LuArrowLeftToLine />
                        </button>
                    )}
                </div>
            </div>
        </main>
    )
}