import { LuBadgeCheck, LuBadgeX, LuChevronDown, LuClipboardPenLine } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { fieldTranslations } from "../../utils/translator";

interface TopicProps {
    topicName: string;
    finished: boolean;
    editRoute: string;
    isOpen: boolean;
    formRoute: string;
    dataName?: string;
    data?: Record<string, unknown> | Array<Record<string, unknown>>;
    onToggle: () => void;
    onEdit?: () => void;
}

export const Topic = ({ 
    topicName, 
    finished,
    editRoute, 
    isOpen, 
    data = {}, 
    onToggle, 
    onEdit, 
    formRoute,
    dataName
}: TopicProps) => {
    const navigate = useNavigate();

    const translateFieldName = (key: string): string => {
        if (fieldTranslations[key]) {
            return fieldTranslations[key];
        }
        
        return key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, (str) => str.toUpperCase());
    };

    const formatFieldValue = (key: string, value: unknown): string | JSX.Element => {
        if (value === null || value === undefined) return "—";
        
        if (typeof value === "boolean") {
            return value ? "Sim" : "Não";
        }
        
        if (typeof value === "string") {
            if (value.match(/^\d{4}-\d{2}-\d{2}T/)) {
                return new Date(value).toLocaleDateString('pt-BR');
            }
            return value;
        }
        
        if (typeof value === "number") {
            if (key.toLowerCase().includes("price")) {
                return `R$ ${value.toFixed(2)}`;
            }
            
            if (key === "tvSize") {
                return `${value}"`;
            }
            
            if (key.toLowerCase().includes("capacity")) {
                return `${value} pessoas`;
            }
            
            return value.toString();
        }
        
        if (Array.isArray(value)) {
            if (value.length === 0) return "—";
            
            if (typeof value[0] === 'object') {
                return (
                    <div>
                        {value.map((item, index) => (
                            <div key={index} className="mt-2 border-l-2">
                                {Object.entries(item).map(([itemKey, itemValue]) => (
                                    <div key={itemKey} className="ml-2 text-xs">
                                        <span className="font-medium text-xs text-gray-500">
                                            {translateFieldName(itemKey)}:
                                        </span>{' '}
                                        <span className="text-xs">
                                            {formatFieldValue(itemKey, itemValue)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                );
            }
            
            return value.join(", ");
        }
        
        if (typeof value === "object") {
            return JSON.stringify(value);
        }
        
        return String(value);
    };

    const createDisplayFields = () => {

        const processedData = Array.isArray(data) 
            ? { [dataName || "Dados"] : data} 
            : data;
        
        const fields = Object.entries(processedData).map(([key, value]) => ({
            title: translateFieldName(key),
            value: formatFieldValue(key, value)
        }));

        const midpoint = Math.ceil(fields.length / 2);
        return {
            leftColumnData: fields.slice(0, midpoint),
            rightColumnData: fields.slice(midpoint)
        };
    };

    const { leftColumnData, rightColumnData } = createDisplayFields();

    const handleRedirect = () => {
        navigate(formRoute);
    };

    return (
        <div className="p-2 bg-white shadow-md rounded-lg border border-gray-200 mt-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-between flex-1 cursor-pointer" onClick={onToggle}>
                    <div className="flex items-center">
                        <p className="text-sm sm:text-md font-semibold truncate max-w-[200px] sm:max-w-none">
                            {topicName}
                        </p>
                        {finished ? 
                            <LuBadgeCheck className="w-4 h-4 ml-1 sm:ml-2 text-green-500" /> : 
                            <LuBadgeX className="w-4 h-4 ml-1 sm:ml-2 text-red-500" />
                        }
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                onEdit?.();
                                navigate(editRoute)
                            }}
                            className="p-1 hover:bg-slate-100 rounded transition-colors"
                        >
                            {finished && (
                                    <LuClipboardPenLine className="w-4 h-4 text-gray-500 hover:text-gray-700" />
                            )}
                        </button>
                        <LuChevronDown 
                            className={`w-4 h-4 sm:w-5 sm:h-5 duration-200 ${
                                isOpen ? 'rotate-180' : ''
                            }`}
                        />
                    </div>
                </div>
            </div>
            {isOpen && finished && (
                <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 pt-2 border-t border-gray-100">
                    <div className="space-y-1 sm:space-y-2">
                        {leftColumnData.map((item, index) => (
                            <div key={`left-${index}`} className="text-xs sm:text-sm">
                                <span className="font-medium text-sm sm:text-base text-gray-600">{item.title}: </span>
                                <span className="text-gray-800 text-sm sm:text-base">{item.value}</span>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                        {rightColumnData.map((item, index) => (
                            <div key={`right-${index}`} className="text-xs sm:text-sm">
                                <span className="font-medium text-sm sm:text-base text-gray-600">{item.title}: </span>
                                <span className="text-gray-800 text-sm sm:text-base">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {isOpen && !finished && (
                <div className="w-full mt-3 sm:mt-4 pt-2 border-t border-gray-100">
                    <div className="flex items-center justify-center">
                        <button 
                            onClick={handleRedirect} 
                            className="flex items-center justify-center bg-green-500 w-full text-xs sm:text-sm text-white py-1.5 sm:py-2 mx-2 sm:mx-4 rounded hover:bg-green-600 transition-colors"
                        >
                            Responda essa sessão do formulário!
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};