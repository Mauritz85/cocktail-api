import { fetchRandomCocktail } from "../api";

export async function homeLoader() {
  const cocktail = await fetchRandomCocktail();

  return { cocktail };
}
