import Card from "./Card";
import clsx from "clsx";

 
interface StatsCardProps {
  value: string | number
  label: string
  className?: string
  valueClassName?: string
  labelClassName?: string
}

function StatsCard({ value,label,className,labelClassName,valueClassName }: StatsCardProps) {
  return (
    <>
      <Card className={clsx("bg-themeBackgroundColor dark:bg-white/[0.2] border-0 shadow-sm rounded-xl w-[317px] h-[88px] flex justify-center items-center", className)}>
      <div className="p-6 text-center">
        <div className={clsx("text-2xl font-semibold text-gray-900 dark:text-white/90 mb-1", valueClassName)}>{value}</div>
        <div className={clsx("text-sm text-gray-500 dark:text-white font-medium capitalize", labelClassName)}>{label}</div>
      </div>
    </Card>
    </>
  );
}

export default StatsCard;





 