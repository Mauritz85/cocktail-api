import { Card } from "../../components";
import styles from "./HomeView.module.css";
import { Button } from "@mui/material";
import { useCocktails } from "../../hooks/useCocktail";

type HomeViewProps = {
  // props här
};

export default function HomeView({}: HomeViewProps) {
  const { cocktails, loading, error, refetch } = useCocktails("random");
  const cocktail = cocktails[0];

  return (
    <div className={styles.homeview}>
      {!cocktail ? (
        <p>{error}</p>
      ) : (
        <>
          <h2>Roulette-drink</h2>
          <Card cocktail={cocktail} loading={loading} />
        </>
      )}
      <Button onClick={refetch}>Snurra drinkhjulet igen!</Button>
    </div>
  );
}
