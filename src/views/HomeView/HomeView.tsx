import { useEffect, useState } from "react";
import { Card } from "../../components";
import styles from "./HomeView.module.css";
import type { Cocktail } from "../../types/cocktail";
import { fetchRandomCocktail } from "../../api/api";

type HomeViewProps = {
  // props här
};

export default function HomeView({}: HomeViewProps) {
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCocktail = async () => {
      try {
        const drink = await fetchRandomCocktail();
        setCocktail(drink);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadCocktail();
  }, []);

  if (loading) return <p>Laddar...</p>;
  if (!cocktail) return <p>Ingen cocktail hittades</p>;
  return (
    <div className={styles.homeview}>
      {loading ? (
        <p>Laddar...</p>
      ) : !cocktail ? (
        <p>Ingen cocktail hittades</p>
      ) : (
        <Card cocktail={cocktail} />
      )}
    </div>
  );
}
