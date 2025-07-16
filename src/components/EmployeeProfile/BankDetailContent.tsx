import React from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import { motion } from "framer-motion";
import { EMPLOYEE_PROFILE_DATA } from "../../constant/EmployeeProfile";
import DataTable from "../ui/datatable/DataTable";


const BankDetailContent = () => {
  const columns = [
    { key: "bankName" as keyof Document, header: "Bank Name" },
    { key: "accountNumber" as keyof Document, header: "Account Number" },
    { key: "ifscCode" as keyof Document, header: "IFSC Code" },
    { key: "accountType" as keyof Document, header: "Account Type" },
    { key: "branchName" as keyof Document, header: "Branch Name" },
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
          pageTitle="Bank Detail"
          endSection={
            <button className="text-themeBlue font-medium px-3 py-1.5 text-sm bg-themeBlueLight rounded-xl">
              Add Bank Detail
            </button>
          }
        />
      </div>

      <DataTable
        data={EMPLOYEE_PROFILE_DATA.bankDetails}
        columns={columns}
        showSearch={false}
        showActionButton={false}
      />
    </motion.div>
  );
};

export default BankDetailContent;
