import { useForm } from "react-hook-form";
import { descriptionSchema, DescriptionSchemaType } from "../../../validators/DescriptionValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "../../../components/inputs/TextField";
import { LuSend } from "react-icons/lu";
import { TitleForPrivateRoutes } from "../../../components/titles/TitleForPrivateRoutes";
import { ToastContainer } from "react-toastify";

export const DescriptionInfo = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }, 
    } = useForm<DescriptionSchemaType>({
        resolver: zodResolver(descriptionSchema),
    });

    const onSubmit = (data: DescriptionSchemaType) => {
        console.log(data);
    };

    const descriptionInfoHasChanged = () => {
        return true;
    };

    return (
        <main>
            <TitleForPrivateRoutes title="Informações de Comportamento"/>
            <ToastContainer />

            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField 
                    label="Local Favorito"
                    type="text"
                    inputName="bestPlace"
                    register={register}
                    error={errors.bestPlace}
                />
                <TextField 
                    label="Local Favorito no Fim de Semana"
                    type="text"
                    inputName="wkndBestPlace"
                    register={register}
                    error={errors.wkndBestPlace}
                />
                <TextField 
                    label="O que Sente Falta na Casa Atual?"
                    type="text"
                    inputName="missActualHouse"
                    register={register}
                    error={errors.missActualHouse}
                />
                <TextField 
                    label="Satisfação com a Casa Atual"
                    type="checkbox"
                    inputName="actualHouseSatisfaction"
                    register={register}
                    error={errors.actualHouseSatisfaction}
                />
                <TextField 
                    label="Descrição da Satisfação com a Casa Atual"
                    type="text"
                    inputName="actualHouseSatisfactionDesc"
                    register={register}
                    error={errors.actualHouseSatisfactionDesc}
                />
                <TextField 
                    label="Descrição do Trabalho"
                    type="text"
                    inputName="job"
                    register={register}
                    error={errors.job}
                />
                <TextField 
                    label="Rotina de Trabalho"
                    type="text"
                    inputName="workRoutine"
                    register={register}
                    error={errors.workRoutine}
                />
                <TextField 
                    label="Trabalha em Casa?"
                    type="checkbox"
                    inputName="workAtHome"
                    register={register}
                    error={errors.workAtHome}
                />
                <TextField 
                    label="Dias Trabalhando em Casa"
                    type="number"
                    inputName="daysWorkingAtHome"
                    register={register}
                    error={errors.daysWorkingAtHome}
                />
                <TextField 
                    label="Viaja a Trabalho?"
                    type="checkbox"
                    inputName="travelsForWork"
                    register={register}
                    error={errors.travelsForWork}
                />
                <TextField 
                    label="Descrição das Viagens a Trabalho"
                    type="text"
                    inputName="travelsForWorkDesc"
                    register={register}
                    error={errors.travelsForWorkDesc}
                />
                <TextField 
                    label="Pratica Esportes?"
                    type="checkbox"
                    inputName="practiceSports"
                    register={register}
                    error={errors.practiceSports}
                />
                <TextField 
                    label="Descrição da Prática de Esportes"
                    type="text"
                    inputName="practiceSportsDesc"
                    register={register}
                    error={errors.practiceSportsDesc}
                />
                <TextField 
                    label="Viaja?"
                    type="checkbox"
                    inputName="travel"
                    register={register}
                    error={errors.travel}
                />
                <TextField 
                    label="Descrição das Viagens"
                    type="text"
                    inputName="travelDesc"
                    register={register}
                    error={errors.travelDesc}
                />
                <TextField 
                    label="Assiste TV?"
                    type="checkbox"
                    inputName="watchTv"
                    register={register}
                    error={errors.watchTv}
                />
                <TextField 
                    label="Descrição do Hábito de Assistir TV"
                    type="text"
                    inputName="watchTvDesc"
                    register={register}
                    error={errors.watchTvDesc}
                />
                <TextField 
                    label="Lê?"
                    type="checkbox"
                    inputName="read"
                    register={register}
                    error={errors.read}
                />
                <TextField 
                    label="Lê Livros?"
                    type="checkbox"
                    inputName="bookRead"
                    register={register}
                    error={errors.bookRead}
                />
                <TextField 
                    label="Lê em Tablet?"
                    type="checkbox"
                    inputName="tabletRead"
                    register={register}
                    error={errors.tabletRead}
                />
                <TextField 
                    label="Tem Pets?"
                    type="checkbox"
                    inputName="pets"
                    register={register}
                    error={errors.pets}
                />
                <TextField 
                    label="Descrição dos Pets"
                    type="text"
                    inputName="petsDesc"
                    register={register}
                    error={errors.petsDesc}
                />
                <TextField 
                    label="Cozinha?"
                    type="checkbox"
                    inputName="cook"
                    register={register}
                    error={errors.cook}
                />
                <TextField 
                    label="Descrição do Hábito de Cozinhar"
                    type="text"
                    inputName="cookDesc"
                    register={register}
                    error={errors.cookDesc}
                />
                <div className="m-5">
                    <button 
                        type="submit"
                        disabled={!descriptionInfoHasChanged()}
                        className={`flex items-center justify-center w-full text-lg text-white py-2 px-4 rounded transition-colors
                            ${descriptionInfoHasChanged() 
                                ? 'bg-green-600 hover:bg-green-800' 
                                : 'bg-green-200 cursor-not-allowed'}`}
                    >
                        <LuSend className="mr-2" /> Salvar
                    </button>
                </div>
            </form>
        </main>
    );
};