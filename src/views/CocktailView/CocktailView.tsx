import type { ICocktail } from "../../types/cocktail";
import styles from "./CocktailView.module.css";

type CocktailViewProps = {
  cocktail: ICocktail;
};

export default function CocktailView({}: CocktailViewProps) {
  return <article className={styles.cocktailview}></article>;
}
