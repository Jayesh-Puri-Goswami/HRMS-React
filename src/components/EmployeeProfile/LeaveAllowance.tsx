import React from "react";
import TableHeader from "../ui/card/TableHeader";

interface LeaveAllowanceProps {
  onClick?: () => void;
  children?: React.ReactNode;
  title?: string;
  showBorder?: boolean;
  showShadow?: boolean;
  padding?: string;
  animate?: boolean;
}
const LeaveAllowance: React.FC<LeaveAllowanceProps> = ({
  onClick,
  children,
  title,
  showBorder,
  showShadow,
  padding,
  animate,
}) => {
  return (
    <div className="w-full flex-col   px-4 py-5 overflow-x-auto  flex justify-between">
     
      {children}
    </div>
  );
};

export default LeaveAllowance;
