import { FieldError, UseFormRegister } from "react-hook-form";

interface SelectFieldProps {
    label: string;
    name: string;
    options: { value: string; label: string }[];
    notOptionMessage: string;
    error?: FieldError;
    register: UseFormRegister<any>;
}

export const SelectField = ({ label, name, options, notOptionMessage, error, register }: SelectFieldProps) => {
    return (
        <div className="mt-2 ml-5 mr-5 mb-5">
            <h3 className="text-slate-900 text-base font-medium">{label}</h3>
            <select 
                {...register(name)}
                className={`border-2 bg-slate-100 rounded-lg pt-2 pb-2 pl-2 w-full mt-2 focus:outline-none focus:border-black transition-colors ${error ? 'border-red-500' : 'border-slate-200'}`}
            >
                <option disabled value="">{notOptionMessage}</option>
                {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
                ))}
            </select>
            {error && <span className="text-red-500 text-sm">{error.message}</span>}
        </div>
    );
};