import { Link, useLoaderData } from "react-router";
import styles from "./CocktailView.module.css";
import { Skeleton } from "@mui/material";
import { useState } from "react";
import type { ICocktail } from "../../types/cocktail";

export default function CocktailView() {
  const [imageLoading, setImageLoading] = useState(true);
  const { cocktail } = useLoaderData<{ cocktail: ICocktail }>();

  return (
    <section className={styles.cocktailview}>
      <article>
        {imageLoading && (
          <>
            <Skeleton variant="rectangular" height={208} />
            <Skeleton variant="rounded" height={19} />
            <Skeleton variant="rounded" height={36} />
            <Skeleton variant="rounded" height={30} />
          </>
        )}

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
            <ul>
              {cocktail.ingredients.map((i) => (
                <li>
                  <strong>{i.measure ? `${i.measure} ` : ""}</strong>
                  {i.ingredient}
                </li>
              ))}
            </ul>
            <p>{cocktail.instructions}</p>
            <Link to="/">Tillbaka hem</Link>
          </>
        )}
      </article>
    </section>
  );
}
