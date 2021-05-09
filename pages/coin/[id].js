import ErrorPage from "next/error";
import LineGraph from "../../components/LineGraph";
import Paragraph from "../../components/Paragraph";
import styles from "../../styles/CoinDetail.module.css";

export default function coinDetails({ market, id, info }) {
  if (market.error) {
    return <ErrorPage statusCode={404} />;
  } else {
    const priceChange = info.market_data.price_change_percentage_24h.toFixed(2);
    const price = info.market_data.current_price.usd.toLocaleString();

    return (
      <div className={styles.container}>
        <div className={styles.heading}>
          <img src={info.image.large} className={styles.logo} alt={info.id} />
          <h1 className={styles.heading}>
            {info.name} ({info.symbol.toUpperCase()})
          </h1>
        </div>
        <div className={styles.price_heading}>
          <h2 className={styles.price}>${price}</h2>
          {priceChange < 0 ? (
            <p className={styles.coin_red}>
              <b>{priceChange}%</b>
            </p>
          ) : (
            <p className={styles.coin_green}>
              <b>{priceChange}%</b>
            </p>
          )}
        </div>
        <div className={styles.graph_container}>
          <LineGraph data={market} id={id} />
        </div>
        <div className={styles.description}>
          <h2>About {info.name}</h2>
          <Paragraph className={styles.para}>
            {info.description.en.replace(/<[^>]+>/g, "")}
          </Paragraph>
        </div>
      </div>
    );
  }
}

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const [marketRes, infoRes] = await Promise.all([
    fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=6&interval=hourly`
    ),
    fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false`),
  ]);
  const [market, info] = await Promise.all([marketRes.json(), infoRes.json()]);
  return {
    props: {
      market,
      id,
      info,
    },
  };
};
