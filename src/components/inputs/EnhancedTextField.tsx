import { useState } from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { TextField } from '../../components/inputs/TextField';
import { LuBadgeCheck, LuBadgeX } from 'react-icons/lu';

interface PasswordValidationProps {
  password: string;
}

const PasswordRequirements = ({ password }: PasswordValidationProps) => {
  const requirements = [
    {
      text: 'Pelo menos 8 caracteres',
      validator: (pass: string) => pass.length >= 8
    },
    {
      text: 'Pelo menos um caractere especial',
      validator: (pass: string) => /[!@#$%^&*(),.?":{}|<>]/.test(pass)
    },
    {
      text: 'Pelo menos uma letra maiúscula',
      validator: (pass: string) => /[A-Z]/.test(pass)
    },
    {
      text: 'Pelo menos uma letra minúscula',
      validator: (pass: string) => /[a-z]/.test(pass)
    }
  ];

  if (!password) return null;

  return (
    <div className="space-y-2 ml-5 mb-2">
      {requirements.map((req, index) => (
        <div key={index} className="flex items-center space-x-2">
          {req.validator(password) ? (
            <LuBadgeCheck  className="w-4 h-4 text-green-500" />
          ) : (
            <LuBadgeX  className="w-4 h-4 text-red-500" />
          )}
          <span className={`text-sm ${req.validator(password) ? 'text-green-600' : 'text-red-600'}`}>
            {req.text}
          </span>
        </div>
      ))}
    </div>
  );
};

interface EnhancedTextFieldProps {
  label: string;
  inputName: string;
  type: string;
  error?: FieldError;
  register: UseFormRegister<any>;
  showRequirements?: boolean;
}

export const EnhancedTextField = ({ 
  type, 
  label, 
  inputName, 
  error, 
  register,
  showRequirements = false 
}: EnhancedTextFieldProps) => {
  const [value, setValue] = useState('');

  const registerWithTracking = () => {
    const registration = register(inputName);
    return {
      ...registration,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        registration.onChange(e);
        setValue(e.target.value);
      }
    };
  };

  return (
    <>
      <TextField
        type={type}
        label={label}
        inputName={inputName}
        error={error}
        register={registerWithTracking}
      />
      {showRequirements && <PasswordRequirements password={value} />}
    </>
  );
};