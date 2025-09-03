import type { Cocktail, CocktailResponse } from "../types/cocktail";

export async function fetchRandomCocktail(): Promise<Cocktail> {
  const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  const data: CocktailResponse = await response.json();
  if (!data.drinks || data.drinks.length === 0) throw new Error("No drinks found");
  return data.drinks[0];
}

export async function searchCocktailsByName(query: string): Promise<Cocktail[]> {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  const data: CocktailResponse = await response.json();
  return data.drinks ?? [];
}
