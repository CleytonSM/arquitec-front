interface TitleForPrivateRoutesProps {
    title: string;
}


export const TitleForPrivateRoutes = ({ title }: TitleForPrivateRoutesProps) => {
    return (
        <main>
            <h2 className="text-slate-900 text-xl font-bold mt-2 ml-5">
                {title}
            </h2>
        </main>
    )
}