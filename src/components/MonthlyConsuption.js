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
      display: false,
      position: "top",
    },
    title: {
      display: true,
      text: "Monthly Power Consumption",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
    "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const data = {
  labels,
  datasets: [
    {
      label: "Monthly Usage",
      data: [30000, 40000, 50000, 49000, 30000, 0, 0, 0, 0, 0, 0, 0],
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
