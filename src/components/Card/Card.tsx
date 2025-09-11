import styles from "./Card.module.css";
import type { ICocktail } from "../../types/cocktail";
import { Link } from "react-router";
import { Button } from "..";

type CardProps = {
  cocktail: ICocktail;
};

export default function Card({ cocktail }: CardProps) {
  const previewInstructions = cocktail.instructions.slice(0, 50) + "...";

  return (
    <article className={styles.card}>
      <>
        <div>
          <img src={cocktail.thumbnail} alt={cocktail.name} />
          <h4>{cocktail.name}</h4>
          <p>{previewInstructions}</p>
        </div>
        <Link to={`../cocktail/${cocktail.id}`}>
          <Button>Se hela receptet</Button>
        </Link>
      </>
    </article>
  );
}
