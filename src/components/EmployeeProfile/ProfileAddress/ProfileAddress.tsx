import React, { useState } from "react";
import { motion } from "framer-motion";
import { Image, SquarePen } from "lucide-react";
import PopupBox from "../../ui/popup/PopupBox";
import AddressPopup from "./AddressPopup";

interface ProfileAddressProps {
  onClick?: () => void;
  address: any;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // delay between each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const ProfileAddress: React.FC<ProfileAddressProps> = ({
  onClick,
  address,
}) => {
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const [modalData, setModalData] = useState<{ type: string; address: string }>({
    type: '',
    address: '',
  });

  const handleEditClick = (idx: number, item: any) => {
    setPopupIndex(idx);
    setModalData({ type: item.label, address: item.address });
  };

  const handleClosePopup = () => {
    setPopupIndex(null);
    setModalData({ type: '', address: '' });
  };
  return (
    <>
    <motion.div
      className="w-full mt-3 px-4 py-5 dark:bg-[var(--color-themeBackgroundColorDark)] rounded-lg overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col gap-6">
        {address.map((item: any, idx: number) => (
          <motion.div
            key={item.label}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-3 sm:gap-2 border-b border-[var(--color-themeBorderColor)] dark:border-[var(--color-themeBorderColorDark)] pb-3"
          >
            {/* Icon + Label + Address */}
            <div className="shrink-0 flex items-center gap-2">
              <span>{item.icon}</span>
              <h1 className="text-lg sm:text-base font-semibold text-gray-500 dark:text-gray-100">
                {item.label}
              </h1>
            </div>
            <div className="flex items-start gap-3 flex-wrap">
              <div className="flex-1">
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 break-words">
                  {item.address}
                </p>
              </div>
            </div>

            {/* Edit Icon */}
            <span
              className="text-[var(--color-themeBlue)] dark:text-[var(--color-themeBlueLight)] cursor-pointer flex justify-end sm:justify-start"
              onClick={() => handleEditClick(idx, item)}
            >
              {item.EditIcon}
            </span>
            {/* Popup for this address */}
            {popupIndex === idx && (
              <AddressPopup
                onClose={handleClosePopup}
                modalData={modalData}
                isOpen={popupIndex === idx}
              />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Only one AddressPopup is open at a time, handled above */}
  </>
  );
};

export default ProfileAddress;
