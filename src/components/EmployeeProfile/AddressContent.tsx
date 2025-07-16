import React, { useState } from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import { motion } from "framer-motion";
import { EMPLOYEE_PROFILE_DATA } from "../../constant/EmployeeProfile";
import { Edit, MapPin } from "lucide-react";
import { AddressModel } from "./EmployeModels/Address.Model";
import { Address } from "../../types/EmployeeProfile";

const AddressContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  const handleEditClick = (address: Address) => {
    setSelectedAddress(address);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedAddress(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 "
    >
      <div className=" border-b dark:border-white/[0.09]">
        <PageBreadcrumb pageTitle="Address" />
      </div>

      {EMPLOYEE_PROFILE_DATA.addresses.map((address) => (
        <motion.div
          key={address.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-white/[0.03] rounded-lg hover:bg-gray-100 dark:hover:bg-white/[0.15] transition-colors duration-200"
        >
          <div className="w-10 h-10 bg-blue-100 dark:bg-white/[0.03] rounded-full flex items-center justify-center">
            <MapPin className="w-5 h-5 text-blue-600 dark:text-white dark:bg-white/[0.03] " />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-gray-800 dark:text-white mb-1">{address.label}</h3>
            <p className="text-sm text-gray-600 dark:text-white">{address.fullAddress}</p>
          </div>
          <button
            className="w-8 h-8 bg-blue-100 dark:bg-white/[0.03] rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors duration-200"
            onClick={() => handleEditClick(address)}
          >
            <Edit className="w-4 h-4 text-blue-600 dark:text-white" />
          </button>
        </motion.div>
      ))}

      <AddressModel className="max-w-xl  p-3" isOpen={isModalOpen} onClose={handleClose}>
        {selectedAddress && (
          <div className="p-4 space-y-4  ">
            <h2 className="text-lg font-medium mb-7 border-b pb-2  dark:border-white/[0.09] ">
              Edit {selectedAddress.label}
            </h2>
            <input
              className="w-full bg-themeBackgroundColor rounded p-2"
              defaultValue={selectedAddress.street}
              placeholder="Street"
            />
            <input
              className="w-full border rounded p-2"
              defaultValue={selectedAddress.city}
              placeholder="City"
            />
            <input
              className="w-full border rounded p-2"
              defaultValue={selectedAddress.state}
              placeholder="State"
            />
            <input
              className="w-full border rounded p-2"
              defaultValue={selectedAddress.country}
              placeholder="Country"
            />
            <input
              className="w-full border rounded p-2"
              defaultValue={selectedAddress.pincode}
              placeholder="Pincode"
            />
            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="px-4 py-2 rounded bg-gray-200"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded bg-blue-600 text-white"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </AddressModel>
    </motion.div>
  );
};

export default AddressContent;
