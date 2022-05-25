import React from "react";
/*
 *Graph's
 */
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
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = [
  "11/21",
  "12/21",
  "01/22",
  "02/22",
  "03/22",
  "04/22",
  "05/22",
  "04/22",
  "09/22",
];
const data = {
  labels,
  datasets: [
    {
      label: "Monthly Usage",
      data: [30, 40, 50, 49, 60, 55, 77, 87, 90],
      backgroundColor: "#047EDA",
    },
  ],
};

export default function MonthlyConsuption() {
  return (
    <div>
      <Bar  options={options} height={200} data={data} />
    </div>
  );
}
