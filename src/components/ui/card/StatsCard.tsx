import Card from "./Card";
import clsx from "clsx";

 
interface StatsCardProps {
  value: string | number
  label: string
  className?: string
  valueClassName?: string
  labelClassName?: string
  boxClassName?: string
}

function StatsCard({ value,label,className,labelClassName,valueClassName,boxClassName }: StatsCardProps) {
  return (
    <>
      <Card className={clsx("bg-white dark:bg-white/[0.2] w-[317px] h-[88px] flex justify-center items-center", className, boxClassName)}>
      <div className="p-6 text-center">
        <div className={clsx("text-2xl font-semibold text-gray-900 dark:text-white/90 mb-1", valueClassName)}>{value}</div>
        <div className={clsx("text-sm text-gray-500 dark:text-white font-medium capitalize", labelClassName)}>{label}</div>
      </div>
    </Card>
    </>
  );
}

export default StatsCard;





 