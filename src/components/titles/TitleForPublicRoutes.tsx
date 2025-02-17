
interface TitleForPublicRoutesProps {
    title: string;
}

export const TitleForPublicRoutes = ({ title }: TitleForPublicRoutesProps) => {

    return (
        <main>
            <div className="m-5 flex justify-center">
                <h2
                    className="text-slate-900 text-lg font-bold"
                >
                    {title}
                </h2>
            </div>
        </main>
    )
}