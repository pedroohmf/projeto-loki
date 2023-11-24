import { useQuery } from "@tanstack/react-query";
import { getSerie } from "./api";
import { postsInitialData } from "@/data/postsInitialData";


export const useSerie = (id: number) => useQuery({
    queryKey: ['serie', id],
    queryFn: () => getSerie(id),
    placeholderData: postsInitialData
})