import { NavLink } from "react-router-dom"

interface MessagesLoginOrRegisterProps {
    redirectTo: string;
    text: string;
    redirectText: string;
}

export const MessagesLoginOrRegister = ({ redirectText, redirectTo, text }: MessagesLoginOrRegisterProps) => {
    return (
        <main>
            <div className="flex justify-center">
                <p className="text-slate-900">
                    {text} <NavLink to={redirectTo} className={`text-blue-500 underline`}>{redirectText}.</NavLink>
                </p>
            </div>
        </main>
    )
}