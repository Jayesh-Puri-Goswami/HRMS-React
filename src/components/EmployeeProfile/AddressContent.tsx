import React, { useState } from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import { motion } from "framer-motion";
import { EMPLOYEE_PROFILE_DATA } from "../../constant/EmployeeProfile";
import { Edit, MapPin } from "lucide-react";
import { AddressModel } from "./EmployeModels/Address.Model";
import { Address } from "../../types/EmployeeProfile";
import InputField from "../ui/inputs/InputField";

const AddressContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [editAddress, setEditAddress] = useState<Address | null>(null);

  const handleEditClick = (address: Address) => {
    setSelectedAddress(address);
    setEditAddress(address); // initialize edit state
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedAddress(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editAddress) return;
    setEditAddress({
      ...editAddress,
      [e.target.name]: e.target.value,
    });
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
            <h3 className="font-medium text-gray-800 dark:text-white mb-1">
              {address.label}
            </h3>
            <p className="text-sm text-gray-600 dark:text-white">
              {address.fullAddress}
            </p>
          </div>
          <button
            className="w-8 h-8 bg-blue-100 dark:bg-white/[0.03] rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors duration-200"
            onClick={() => handleEditClick(address)}
          >
            <Edit className="w-4 h-4 text-blue-600 dark:text-white" />
          </button>
        </motion.div>
      ))}

      <AddressModel
        className="max-w-xl scale-75 md:scale-100 p-3"
        isOpen={isModalOpen}
        onClose={handleClose}
      >
        {selectedAddress && editAddress && (
          <div className="p-4 space-y-4">
            <h2 className="text-lg font-medium mb border-b pb-2 border-gray-200 dark:border-white/[0.1] text-gray-800 dark:text-gray-100">
              Edit {selectedAddress.label}
            </h2>
            <div className="space-y-3">
              <InputField
                name="street"
                value={editAddress.street}
                onChange={handleInputChange}
                type="text"
                id="street"
                label="Street"
                placeholder="Street"
              />
              <InputField
                name="city"
                value={editAddress.city}
                onChange={handleInputChange}
                placeholder="City"
                type="text"
                id="city"
                label="City"
              />
              <InputField
                name="state"
                value={editAddress.state}
                onChange={handleInputChange}
                placeholder="State"
                type="text"
                id="state"
                label="State"
              />
              <InputField
                name="country"
                value={editAddress.country}
                onChange={handleInputChange}
                placeholder="Country"
                type="text"
                id="country"
                label="Country"
              />
              <InputField
                name="pincode"
                value={editAddress.pincode}
                onChange={handleInputChange}
                placeholder="Pincode"
                type="text"
                id="pincode"
                label="Pincode"
              />
            </div>

            <div className="flex flex-col md:flex-row justify-end gap-2 mt-4">
              <button
                type="button"
                className="px-6 py-3 rounded bg-white border-2 border-themeBlueLight text-black shadow-md hover:bg-themeBlueLight hover:text-white transition-all duration-300 dark:bg-white/[0.05] dark:border-none dark:text-white"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 rounded bg-themeBlue text-white hover:bg-white/[0.03] transition-all duration-300 dark:bg-themeBlueLight dark:text-black hover:dark:text-white"
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
