import type { LoaderFunctionArgs } from "react-router";
import { fetchCocktailsByName } from "../api";
import { mapRawCocktailData } from "../helpers/mapRawCocktailData";

export async function searchLoader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");

  if (!query) return { cocktails: [] };

  const rawCocktails = await fetchCocktailsByName(query);
  const coktails = rawCocktails?.map((rc) => mapRawCocktailData(rc));
  return { cocktails: coktails, query };
}
