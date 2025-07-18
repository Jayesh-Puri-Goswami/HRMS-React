import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  FileInput,
  MoveLeft,
} from "lucide-react";
import React, { useState } from "react";
import DataTable from "../ui/datatable/DataTable";
import PageBreadcrumb from "../common/PageBreadCrumb";
import { EMPLOYEE_PROFILE_DATA } from "../../constant/EmployeeProfile";
import { PayslipEntry } from "../../types/EmployeeProfile";
import { AddressModel } from "./EmployeModels/Address.Model";

const PayslipContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPayslip, setSelectedPayslip] = useState<PayslipEntry | null>(
    null
  );
  const [editPayslip, setEditPayslip] = useState<PayslipEntry | null>(null);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleEditClick = (payslip: PayslipEntry) => {
    setSelectedPayslip(payslip);
    setEditPayslip(payslip); // initialize edit state
    setIsModalOpen(true);
  };

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
          onClick={() => handleEditClick(row)}
        >
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
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        <div className=" border-b dark:border-white/[0.09]">
          <PageBreadcrumb
            className="flex items-center flex-row  scale-75 md:scale-100 justify-between mb-0"
            pageTitle={<PayslipButton />}
            endSection={<TableHeader />}
          />
        </div>

        <DataTable
          data={EMPLOYEE_PROFILE_DATA.payslips}
          columns={columns}
          showSearch={false}
          showActionButton={false}
        />
      </motion.div>

      <AddressModel
        className="max-w-xl scale-[0.85] sm:scale-100 p-3"
        isOpen={isModalOpen}
        onClose={handleClose}
      >
        {isModalOpen && selectedPayslip && (
          <div className="p-4 space-y-4">
            <h2 className="text-lg font-medium mb border-b pb-2 border-gray-200 dark:border-white/[0.3]">
              Payslip
            </h2>

            {/* Header logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col items-center gap-3 justify-between p-2 pb-3 border-b border-gray-200 dark:border-white/[0.05]"
            >
              <div className="w-[25%] sm:w-[13%]">
                <img
                  className="w-full h-auto"
                  src="/images/logo/CSL-Monogram.svg"
                  alt=""
                />
              </div>
              <div className="w-3/4 sm:w-1/2">
                <img
                  className="w-full"
                  src="/images/logo/CSL-Logo.svg"
                  alt=""
                />
              </div>
            </motion.div>

            {/* User Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-b border-gray-200 dark:border-white/[0.05] pb-4">
              <div className="flex items-center gap-2">
                <div className="bg-themeBackgroundColor dark:bg-themeBackgroundColorDark rounded-full p-2 h-12 w-12"></div>
                <div>
                  <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">
                    Employee Name
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    lorem@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="text-gray-500 dark:text-gray-400 flex flex-col gap-1">
                  <span className="text-sm">Department</span>
                  <span className="font-medium">Game Development</span>
                </div>
                <div className="text-gray-500 dark:text-gray-400 flex flex-col gap-1">
                  <span className="text-sm">Designation</span>
                  <span className="font-medium">Game Developer</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-gray-200 dark:border-white/[0.05] pb-4">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Payslip for:{" "}
                <span className="text-themeBlue dark:text-themeBlueLight">
                  1-30 Apr 2023
                </span>
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Created on: 31 May 2023
              </p>
            </div>

            {/* Salary Details */}
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Basic Salary
                </span>
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  {selectedPayslip.salary}
                </span>
              </div>

              {/* Beneficiary */}
              <div className="text-gray-700 dark:text-gray-300 font-medium">
                Beneficiary
              </div>

              {/* Allowances and Deductions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-600 dark:text-gray-400 mb-3">
                    Allowances
                  </h5>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Bonus 10%
                      </span>
                      <span className="text-gray-800 dark:text-gray-200">
                        1000
                      </span>
                    </div>
                    <div className="flex justify-between text-sm font-medium border-t pt-2 border-gray-200 dark:border-white/[0.05]">
                      <span className="text-gray-700 dark:text-gray-300">
                        Total Allowance
                      </span>
                      <span className="text-gray-800 dark:text-gray-200">
                        1000
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-gray-600 dark:text-gray-400 mb-3">
                    Deductions
                  </h5>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Tax 10%
                      </span>
                      <span className="text-gray-800 dark:text-gray-200">
                        1000
                      </span>
                    </div>
                    <div className="flex justify-between text-sm font-medium border-t pt-2 border-gray-200 dark:border-white/[0.05]">
                      <span className="text-gray-700 dark:text-gray-300">
                        Total Deduction
                      </span>
                      <span className="text-gray-800 dark:text-gray-200">
                        1000
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center py-2 border-t border-gray-200 dark:border-white/[0.05]">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Beneficiary Amount
                </span>
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  1000
                </span>
              </div>

              <div className="flex justify-between items-center py-3 border-t-2 border-gray-300 dark:border-white/[0.1]">
                <span className="font-bold text-gray-800 dark:text-gray-100">
                  Net Payable Salary
                </span>
                <span className="font-bold text-lg text-gray-800 dark:text-gray-100">
                  1000
                </span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-end gap-2 mt-4">
              <button
                type="submit"
                className="px-8 py-2 rounded-xl bg-themeBlueLight dark:bg-themeBlue hover:bg-white/[0.03] hover:dark:text-white transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </AddressModel>
    </>
  );
};

const TableHeader = () => {
  const tabsData = [
    {
      label: "Last Month",
      value: "last-month",
    },
    {
      label: "This Year",
      value: "this-year",
    },
    {
      label: "Last Year",
      value: "last-year",
    },
    {
      label: "Total",
      value: "total",
    },
  ];
  return (
    <div className="flex items-center gap-3">
      {tabsData.map((tab) => (
        <button key={tab.value} className="text-xs text-gray-500 font-medium">
          {tab.label}
        </button>
      ))}
    </div>
  );
};

const PayslipButton = () => {
  return (
    <div className="text-sm flex items-center gap-2 text-gray-500">
      <span className="text-gray-500  font-medium">
        <ChevronLeft />
      </span>
      <span className="text-gray-500 font-medium">April , 2023</span>
      <span className="text-gray-500 font-medium">
        <ChevronRight />
      </span>
    </div>
  );
};

export default PayslipContent;
