import { mapRawCocktailData } from "../helpers/mapRawCocktailData";
import type {
  ICocktail,
  IRawCocktail,
  IRawCocktailResponse,
} from "../types/cocktail";

export async function fetchRandomCocktail(): Promise<ICocktail> {
  const res = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  const data: IRawCocktailResponse = await res.json();
  const randomCocktail = mapRawCocktailData(data.drinks[0]);
  return randomCocktail;
}

export async function fetchCocktailById(
  cocktailId: IRawCocktail["idDrink"]
): Promise<ICocktail> {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
  );

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data: IRawCocktailResponse = await res.json();
  const cocktail = mapRawCocktailData(data.drinks[0]);

  return cocktail;
}
