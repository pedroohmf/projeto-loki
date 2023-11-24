type Props = {
    url?: string
}

export const Poster = ({url}: Props) => {
    return (
        <picture className='cel:hidden lg:block'>               
            <img src={`https://image.tmdb.org/t/p/original${url}`} alt="poster" className='lg:w-[190px] lg:h-[300px] lg:rounded-[20px]' />
        </picture>
    )
}