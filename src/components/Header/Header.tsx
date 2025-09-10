import { Link } from "react-router";
import styles from "./Header.module.css";

type HeaderProps = {
  // props här
};

export default function Header({}: HeaderProps) {
  return (
    <div className={styles.header}>
      <Link to={"/"}>
        <h1>Cocktailguiden</h1>
      </Link>
    </div>
  );
}
