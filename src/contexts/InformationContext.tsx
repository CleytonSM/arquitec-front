import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { Customer, Resident, SocialMedia } from "../types/information.tpyes";
import { AuthContext } from "./AuthContext";
import { CustomerService } from "../services/CustomerService";
import { ResidentService } from "../services/ResidentService";
import { SocialMediaService } from "../services/SocialMediaService";

interface InformationContextData {
    customer: Customer | undefined;
    residents: Resident[] | [] | undefined;
    socialMedias: SocialMedia[] | [] | undefined;
}

interface InformationContextProps{
    children: ReactNode;
}

export const InformationContext = createContext<InformationContextData>({} as InformationContextData);

export const InformationProvider = ({ children }: InformationContextProps) => {
    const { user, logout } = useContext(AuthContext);
    const [ customer, setCustomer ] = useState<Customer | undefined>();
    const [ residents, setResidents ] = useState<Resident[] | [] | undefined>();
    const [ socialMedias, setSocialMedias ] = useState<SocialMedia[] | [] | undefined>();


    const handleInformationRequest = useCallback(async () => {
        const customerService = new CustomerService
        const customerResponse = await customerService.get(user?.token).catch((error) => {
            if(error.status === 401) {
                logout()
            }
        });
        const customerAux: Customer = customerResponse?.data
        
        setCustomer(customerAux);

        const residentService = new ResidentService
        const residentResponse = await residentService.getAll(user?.token).catch((error) => {
            if(error.status === 401) {
                logout()
            }
        });
        const residentsAux: Resident[] = residentResponse?.data
        
        setResidents(residentsAux);

        const socialMediaService = new SocialMediaService
        const socialMediaResponse = await socialMediaService.getAll(user?.token).catch((error) => {
            if(error.status === 401) {
                logout()
            }
        });
        const socialMediasAux: SocialMedia[] = socialMediaResponse?.data
        
        setSocialMedias(socialMediasAux);
    }, [logout, user])

    useEffect(() => {
        handleInformationRequest()
    }, [handleInformationRequest]);

    const value: InformationContextData = {
        customer,
        residents,
        socialMedias
    }

    return (
        <InformationContext.Provider value={value}>
            {children}
        </InformationContext.Provider>
    )
}