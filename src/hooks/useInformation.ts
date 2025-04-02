import { useContext } from "react"
import { InformationContext } from "../contexts/InformationContext"

export const useInformation = () => {
    const context = useContext(InformationContext);
    if(context === undefined) {
        throw new Error('useInformation must be used within an InformationProvider');
    }

    return context;
}