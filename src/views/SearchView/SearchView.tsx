import styles from "./SearchView.module.css";

type SearchViewProps = {
  // props här
};

export default function SearchView({}: SearchViewProps) {
  return (
    <div className={styles.searchview}>
      Hello SearchView
    </div>
  );
}
