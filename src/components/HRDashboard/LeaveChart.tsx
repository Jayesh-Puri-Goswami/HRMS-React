import React, { useEffect, useMemo, useState } from "react";
import { DonutChartOptions, LeaveDataType } from "../../types/HRDashboard";
import ChartSkeleton from "./Skeletons/ChartSkeleton";
import { motion } from "framer-motion";
import Card from "../ui/card/Card";
import { DEFAULT_CHART_COLORS } from "../../constant/HRDashboard";

const ApexChart = React.lazy(() => import("react-apexcharts"));

const LeavesChart: React.FC<{ data: LeaveDataType[]; isLoading?: boolean }> = ({
  data,
  isLoading,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const total = data.reduce((sum, item) => sum + item.count, 0);
  const dataWithPercentages = data.map((item) => ({
    ...item,
    percentage: total ? ((item.count / total) * 100).toFixed(1) : 0,
  }));

  const chartOptions: DonutChartOptions = useMemo(
    () => ({
      chart: {
        type: "donut",
        height: 280,
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
        },
        background: "transparent",
      },
      tooltip: {
        enabled: true,
        theme: document.documentElement.classList.contains("dark")
          ? "dark"
          : "light",
        style: {
          fontSize: "14px",
          fontFamily: "inherit",
        },
      },
      colors: DEFAULT_CHART_COLORS,
      labels: dataWithPercentages.map((item) => item.type),
      legend: {
        show: false,
      },
      theme: {
        mode: document.documentElement.classList.contains("dark")
          ? "dark"
          : "light",
      },
      plotOptions: {
        pie: {
          donut: {
            size: "50%",
            
          },
          
        },
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 1024,
          options: {
            chart: { height: 240 },
          },
        },
        {
          breakpoint: 768,
          options: {
            chart: { height: 200 },
          },
        },
        {
          breakpoint: 480,
          options: {
            chart: { height: 160 },
          },
        },
      ],
    }),
    [dataWithPercentages]
  );

  const series = dataWithPercentages.map((item) => item.count);

  if (isLoading || !isClient) return <ChartSkeleton />;

  return (
    <Card className="bg-white md:h-[280px]  dark:bg-[var(--color-themeBackgroundColorDark)] p-4">
      <h2 className="font-medium  text-lg mb-4 text-gray-800 dark:text-gray-100">
        Leaves
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="h-fit mt-10"
      >
        <div className="flex px-4 flex-col m justify-between md:flex-row items-center md:items-start gap-6">
          <React.Suspense fallback={<ChartSkeleton />}>
            <ApexChart
              options={chartOptions}
              series={series}
              type="donut"
              height={130}
              width={130}
            />
          </React.Suspense>
          <div className="flex flex-col space-y-3 w-full md:w-auto">
            {dataWithPercentages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between text-sm w-full"
              >
                <div className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: DEFAULT_CHART_COLORS[index] }}
                  />
                  <span className="text-gray-500 dark:text-gray-400">
                    {item.type}
                  </span>
                </div>
                <span className="font-medium text-gray-600 dark:text-gray-200">
                  {item.percentage}%
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Card>
  );
};

export default LeavesChart;
