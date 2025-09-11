import useSWR from "swr";
import { fetchRandomCocktail } from "../api";
import type { ICocktail } from "../types/cocktail";

export function useRandomCocktail() {
  const key = "random";

  const { data, error, isLoading, mutate } = useSWR<ICocktail>(
    key,
    fetchRandomCocktail
  );

  return {
    cocktail: data ?? null,
    loading: isLoading,
    error: error ? "Kunde inte hämta cocktails." : null,
    refetch: () => mutate(), // triggar ny fetch
  };
}
