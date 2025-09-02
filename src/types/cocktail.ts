export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  [key: string]: any; // för dynamiska ingrediensfält
}

export interface CocktailResponse {
  drinks: Cocktail[];
}
