import { Link } from "react-router";
import styles from "./Header.module.css";
import { SearchForm } from "..";

type HeaderProps = {
  // props här
};

export default function Header({}: HeaderProps) {
  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <h1>[:Kåcktäjls:]</h1>
      </Link>
      <SearchForm query="" />
    </header>
  );
}
