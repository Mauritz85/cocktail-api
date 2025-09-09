import { Button, Skeleton } from "@mui/material";
import styles from "./Card.module.css";
import { useState, useEffect } from "react";
import type { ICocktail } from "../../types/cocktail";

type CardProps = {
  cocktail: ICocktail;
};

export default function Card({ cocktail }: CardProps) {
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    setImageLoading(true);
  }, [cocktail.id, cocktail.thumbnail]);

  const previewInstructions = cocktail.instructions.slice(0, 50) + "...";

  return (
    <article className={styles.card}>
      {imageLoading && (
        <>
          <Skeleton variant="rectangular" height={208} />
          <Skeleton variant="rounded" height={19} />
          <Skeleton variant="rounded" height={36} />
          <Skeleton variant="rounded" height={30} />
        </>
      )}

      {/* Bilden renderas alltid */}
      <img
        src={cocktail.thumbnail}
        alt={cocktail.name}
        style={{ display: imageLoading ? "none" : "block" }}
        onLoad={() => setImageLoading(false)}
        onError={() => setImageLoading(false)}
      />

      {!imageLoading && (
        <>
          <h4>{cocktail.name}</h4>
          <p>{previewInstructions}</p>
          <Button size="small">Se hela receptet</Button>
        </>
      )}
    </article>
  );
}