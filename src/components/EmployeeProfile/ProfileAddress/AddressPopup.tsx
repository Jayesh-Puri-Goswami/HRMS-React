import React, { useState } from "react";
import InputField from "../../ui/inputs/InputField";
import { Modal } from "../../ui/modal";
// Import your Modal component

interface AddressPopupProps {
  onClose: () => void;
  modalData: {
    type: string; // label and id
    address: string; // placeholder
  };
  isOpen: boolean;
}

const AddressPopup: React.FC<AddressPopupProps> = ({
  onClose,
  modalData,
  isOpen,
}) => {
  const [inputValue, setInputValue] = useState(modalData.address || "");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    console.log("Updated Address:", inputValue);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-lg p-6">
      {/* Popup Title */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Edit Address
      </h2>

      {/* Input Field */}
      <div className="space-y-4">
        <InputField
          onChange={handleInputChange}
          label={modalData.type}
          type="text"
          placeholder={modalData.address}
          id={modalData.type}
          name="name"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-8">                                                                                                                                                                                                                               
        <button
          type="button"
          className="w-40 h-12 text-lg border-2 border-blue-100 text-black bg-white rounded-lg"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-40 h-12 text-lg bg-blue-100 text-black hover:bg-blue-200 rounded-lg"
        >
          Save
        </button>
      </div>
    </Modal>
  );
};

export default AddressPopup;
