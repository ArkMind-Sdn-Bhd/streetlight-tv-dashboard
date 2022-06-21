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
      display: false,
      position: "top",
    },
  },
};

const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const data = {
  labels,
  datasets: [
    {
      label: "Week 1",
      data: [30, 40, 50, 49, 60, 55, 53],
      backgroundColor: "rgb(128,0,128)",
    },


  ],
};

export default function TotalConsumptionGraph() {
  return (
    <>
      <h6>Accumulated Total Power Consumption</h6>
      <h2 style={{ textAlign: "right" }}>122,024 KWh</h2>
      <Bar  height={150} options={options} data={data} />
    </>
  );
}
