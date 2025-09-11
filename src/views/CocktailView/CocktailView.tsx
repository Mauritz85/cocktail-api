import { useLoaderData, useNavigate } from "react-router";
import styles from "./CocktailView.module.css";
import type { ICocktail } from "../../types/cocktail";
import { Button } from "../../components";

export default function CocktailView() {
  const { cocktail } = useLoaderData<{ cocktail: ICocktail }>();
  const navigate = useNavigate();
  console.log(cocktail.tags);

  return (
    <section className={styles.cocktailview}>
      <article>
        <img src={cocktail.thumbnail} alt={cocktail.name} />
        <h3>{cocktail.name}</h3>
        <p>{`Type: ${cocktail.category}`}</p>
        <p>{`Serving glass: ${cocktail.glass}`}</p>
        <ul>
          {cocktail.ingredients.map((i) => (
            <li>
              <strong>{i.measure ? `${i.measure} ` : ""}</strong>
              {i.ingredient}
            </li>
          ))}
        </ul>
        <p>{cocktail.instructions}</p>
        {cocktail.tags?.length > 0 && <p>Tags: {cocktail.tags.join(", ")}</p>}
        <Button onClick={() => navigate(-1)}>Tillbaka</Button>
      </article>
    </section>
  );
}
