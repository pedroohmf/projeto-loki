import { SerieTypes } from "@/types/SerieTypes";
import axios from "axios";

const api = process.env.NEXT_PUBLIC_API_KEY;

const req = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: api,
        language: 'pt-BR'
    }
})

export const getSerie = async (id: number): Promise<SerieTypes> => {
    const result = await req.get(`/tv/${id}`);
    return result.data;
}