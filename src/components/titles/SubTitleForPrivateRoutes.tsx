interface SubTitleForPrivateRoutesProps {
    title: string;
}

export const SubTitleForPrivateRoutes = ({ title }: SubTitleForPrivateRoutesProps) => {
    return (
        <main>
            <div className="mt-5 border-b-2">
                <h2 className="text-slate-900 text-md font-bold ml-5">
                    {title}
                </h2>
            </div>
        </main>
    )
}