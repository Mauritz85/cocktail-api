import styles from "./SearchForm.module.css";
import { Form } from "react-router";
import { Button } from "..";

type SearchFormProps = {
  query: string;
};

export default function SearchForm({ query = "" }: SearchFormProps) {
  return (
    <Form method="get" action="/search" className={styles.searchForm}>
      <input name="query" defaultValue={query} placeholder="Sök cocktail..." />
      <Button type="submit">Sök</Button>
    </Form>
  );
}
