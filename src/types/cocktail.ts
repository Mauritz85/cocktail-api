export interface IRawCocktail {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  [key: string]: any;
}

export interface IRawCocktailResponse {
  drinks: IRawCocktail[];
}

interface IIngredient {
  ingredient: string;
  measure: string | null;
}

export interface ICocktail {
  id: string;
  name: string;
  tags: string[];
  category: string;
  alcoholic: boolean;
  glass: string;
  instructions: string;
  thumbnail: string;
  ingredients: IIngredient[];
}
