import Image from "next/image";
import styles from "../styles/Error.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>Uh Oh.....</h1>
      <p className={styles.para}>
        The requested page could not be found on the server
      </p>
      <Image src="/404.svg" width={360} height={360} alt="not found" />
    </div>
  );
}
