type Props = {
    overviewSerie?: string
}

export const Overview = ({overviewSerie}: Props) => {
    return (
        <div className="cel:py-[34px] lg:max-w-[722px] cel:max-w-[312px] lg:leading-[32px] lg:text-[18px]">
            {overviewSerie}
        </div>
    )
}