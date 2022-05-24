import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = ["11/21", "12/21", "01/22", "02/22", "03/22", "04/22"];
const data = {
  labels,
  datasets: [
    {
      label: "Daily Usage",
      data: [30, 40, 50, 49, 60, 55],
      backgroundColor: "rgb(128,0,128)",
    },
  ],
};

export default function TotalConsumptionGraph() {
  return (
    <>
      <p>Accumulated Total Power Consumption</p>
      <h3 style={{ textAlign: "right" }}>0 KWh</h3>
      <Bar height={150} options={options} data={data} />
    </>
  );
}
