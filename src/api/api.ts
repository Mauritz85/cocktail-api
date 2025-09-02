import type { Cocktail, CocktailResponse } from "../types/cocktail";

export async function fetchRandomCocktail(): Promise<Cocktail> {
  try {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: CocktailResponse = await response.json();
    console.log(data);

    if (!data.drinks || data.drinks.length === 0) {
      throw new Error("No drinks found");
    }

    return data.drinks[0];
  } catch (error) {
    console.error("Error fetching cocktail:", error);
    throw error;
  }
}
