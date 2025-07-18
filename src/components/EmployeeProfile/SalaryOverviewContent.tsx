import React, { useState } from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import { motion } from "framer-motion";
import { EMPLOYEE_PROFILE_DATA } from "../../constant/EmployeeProfile";
import DataTable from "../ui/datatable/DataTable";
import { SalaryOverview } from "../../types/EmployeeProfile";
import { FileInput } from "lucide-react";
import { AddressModel } from "./EmployeModels/Address.Model";

const SalaryOverviewContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const columns = [
    { key: "id" as keyof SalaryOverview, header: "Id" },
    { key: "month" as keyof SalaryOverview, header: "Month" },
    { key: "salary" as keyof SalaryOverview, header: "Salary" },
    { key: "bonus" as keyof SalaryOverview, header: "Bonus" },
    { key: "deductions" as keyof SalaryOverview, header: "Deductions" },
    { key: "grossSalary" as keyof SalaryOverview, header: "Grass Salary" },
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
            pageTitle="Salary Overview"
            endSection={<CurrentSalaryButton onClick={() => setIsModalOpen(true)} />}
          />
        </div>

        <DataTable
          data={EMPLOYEE_PROFILE_DATA.salaryOverview}
          columns={columns}
          showSearch={false}
          showActionButton={false}
        />
      </motion.div>{" "}
      <AddressModel
        className="max-w-xl  scale-50 md:scale-100  p-3"
        isOpen={isModalOpen}
        onClose={handleClose}
      >
        {isModalOpen && (
          <div className="p-4 space-y-4  ">
            <h2 className="text-lg font-medium mb border-b pb-2  dark:border-white/[0.09] ">
              Expot salary overview
            </h2>
            <div></div>

            <p className="text-sm text-gray-500 p-1">
            Are you sure you want to export salary overview?
            </p>
            <div className="flex flex-col md:flex-row justify-end gap-2 mt-4">
              <button
                type="button"
                className="px-8 py-2 rounded-xl dark:bg-white/[0.03] dark:border-none border-none dark:text-white  shadow-md  bg-white border-2 border-themeBlueLight text-black hover:bg-themeBlueLight hover:text-white transition-all duration-300"
                onClick={handleClose}
              >
                Yes
              </button>
              <button
                type="submit"
                className="px-8 py-2 rounded-xl bg-themeBlueLight  dark:text-black text-black hover:bg-white/[0.03] hover:dark:text-white  transition-all duration-300"
              >
                No
              </button>
            </div>
          </div>
        )}
      </AddressModel>
    </>
  );
};

const CurrentSalaryButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div  className="flex items-center gap-7">
      <span className="text-sm text-black font-medium">
        Current Salary: XXXX INR
      </span>
      <button onClick={onClick} className="text-themeBlue font-medium h-10 w-10 flex items-center justify-center py-2 text-sm bg-themeBlueLight rounded-lg">
        <FileInput className="w-4 h-4" />
      </button>
    </div>
  );
};

export default SalaryOverviewContent;
