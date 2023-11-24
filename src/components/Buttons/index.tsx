
type Props = {
    homepage?: string;
}

export const Buttons = ({homepage}: Props) => {
    return (
        <div className="cel:py-8 cel:flex cel:justify-between lg:justify-start items-center">
            <a href={homepage} target="_blank" className="bg-buttonAttend cel:py-2 cel:px-[18.5px] rounded-[3px] hover:bg-buttonTrailer">Assistir Agora</a>
            <a href={homepage} target="_blank" className=" cel:py-2 cel:px-[46.5px] border border-white box-border rounded-[3px] cel:ml-[11px] lg:ml-[21px] lg:bg-buttonTrailer ">Trailer</a>
        </div>
    )
}