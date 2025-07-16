import React from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import { motion } from "framer-motion";
import { EMPLOYEE_PROFILE_DATA } from "../../constant/EmployeeProfile";
import DataTable from "../ui/datatable/DataTable";
import { SalaryOverview } from "../../types/EmployeeProfile";
import { FileInput } from "lucide-react";

const SalaryOverviewContent = () => {
  const columns = [
    { key: "id" as keyof SalaryOverview, header: "Id" },
    { key: "month" as keyof SalaryOverview, header: "Month" },
    { key: "salary" as keyof SalaryOverview, header: "Salary" },
    { key: "bonus" as keyof SalaryOverview, header: "Bonus" },
    { key: "deductions" as keyof SalaryOverview, header: "Deductions" },
    { key: "grossSalary" as keyof SalaryOverview, header: "Grass Salary" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className=" border-b dark:border-white/[0.09]">
        <PageBreadcrumb
          pageTitle="Salary Overview"
          endSection={<CurrentSalaryButton />}
        />
      </div>

      <DataTable
        data={EMPLOYEE_PROFILE_DATA.salaryOverview}
        columns={columns}
        showSearch={false}
        showActionButton={false}
      />
    </motion.div>
  );
};

const CurrentSalaryButton = () => {
  return (
    <div className="flex items-center gap-7">
    <span className="text-sm text-black font-medium">Current Salary: XXXX INR</span>
      <button className="text-themeBlue font-medium h-10 w-10 flex items-center justify-center py-2 text-sm bg-themeBlueLight rounded-lg">
      <FileInput className="w-4 h-4"/>
      </button>
    </div>
  );
};

export default SalaryOverviewContent;
