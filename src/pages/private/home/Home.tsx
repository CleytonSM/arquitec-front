import { LuCross, LuEye, LuPlay } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { TitleForPrivateRoutes } from "../../../components/titles/TitleForPrivateRoutes";
import { TitleSection } from "../../../components/titles/SectionTitle";
import { Card } from "../../../components/cards/Card";
import { CardActionNames } from "../../../enums/CardActionNames";
import { useAuth } from "../../../hooks/useAuth";

export const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/new-form")
  }

  return (
    <main>
      <TitleForPrivateRoutes title={`Olá, ${user?.name} ${user?.lastname}!`}/>
  
      <div className="m-5">
        <TitleSection title="Adicionar Formulário:"/>
        <Card 
          cardName="Novo Formulário"
          additionalDescription="Nos ajude a saber como sua obra deve ser!"
          Icon={LuCross}
          onClick={onClick}
          actionName={CardActionNames.NEW_FORM}
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
