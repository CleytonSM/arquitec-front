import { useForm } from "react-hook-form";
import { useAuth } from "../../../../hooks/useAuth";
import { customerSchema, CustomerSchemaType } from "../../../../validators/CustomerValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import { CustomerService } from "../../../../services/CustomerService";
import { ToastContainer } from "react-toastify";
import { MaritalStatus } from "../../../../types/maritalStatus.types";
import { TitleForPrivateRoutes } from "../../../../components/titles/TitleForPrivateRoutes";
import { TextField } from "../../../../components/inputs/TextField";
import { SelectField } from "../../../../components/inputs/SelectField";
import { SaveButton } from "../../../../components/buttons/SaveButton";
import { useNavigate } from "react-router-dom";

export const EditCustomerInfo = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, dirtyFields },
    } = useForm<CustomerSchemaType>({
        resolver: zodResolver(customerSchema),
    });

    const handleCustomerInfoLoad = useCallback(async () => {
        const customerService = new CustomerService();
        const response = await customerService.get(user?.token).catch((error) => {
            if (error.status === 401) {
                logout();
            }
        });

        if (response?.status === 200) {
            const data = response.data;

            const formData = {
                nickname: data.nickname,
                birthday: new Date(data.birthday).toISOString().split("T")[0],
                maritalStatus: data.maritalStatus,
                religion: data.religion,
                veganOrVegetarian: data.veganOrVegetarian,
                individualNeeds: data.individualNeeds,
            };

            reset(formData);
        }
    }, [user, logout, reset]);

    useEffect(() => {
        handleCustomerInfoLoad();
    }, [handleCustomerInfoLoad]);

    const maritalStatus = [
        { value: MaritalStatus.SINGLE, label: "Solteiro(a)" },
        { value: MaritalStatus.MARRIED, label: "Casado(a)" },
        { value: MaritalStatus.SEPARATED, label: "Separado(a)" },
        { value: MaritalStatus.DIVORCED, label: "Divorciado(a)" },
        { value: MaritalStatus.WIDOWED, label: "Viúvo(a)" },
        { value: MaritalStatus.CIVIL_UNION, label: "União Estável" },
        { value: MaritalStatus.PARTNER, label: "Companheiro(a)" },
        { value: MaritalStatus.ENGAGED, label: "Noivo(a)" },
    ];

    const isSaveButtonDisabled = Object.keys(dirtyFields).length === 0;

    const onSubmit = useCallback(async (data: CustomerSchemaType) => {
        const customerService = new CustomerService;
        const response = await customerService.update(data, user?.token).catch((error) => {
            if(error.staus === 401) {
                logout()
            } else {
                navigate("/information", {
                    state: {
                        message: "Algo deu errado",
                        success: false,
                    },
                });
            }
        });

        if(response?.status === 200) {
            navigate("/information", {
                state: {
                    message: "Informações das Redes Sociais salvas com sucesso",
                    success: true,
                },
            });
        }
    }, [navigate, logout, user]);

    return (
        <main>
            <ToastContainer />
            <TitleForPrivateRoutes title="Informações dos Clientes" backButtonRoute="/information" />

            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    type="text"
                    label="Apelido"
                    inputName="nickname"
                    error={errors.nickname}
                    register={register}
                />
                <TextField
                    type="date"
                    label="Data de Nascimento"
                    inputName="birthday"
                    error={errors.birthday}
                    register={register}
                />
                <SelectField
                    label="Estado Civil"
                    name="maritalStatus"
                    options={maritalStatus}
                    notOptionMessage="Selecione um Estado Civil"
                    error={errors.maritalStatus}
                    register={register}
                />
                <TextField
                    type="text"
                    label="Religião"
                    inputName="religion"
                    error={errors.religion}
                    register={register}
                />
                <TextField
                    type="checkbox"
                    label="Vegetariano ou Vegano?"
                    inputName="veganOrVegetarian"
                    error={errors.veganOrVegetarian}
                    register={register}
                />
                <TextField
                    type="text"
                    label="Necessidades Indiviuais ou Deficiências Físicas"
                    inputName="individualNeeds"
                    error={errors.individualNeeds}
                    register={register}
                />

                <SaveButton isSaveButtonDisabled={isSaveButtonDisabled} />
            </form>
        </main>
    );
};