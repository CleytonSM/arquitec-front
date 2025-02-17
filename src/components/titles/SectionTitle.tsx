interface TitleSectionProps {
    title: string;
}

export const TitleSection = ({ title }: TitleSectionProps) => {
    return (
        <div className="mt-4">
          <p className="text-slate-900 text-md font-medium">
            {title}
          </p>
        </div>
    )
}