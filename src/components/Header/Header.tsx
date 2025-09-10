import { Link } from "react-router";
import styles from "./Header.module.css";

type HeaderProps = {
  // props här
};

export default function Header({}: HeaderProps) {
  return (
    <div className={styles.header}>
      <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
        <h1 className={styles.head}>Cocktailguiden</h1>
      </Link>
    </div>
  );
}
