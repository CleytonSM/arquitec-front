import { LuCross, LuEye, LuPlay } from "react-icons/lu";

export const Home = () => {
  return (
    <main className="m-5">
      <h2
        className="text-slate-900 text-lg font-bold"
      >
        Olá, Cleyton Souza Martins!
      </h2>

      <div
        className="mt-2"
      >
        <p
          className="text-slate-900 text-md font-bold">
          Continuar Formulário:
        </p>
      </div>

      <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200 mt-2">
        <h2 className="text-xl font-semibold mb-2 text-slate-900">
          Formulário-2434
        </h2>
        <p className="text-gray-600 mb-4">Continuar da onde você parou?</p>
        <section className="">
          <button className="flex items-center justify-center bg-slate-700 w-full text-lg text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
            <LuPlay className="mr-2" /> Continuar
          </button>
        </section>
      </div>


      <div
        className="mt-2"
      >
        <p
          className="text-slate-900 text-md font-bold">
          Último Formulário:
        </p>
      </div>

      <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200 mt-2">
        <h2 className="text-xl font-semibold mb-2 text-slate-900">
          Formulário-2435
        </h2>
        <p className="text-gray-600 mb-4">Data do Envio: </p>
        <button className="flex items-center justify-center bg-slate-700 w-full text-lg text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
          <LuEye className="mr-2"/> Visualizar
        </button>
      </div>

      <div
        className="mt-2"
      >
        <p
          className="text-slate-900 text-md font-bold">
          Adicionar Formulário:
        </p>
      </div>

      <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200 mt-2">
        <h2 className="text-xl font-semibold mb-2 text-slate-900">
          Novo Formulário
        </h2>
        <p className="text-gray-600 mb-4">Nos ajude a saber como sua obra deve ser</p>
        <div className="flex">
          <button className="flex items-center justify-center bg-slate-700 w-full text-lg text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
          <LuCross className="mr-2"/> Adicionar 
          </button>
        </div>
      </div>
    </main>
  );
};
