"use client";

import React from "react";

interface DonutChartProps {
  data: {
    label: string;
    value: number;
    color: string;
  }[];
  size?: number;
  strokeWidth?: number;
  className?: string;
}

const DonutChart: React.FC<DonutChartProps> = ({
  data,
  size = 160,
  strokeWidth = 30,
  className = "",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  let offset = 0;

  return (
    <div className={`relative w-[${size}px] h-[${size}px] ${className}`}>
      <svg width={size} height={size}>
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          {data.map((item, index) => {
            const valuePercent = item.value / total;
            const dash = valuePercent * circumference;
            const dashArray = `${dash} ${circumference - dash}`;
            const circle = (
              <circle
                key={index}
                r={radius}
                cx={size / 2}
                cy={size / 2}
                fill="transparent"
                stroke={item.color}
                strokeWidth={strokeWidth}
                strokeDasharray={dashArray}
                strokeDashoffset={offset}
              />
            );
            offset -= dash;
            return circle;
          })}
        </g>
      </svg>

      {/* Center label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        
      </div>
    </div>
  );
};

export default DonutChart;
