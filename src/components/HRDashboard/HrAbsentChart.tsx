import React, { useEffect, useMemo, useState } from "react";
import { BarChartOptions, AbsentData } from "../../types/HRDashboard";
import ChartSkeleton from "./Skeletons/ChartSkeleton";
import Card from "../ui/card/Card";

const ApexChart = React.lazy(() => import("react-apexcharts"));

const AbsentChart: React.FC<{ data: AbsentData[];  }> = ({
  data,
 
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);



  
  const chartOptions: BarChartOptions = useMemo(
    () => ({
      chart: {
        type: "bar",
        height: 270,
        toolbar: {
          show: false,
        },
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
        },
      },
      colors: data.map((item) => item.color),
      plotOptions: {
        bar: {
          borderRadius: 4,
          columnWidth: "60%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: data.map((item) => item.month),
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          formatter: (value: number) => `${Math.round(value)}`,
        },
      },
      grid: {
        show: true,
        borderColor: "#f1f5f9",
        strokeDashArray: 3,
      },
      responsive: [
        {
          breakpoint: 640,
          options: {
            chart: {
              height: 200,
            },
          },
        },
      ],
    }),
    [data]
  );

  const series = [
    {
      name: "Absents",
      data: data.map((item) => item.count),
    },
  ];



  return (
    <React.Suspense fallback={<ChartSkeleton />}>
      <Card className="bg-white  dark:bg-themeBackgroundColorDark h-[280px] ">
        <h2 className="text-lg font-medium">Absent</h2>
        <ApexChart
          options={chartOptions}
          series={series}
          type="bar"
          height={200}
        />
      </Card>
    </React.Suspense>
  );
};

export default AbsentChart;
