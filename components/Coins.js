import styles from "../styles/Coins.module.css";
import Link from "next/link";

export default function Coins({
  name,
  price,
  symbol,
  marketcap,
  image,
  volume,
  priceChange,
  id,
}) {
  return (
    <Link href={`/coin/${id}`}>
      <div className={styles.coin_container}>
        <div className={styles.coin_row}>
          <div className={styles.coin}>
            <img src={image} alt={name} className={styles.coin_img} />
            <h1 className={styles.coin_name}>{name}</h1>
            <p className={styles.coin_symbol}>{symbol}</p>
          </div>
          <div className={styles.coin_data}>
            <p className={styles.coin_price}>${price.toLocaleString()}</p>
            {priceChange < 0 ? (
              <p className={styles.coin_red}>{priceChange.toFixed(2)}%</p>
            ) : (
              <p className={styles.coin_green}>{priceChange.toFixed(2)}%</p>
            )}
            <p className={styles.coin_volume}>${volume.toLocaleString()}</p>
            <p className={styles.coin_marketcap}>
              ${marketcap.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
