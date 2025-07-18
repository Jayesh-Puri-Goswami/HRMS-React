import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useTheme } from "../../../context/ThemeContext";
import Card from "../../ui/card/Card";

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
}

const DonutChart: React.FC<DonutChartProps> = ({
  labels,
  series,
  title = "Donut Chart",
  colors = ["#2563eb", "#10b981", "#f59e0b", "#ef4444"],
  height = 135,
  width = "100%",
}) => {
  const isDark = useIsDarkMode();

  const [chartOptions, setChartOptions] = useState<ApexOptions>({});

  const { theme } = useTheme();


  useEffect(() => {
    if (theme === "dark") {
      setChartOptions({
        chart: {
          type: "donut",
          toolbar: { show: false },
          background: "#00000",
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
      })
    } else {
      setChartOptions({
        chart: {
          type: "donut",
          toolbar: { show: false },
          background:"#fff",
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
      })
    }
  }, [theme, labels, series, colors]);

  return (
    <div
      className={`w-full lg:h-64 max-w-md mx-auto bg-transparent dark:bg-transparent border-none shadow-none dark:shadow-none p-5`}
    >
      <div
        className={`text-lg flex justify-center pb-2 md:p-0 md:justify-end items-center w-full font-bold  text-right text-blue-200 dark:text-blue-200 `}
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