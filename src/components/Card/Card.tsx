import type { Cocktail } from "../../types/cocktail";
import styles from "./Card.module.css";

type CardProps = {
  cocktail: Cocktail;
};

export default function Card({ cocktail }: CardProps) {
  const previewInstructions = cocktail.strInstructions.slice(0, 62) + "...";
  return (
    <article className={styles.card}>
      <img src={cocktail.strDrinkThumb} />
      <h2>{cocktail.strDrink}</h2>
      <p>{previewInstructions}</p>
      <button>Se mer</button>
    </article>
  );
}
