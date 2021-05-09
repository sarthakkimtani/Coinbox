import Image from "next/image";
import { useState } from "react";
import CoinList from "../components/CoinList";
import SearchBar from "../components/SearchBar";
import styles from "../styles/Home.module.css";

export default function Home({ coinData }) {
  const [search, setSearch] = useState("");

  const allCoins = coinData.filter((coin) => {
    return coin.name.toLowerCase().includes(search);
  });

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div className={styles.container}>
      <Image src="/coinbox.png" width={240} height={240} alt="logo" />
      <SearchBar placeholder="Search" onChange={handleChange} />
      <CoinList coinArray={allCoins} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false"
  );
  const coinData = await res.json();
  return {
    props: {
      coinData,
    },
  };
};
