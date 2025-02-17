import { ReactNode } from "react";

interface ButtonForPublicRoutesProps {
    name: string;
    children: ReactNode
}


export const ButtonForPublicRoutes = ({ children, name }: ButtonForPublicRoutesProps) => {

    return (
        <main>
            <div className="m-5">
                <button type="submit" className="flex items-center justify-center bg-slate-700 w-full text-lg text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                    {children} {name}
                </button>
            </div>
        </main>
    )

}