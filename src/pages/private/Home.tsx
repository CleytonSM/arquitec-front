import { LuCross, LuEye, LuPlay } from "react-icons/lu";
import { useAuth } from "../../hooks/useAuth";
import { TitleForPrivateRoutes } from "../../components/titles/TitleForPrivateRoutes";
import { TitleSection } from "../../components/titles/SectionTitle";
import { Card } from "../../components/cards/Card";

export const Home = () => {
  const { user } = useAuth()
  
  return (
    <main>
      <TitleForPrivateRoutes title={`Olá, ${user?.name} ${user?.lastname}!`}/>

      <div className="m-5">
        <TitleSection title="Adicionar Formulário:"/>
        <Card 
          cardName="Novo Formulário"
          additionalDescription="Nos ajude a saber como sua obra deve ser!"
          Icon={LuCross}
          actionName="Novo Formulário"
        />

        {/*<TitleSection title="Continuar Formulário:"/>
        <Card 
          cardName="Formulário-2434"
          additionalDescription="Continuar da onde você parou?"
          Icon={LuPlay}
          actionName="Continuar"
        />

        <TitleSection title="Último Formulário:"/>
        <Card 
          cardName="Formulário-2435"
          additionalDescription="Data do Envio: 13/09/2025"
          Icon={LuEye}
          actionName="Visualizar"
        />*/}

      </div>
    </main>
  );
};
