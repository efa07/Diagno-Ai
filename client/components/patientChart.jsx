"use client";

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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function WeeklyActivityChart() {
  // Dummy weekly activity data
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Steps Taken",
        data: [4000, 6000, 5500, 7000, 8000, 5000, 9000],
        backgroundColor: "rgba(19, 236, 200, 0.8)", // primary accent
        borderRadius: 8,
      },
      {
        label: "Calories Burned",
        data: [200, 300, 250, 400, 450, 300, 500],
        backgroundColor: "rgba(255, 255, 255, 0.3)", // secondary overlay
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" ,
        labels: {
          color: "#0d1b19", // dark text
        },
      },
      tooltip: {
        mode: "index" ,
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(0,0,0,0.05)",
        },
        ticks: {
          color: "#0d1b19",
          font: { weight: "500" },
        },
      },
      y: {
        grid: {
          color: "rgba(0,0,0,0.05)",
        },
        ticks: {
          color: "#0d1b19",
          font: { weight: "500" },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}
