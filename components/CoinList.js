import Coins from "./Coins";

export default function CoinList({ coinArray }) {
  return (
    <>
      {coinArray.map((coin) => {
        return (
          <Coins
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol.toUpperCase()}
            marketcap={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
            id={coin.id}
          />
        );
      })}
    </>
  );
}
