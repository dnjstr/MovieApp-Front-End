import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";

interface GenreCount {
    genre: string;
    count: number;
}

const fetchGenres = async (): Promise<GenreCount[]> => {
    const { data } = await axiosInstance.get("/genres/");
    if (!Array.isArray(data)) {
        throw new Error("Invalid data format received");
    }

    return data.map((item: any) => ({
        genre: typeof item === "string" ? item : item.genre,
        count: item.count || 0,
    }));
};

export const useGenres = () => {
    return useQuery({
        queryKey: ["genres"],
        queryFn: fetchGenres,
        staleTime: 1000 * 60 * 5,
    });
};
