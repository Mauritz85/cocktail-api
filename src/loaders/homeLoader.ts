import { fetchRandomCocktail } from "../api/api";

export async function homeLoader() {
  const cocktail = await fetchRandomCocktail();
  return { cocktail };
}
