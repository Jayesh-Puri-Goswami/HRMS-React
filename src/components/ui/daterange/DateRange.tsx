"use client";
 
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../button/Button";
 
export default function Header() {
  const [currentDate, setCurrentDate] = useState("June, 2025");
  const [activeFilter, setActiveFilter] = useState("This Month");
 
  const filters = [
    "This Month",
    "Last Month",
    "This Year",
    "Last Year",
    "Total",
  ];
 
  const handlePrevious = () => {
    // Logic to navigate to previous month/period
    console.log("Navigate to previous period");
  };
 
  const handleNext = () => {
    // Logic to navigate to next month/period
    console.log("Navigate to next period");
  };
 
  return (
    <header className="border-b-[0.5px] md:flex md:justify-between flex flex-col md:flex-row">
      <div className="flex items-center justify-between px-4 py-2">
        <button onClick={handleNext} className="flex items-center space-x-2">
          <ChevronLeft className="h-5 w-5 text-[#A4A4A4]" />
          <span className="text-lg font-medium text-[#5A5A5A] min-w-[120px] text-center">
            {currentDate}{" "}
          </span>
          <ChevronRight className="h-5 w-5 text-[#A4A4A4]" />
        </button>
      </div>
 
      <nav className="flex items-center space-x-1">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className="px-3 py-1.5 text-sm font-medium text-black dark:text-white bg-transparent shadow-none border-none rounded"
          >
            {filter}
          </button>
        ))}
      </nav>
    </header>
  );
}
 
 