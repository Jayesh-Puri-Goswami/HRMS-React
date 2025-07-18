import React, { useState } from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import { motion } from "framer-motion";
import { EMPLOYEE_PROFILE_DATA } from "../../constant/EmployeeProfile";
import DataTable from "../ui/datatable/DataTable";
import { AddressModel } from "./EmployeModels/Address.Model";
import InputField from "../ui/inputs/InputField";
import { BankDetail } from "../../types/EmployeeProfile";

const BankDetailContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBankDetail, setSelectedBankDetail] = useState<BankDetail | null>(
    null
  );
  const [addBankdetails, setAddBankdetails] = useState<BankDetail | null>(null);

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedBankDetail(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!addBankdetails) return;
    setAddBankdetails({
      ...addBankdetails,
      [e.target.name]: e.target.value,
    });
  };
  const columns = [
    { key: "bankName" as keyof BankDetail, header: "Bank Name" },
    { key: "accountNumber" as keyof BankDetail, header: "Account Number" },
    { key: "ifscCode" as keyof BankDetail, header: "IFSC Code" },
    { key: "accountType" as keyof BankDetail, header: "Account Type" },
    { key: "branchName" as keyof BankDetail, header: "Branch Name" },
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
            pageTitle="Bank Detail"
            endSection={
              <button onClick={() => setIsModalOpen(true)} className="text-themeBlue font-medium px-3 py-1.5 text-sm bg-themeBlueLight rounded-xl">
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

      <AddressModel
        className="max-w-xl  scale-50 md:scale-100  p-3"
        isOpen={isModalOpen}
        onClose={handleClose}
      >
        {isModalOpen && (
          <div className="p-4 space-y-4  ">
            <h2 className="text-lg font-medium mb border-b pb-2  dark:border-white/[0.09] ">
              Add Bank Detail
            </h2>
            <div>
              <InputField
                name="accountNumber"
                value={""}
                onChange={handleInputChange}
                type="text"
                id="accountNumber"
                label="Account Number"
                placeholder="Enter Account Number"
              />
              <InputField
                name="type"
                value={""}
                onChange={handleInputChange}
                placeholder="Enter Name"
                type="text"
                id="type"
                label="Account holder Name"
                className="w-full flex justify-center items-center"
              />
              <InputField
                name="type"
                value={""}
                onChange={handleInputChange}
                placeholder="Enter bank name"
                type="text"
                id="type"
                label="Bank Name"
                className="w-full flex justify-center items-center"
              />
              <InputField
                name="type"
                value={""}
                onChange={handleInputChange}
                placeholder="Enter IFSC Code"
                type="text"
                id="type"
                label="IFSC Code"
                className="w-full flex justify-center items-center"
              />
              <InputField
                name="type"
                value={""}
                onChange={handleInputChange}
                placeholder="Enter Branch Name"
                type="text"
                id="type"
                label="Branch Name"
                className="w-full flex justify-center items-center"
              />
              <InputField
                name="type"
                value={""}
                onChange={handleInputChange}
                placeholder="Enter Account Type"
                type="text"
                id="type"
                label="Account Type"
                className="w-full flex justify-center items-center"
              />
            </div>

            <p className="text-sm text-gray-500/50">
              Document size allowed : 5MB. Document type allwed : Png, Jpg, Pdf,
              Docx please check file format before upload.
            </p>
            <div className="flex flex-col md:flex-row justify-end gap-2 mt-4">
              <button
                type="button"
                className="px-8 py-2 rounded-xl dark:bg-white/[0.03] dark:border-none border-none dark:text-white  shadow-md  bg-white border-2 border-themeBlueLight text-black hover:bg-themeBlueLight hover:text-white transition-all duration-300"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-2 rounded-xl bg-themeBlueLight  dark:text-black text-black hover:bg-white/[0.03] hover:dark:text-white  transition-all duration-300"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </AddressModel>
    </>
  );
};

export default BankDetailContent;
