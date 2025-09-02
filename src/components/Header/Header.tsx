import styles from "./Header.module.css";

type HeaderProps = {
  // props här
};

export default function Header({}: HeaderProps) {
  return (
    <div className={styles.header}>
      <h1 className={styles.head}>Cocktailguiden</h1>
    </div>
  );
}
