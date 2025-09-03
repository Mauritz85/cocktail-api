
import { useEffect, useState, useCallback } from "react";
import { fetchRandomCocktail, searchCocktailsByName } from "../api/api";
import type { Cocktail } from "../types/cocktail";

type Mode = "random" | "search";

export function useCocktails(mode: Mode, query?: string) {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadCocktails = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      if (mode === "random") {
        const drink = await fetchRandomCocktail();
        setCocktails([drink]);
      } else if (mode === "search" && query) {
        const drinks = await searchCocktailsByName(query);
        setCocktails(drinks);
      } else {
        setCocktails([]);
      }
    } catch (err) {
      console.error(err);
      setError("Kunde inte hämta cocktails.");
    } finally {
      setLoading(false);
    }
  }, [mode, query]);

  useEffect(() => {
    loadCocktails();
  }, [loadCocktails]);

  return { cocktails, loading, error, refetch: loadCocktails };
}
