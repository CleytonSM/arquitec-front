import { FieldError, UseFormRegister } from "react-hook-form";

interface TextFieldProps {
    label: string;
    inputName: string;
    type: string;
    error?: FieldError;
    register: UseFormRegister<any>;
}

export const TextField = ({ type, label, inputName, error, register }: TextFieldProps) => {
    return (
        <div className="mt-2 ml-5 mb-5">
            <h3 className="text-slate-900 text-base font-medium">{label}</h3>
            <label>
                <input
                    type={type}
                    {...register(inputName)}
                    placeholder=""
                    className={`border-2 bg-slate-100 rounded-lg pt-2 pb-2 pl-2 w-full mt-2 focus:outline-none focus:border-black transition-colors ${error ? 'border-red-500' : 'border-slate-200'}`}
                />
            </label>
            {error && <span className="text-red-500 text-sm">{error.message}</span>}
        </div>
    );
};