import styles from "../styles/Search.module.css";

export default function SearchBar({ ...rest }) {
  return (
    <div className={styles.container}>
      <input type="text" className={styles.search} {...rest} />
    </div>
  );
}
