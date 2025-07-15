"use client";
 
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
 
interface CalendarEvent {
  time: string;
  type?: "event" | "holiday" | "special";
}
 
interface CalendarDay {
  date: number;
  isCurrentMonth: boolean;
  isToday?: boolean;
  events?: CalendarEvent[];
  specialLabel?: string;
}
 
interface CalendarProps {
  onDateSelect?: (date: Date) => void;
}
 
const DAYS_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
 
export function Calendar({ onDateSelect }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
 
  const today = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
 
  const sampleEvents: Record<string, CalendarEvent[]> = {
    "1": [{ time: "09:00", type: "event" }],
    "2": [{ time: "09:00", type: "event" }],
    "3": [{ time: "09:00", type: "event" }],
    "4": [{ time: "09:00", type: "event" }],
    "5": [{ time: "09:00", type: "event" }],
    "9": [{ time: "09:00", type: "event" }],
    "10": [{ time: "09:00", type: "event" }],
    "11": [{ time: "09:00", type: "event" }],
    "12": [{ time: "09:00", type: "event" }],
    "15": [{ time: "09:00", type: "event" }],
    "16": [{ time: "09:00", type: "event" }],
    "17": [{ time: "09:00", type: "event" }],
    "18": [{ time: "09:00", type: "event" }],
    "19": [{ time: "09:00", type: "event" }],
    "22": [{ time: "09:00", type: "event" }],
    "23": [{ time: "09:00", type: "event" }],
    "24": [{ time: "09:00", type: "event" }],
    "26": [{ time: "09:00", type: "event" }],
    "29": [{ time: "09:00", type: "event" }],
    "30": [{ time: "09:00", type: "event" }],
    "31": [{ time: "09:00", type: "event" }],
  };
 
  const specialDates: Record<string, string> = {
    "8": "PL",
    "25": "HD",
  };
 
  const generateCalendarDays = (): CalendarDay[] => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const daysInMonth = lastDayOfMonth.getDate();
 
    const days: CalendarDay[] = [];
    const prevMonth = new Date(currentYear, currentMonth - 1, 0);
    const prevMonthDays = prevMonth.getDate();
 
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      days.push({ date: prevMonthDays - i, isCurrentMonth: false });
    }
 
    for (let date = 1; date <= daysInMonth; date++) {
      const isToday =
        date === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();
      days.push({
        date,
        isCurrentMonth: true,
        isToday,
        events: sampleEvents[date.toString()],
        specialLabel: specialDates[date.toString()],
      });
    }
 
    const remainingDays = 42 - days.length;
    for (let date = 1; date <= remainingDays; date++) {
      days.push({ date, isCurrentMonth: false });
    }
 
    return days;
  };
 
  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + (direction === "next" ? 1 : -1));
      return newDate;
    });
  };
 
  const handleDateClick = (day: CalendarDay) => {
    if (day.isCurrentMonth && onDateSelect) {
      onDateSelect(new Date(currentYear, currentMonth, day.date));
    }
  };
 
  const calendarDays = generateCalendarDays();
 
  return (
    <div className="p-4 bg-white dark:bg-white/[0.03] rounded-2xl md:rounded-3xl shadow-sm border border-gray-200 dark:border-white/10 w-[80vw] md:max-w-[80vw] lg:max-w-2xl mx-auto">
      <div className="flex items-center  justify-between mb-6">
        <button
          onClick={() => navigateMonth("prev")}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-white/50"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          {MONTHS[currentMonth]} {currentYear}
        </h2>
        <button
          onClick={() => navigateMonth("next")}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-white/50"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
 
      <div className="grid grid-cols-7 sm:grid-cols-7 gap-2 min-[375px]:gap-1 mb-2 text-center text-xs font-medium text-gray-500 dark:text-gray-400">
        {DAYS_OF_WEEK.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
 
      <div className="grid grid-cols-7 sm:grid-cols-7 gap-2 min-[375px]:gap-1">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            onClick={() => handleDateClick(day)}
            className={`relative  min-h-[10vw] md:min-h-[40px] lg:min-h-[80px] p-1 md:p-2  rounded-sm md:rounded-lg lg:rounded-xl border cursor-pointer transition-all duration-200 ${
              day.isToday ? "ring-2 ring-indigo-500 ring-opacity-50" : ""
            }${
              day.isCurrentMonth
                ? "bg-white dark:bg-white/[0.03]"
                : "bg-white dark:bg-white/10 border-indigo-500/50 text-indigo-500/50"
            } hover:bg-gray-300 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700`}
          >
            <div className="flex flex-col items-start justify-between h-full md:text-center">
              {day.specialLabel ? (
                <div className="text-sm md:text-2xl align-middle  font-semibold text-indigo-500 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 px-1 py-1 md:px-2 md:py-1 rounded-md">
                  {day.specialLabel}
                </div>
              ) : (
                <span
                  className={`text-sm md:text-lg lg:text-3xl font-medium md:mb-1 ${
                    day.isCurrentMonth
                      ? "text-gray-500 dark:text-gray-100"
                      : "text-indigo-500/40 dark:text-gray-600"
                  }`}
                >
                  {day.date}
                </span>
              )}
 
              {day.events && !day.specialLabel && (
                <div className="text-[2vw] md:text-sm  text-gray-500 dark:text-gray-400 flex  gap-1">
                  <span className="hidden md:inline">🕘</span>
                  <span> {day.events[0].time}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Calendar;