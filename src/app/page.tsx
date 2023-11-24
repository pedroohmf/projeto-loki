"use client";

import { FeaturedSeries } from "@/components/FeaturedSeries";
import { useSerie } from "@/utils/queries";

const Page = () => {
  const serie = useSerie(84958);
  return (
    <main className="h-screen lg:bg-cover cel:bg-cover cel:bg-center lg:bg-top bg-no-repeat bg-fixed " style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${serie.data?.seasons[0]?.poster_path}`}}>
      <div className="bg-black/70 h-screen">
        <div className="lg:flex lg:justify-center lg:items-center container font-b612 lg:mx-auto">
          <FeaturedSeries />
        </div>
      </div>
    </main>
  )
}

export default Page;