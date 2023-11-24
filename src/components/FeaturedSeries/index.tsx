"use client";

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Buttons } from '../Buttons';
import { Overview } from '../Overview';
import { Poster } from '../Poster';

import { useSerie } from '@/utils/queries';
import Assessment from '../Assessment';


export const FeaturedSeries = () => {
    const serie = useSerie(84958);

    return (
            <section className="flex flex-col container items-center bg-cover">
                <div className=''>
                    <div className="uppercase font-bold flex flex-col justify-center items-center cel:pt-[60px] lg:pt-[45px]">
                        <h2 className="cel:text-lg lg:text-xl">Está disponível agora!</h2>
                        <h1 className="cel:pt-[32px] cel:text-[64px] lg:pt-[35px] lg:text-[96px]">{serie.data?.name}</h1>                   {/* Nome da série */}
                    </div>

                    <div className="cel:pt-[298px] lg:pt-[121px] flex justify-center items-center ">
                        <div className="cel:bg-bgCel lg:bg-transparent lg:w-full rounded-t-borderCel cel:px-6 lg:flex lg:flex-row cel:flex cel:flex-col lg:mx-auto lg:gap-5">
                        
                            <div className='flex justify-center items-center'>                                                              {/* Poster */}
                                <Poster url={serie.data?.poster_path} />
                            </div>
                            <div className='cel:flex cel:flex-col lg:justify-between max-w-[722px] break-words'>
                                <div className='lg:flex lg:flex-row cel:order-3 lg:order-1'>                                                {/* Resumo */}
                                    <Overview overviewSerie={serie.data?.overview}/>
                                </div>
                                
                                <div className="flex lg:justify-start cel:justify-between lg:gap-[104px] relative cel:-top-10 cel:font-bold lg:-top-0 lg:order-2 cel:order-1">  {/* Avaliações, Nota e ano de lançamento */}
                                    
                                    <div className='flex justify-center items-center'>                                                      {/* Duração */}
                                        <AccessTimeIcon className='cel:w-[18px] cel:h-[18px]' />
                                        <span className='cel:pl-2 lg:leading-[30px] lg:pt-[2px]'>{serie.data?.episode_run_time}min</span>
                                    </div>
                                    <div>
                                        <Assessment />
                                    </div>
                                    <div>                                                                                                   {/* Lançamento */}
                                        {serie.data?.first_air_date.slice(0, 4)}
                                    </div>
                                </div>

                                <div className='lg:order-3 cel:order-2'>                                                                    {/* Botoes */}
                                    <Buttons homepage={serie.data?.homepage} />
                                    <hr className='text-separator opacity-5 lg:hidden cel:block' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
    )
}