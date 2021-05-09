import { Line } from "react-chartjs-2";

export default function LineGraph({ data, id }) {
  const priceArray = data.prices.map((price) => {
    return price[1].toFixed(8);
  });

  const labels = data.prices.map((price) => {
    return new Date(price[0]).toUTCString();
  });

  const datasets = [
    {
      label: id,
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(0, 123, 255,0.1)",
      borderColor: "rgb(0, 123, 255)",
      borderDashOffset: 0.0,
      pointBorderColor: "rgba(0, 123, 255,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(21, 29, 51,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      showLine: true,
      pointHitRadius: 10,
      data: priceArray,
    },
  ];

  const chartData = { labels, datasets };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#0856AD",
        },
        ticks: {
          color: "#0179F9",
        },
      },
    },
  };

  return <Line data={chartData} width={450} height={450} options={options} />;
}
