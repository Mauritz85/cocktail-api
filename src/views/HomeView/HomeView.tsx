import { Card } from "../../components";
import styles from "./HomeView.module.css";
import { Button } from "@mui/material";
import { useLoaderData, useRevalidator } from "react-router";
import type { ICocktail } from "../../types/cocktail";

export default function HomeView() {
  const { cocktail } = useLoaderData() as { cocktail: ICocktail };
  const { revalidate } = useRevalidator();

  return (
    <div className={styles.homeview}>
      <h2>Roulette-drink</h2>

      <Card cocktail={cocktail} />

      <Button onClick={() => revalidate()}>Snurra drinkhjulet igen!</Button>
    </div>
  );
}
