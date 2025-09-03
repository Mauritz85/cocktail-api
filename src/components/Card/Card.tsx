import { Button, Skeleton } from "@mui/material";
import type { Cocktail } from "../../types/cocktail";
import styles from "./Card.module.css";
import { useState, useEffect } from "react";

type CardProps = {
  cocktail?: Cocktail;
  loading?: boolean;
};

export default function Card({ cocktail }: CardProps) {
  const [imageLoading, setImageLoading] = useState(true);

  // resetta när cocktail ändras
  useEffect(() => {
    if (cocktail) {
      setImageLoading(true);
    }
  }, [cocktail?.idDrink, cocktail?.strDrinkThumb]);

  const previewInstructions = cocktail?.strInstructions
    ? cocktail.strInstructions.slice(0, 62) + "..."
    : "";

  return (
    <article className={styles.card}>
      <img
        src={cocktail?.strDrinkThumb}
        alt={cocktail?.strDrink}
        onLoad={() => setImageLoading(false)}
        onError={() => setImageLoading(false)}
        style={imageLoading ? { display: "none" } : {}}
      />

      {imageLoading ? (
        <>
          <Skeleton variant="rectangular" width={192} height={192} />

          <Skeleton variant="rounded" width={192} height={28} />
          <Skeleton variant="rounded" width={192} height={57} />
          <Skeleton variant="rounded" width={172} height={30} />
        </>
      ) : (
        <>
          <h4>{cocktail?.strDrink}</h4>
          <p>{previewInstructions}</p>
          <Button size="small">Se hela receptet</Button>
        </>
      )}
    </article>
  );
}
