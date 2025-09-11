import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import styles from "./SearchView.module.css";
import type { ICocktail } from "../../types/cocktail";
import { Button, Card } from "../../components";

export default function SearchView() {
  const { cocktails, query } = useLoaderData() as {
    cocktails: ICocktail[];
    query: string;
  };

  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  const totalPages = Math.ceil(cocktails.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCocktails = cocktails.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <section className={styles.searchView}>
      {currentCocktails.length > 0 ? (
        <>
          <div className={styles.cardsGrid}>
            {currentCocktails.map((cocktail) => (
              <Card cocktail={cocktail} key={cocktail.id} />
            ))}
          </div>

          {totalPages >= 2 && (
            <div className={styles.pagination}>
              <Button onClick={handlePrev} disabled={currentPage === 1}>
                Föregående
              </Button>
              <span>
                Sida {currentPage} av {totalPages}
              </span>
              <Button
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                Nästa
              </Button>
            </div>
          )}
        </>
      ) : (
        <p>Inga cocktails hittades</p>
      )}
    </section>
  );
}
