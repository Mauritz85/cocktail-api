import { type LoaderFunctionArgs } from "react-router";
import { fetchCocktailById } from "../api";

export async function cocktailLoader({ params }: LoaderFunctionArgs) {
  if (!params.Id) {
    throw new Response("No cocktail id provided", { status: 400 });
  }

  const cocktail = await fetchCocktailById(params.Id);

  return { cocktail };
}
