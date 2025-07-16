import { motion } from "framer-motion";
import { Download, Eye, FileInput } from "lucide-react";
import React from "react";
import DataTable from "../ui/datatable/DataTable";
import PageBreadcrumb from "../common/PageBreadCrumb";
import { EMPLOYEE_PROFILE_DATA } from "../../constant/EmployeeProfile";
import { PayslipEntry } from "../../types/EmployeeProfile";

const PayslipContent = () => {
  const columns = [
    { key: "id" as keyof PayslipEntry, header: "Id" },
    { key: "month" as keyof PayslipEntry, header: "Month" },
    { key: "status" as keyof PayslipEntry, header: "Status" },
    { key: "salary" as keyof PayslipEntry, header: "Net Salary" },
    {
      key: "viewDetails" as keyof PayslipEntry,
      header: "View Details",
      render: (row: PayslipEntry) => (
        <button
          className="text-themeBlue flex items-center gap-2 font-medium px-3 py-1.5  justify-center  text-sm bg-themeBlueLight rounded-lg"
          onClick={() => {}}
        >
          {" "}
          <Eye className="w-4 h-4" />
          View
        </button>
      ),
    },
    {
      key: "download" as keyof PayslipEntry,
      header: "Download",
      render: (row: PayslipEntry) => (
        <button
          className=" flex items-center gap-2 font-medium px-3 py-1.5  justify-center  text-sm rounded-lg"
          onClick={() => {}}
        >
          <Download className="w-4 h-4 " /> Download PDF
        </button>
      ),
    },
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
          pageTitle="Payslip"
          endSection={<CurrentSalaryButton />}
        />
      </div>

      <DataTable
        data={EMPLOYEE_PROFILE_DATA.payslips}
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
      <span className="text-sm text-black font-medium">
        Current Salary: XXXX INR
      </span>
      <button className="text-themeBlue font-medium h-10 w-10 flex items-center justify-center py-2 text-sm bg-themeBlueLight rounded-lg">
        <FileInput className="w-4 h-4" />
      </button>
    </div>
  );
};
export default PayslipContent;
