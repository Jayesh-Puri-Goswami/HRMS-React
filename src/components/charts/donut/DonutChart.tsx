import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

// Simple dark mode detection (works with Tailwind's 'dark' class)
function useIsDarkMode() {
  if (typeof window === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

interface DonutChartProps {
  labels: string[];
  series: number[];
  title?: string;
  colors?: string[];
  height?: number | string;
  width?: number | string;
  theme ?: boolean;
}

const DonutChart: React.FC<DonutChartProps> = ({
  labels,
  series,
  title = "Donut Chart",
  colors = ["#2563eb", "#10b981", "#f59e0b", "#ef4444"],
  height = 135,
  width = "100%",
  theme
}) => {
  const isDark = useIsDarkMode();

  const chartOptions: ApexOptions = {
    chart: {
      type: "donut",
      toolbar: { show: false },
      background: theme ? "#000" : "#fff",
    },
    labels,
    colors,
    legend: {
      position: "right",
      fontSize: "14px",
      labels: { colors: theme ? "#e5e7eb" : "#6b7280" },
      formatter: (seriesName, opts) =>
        `${seriesName}: ${opts.w.globals.series[opts.seriesIndex]}`,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
        },
      },
    },
    responsive: [
      {
        breakpoint: 640,
        options: {
          chart: { width: "100%", height: 180 },
          legend: { position: "bottom" },
        },
      },
    ],
  };

  

  return (
    <div
      className={`w-full max-w-md mx-auto  rounded-2xl ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div
        className={`text-lg flex justify-center pb-2 md:p-0 md:justify-end items-center w-full font-bold  text-right ${
          isDark ? "text-blue-200" : "text-[#3a648a]"
        }`}
      >
        <span className="border-b border-gray-200 dark:border-gray-700">
          {title}
        </span>
      </div>
      <Chart
        options={chartOptions}
        series={series}
        type="donut"
        width={width}
        height={height}
      />
    </div>
  );
};

export default DonutChart;