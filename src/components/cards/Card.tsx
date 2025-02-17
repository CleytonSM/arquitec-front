import { IconType } from "react-icons";

interface CardProps {
    cardName: string;
    Icon: IconType;
    actionName: string;
    additionalDescription: string;
}

export const Card = ({ cardName, Icon, actionName, additionalDescription }: CardProps) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200 mt-2">
            <h2 className="text-xl mb-2 text-slate-900">
                {cardName}
            </h2>
            <p className="text-gray-600 mb-4">{additionalDescription}</p>
            <button className="flex items-center justify-center bg-slate-700 w-full text-lg text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                <Icon className="mr-2" /> {actionName}
            </button>
        </div>
    )
}