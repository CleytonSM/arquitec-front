import { FieldError, UseFormRegister } from "react-hook-form";

interface TextFieldProps {
    label: string;
    inputName: string;
    type: string;
    error?: FieldError;
    register: UseFormRegister<any>;
}

export const RegisterTextField = ({ type, label, inputName, error, register }: TextFieldProps) => {
    return (
        <div className="m-5">
            <h3 className="text-slate-900 text-base font-bold">{label}</h3>
            <label>
                <input
                    type={type}
                    {...register(inputName)}
                    placeholder=""
                    className="border-2 bg-slate-100 rounded-lg pt-2 pb-2 pl-2 w-full mt-2"
                />
            </label>
            {error && <span className="text-red-500 text-sm">{error.message}</span>}
        </div>
    );
};