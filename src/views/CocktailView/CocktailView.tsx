import styles from "./CocktailView.module.css";

type CocktailViewProps = {
  // props här
};

export default function CocktailView({}: CocktailViewProps) {
  return (
    <div className={styles.cocktailview}>
      Hello CocktailView
    </div>
  );
}
