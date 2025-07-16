import React, { useState } from "react";
import { motion } from "framer-motion";
import { Image, SquarePen } from "lucide-react";
import PopupBox from "../../ui/popup/PopupBox";
import BankDetailsPopup from "../BankDetailsPopup/BankDetailsPopup";
import TableHeader from "../../ui/card/TableHeader";

interface BankDetailsProps {
  bankDetails: any[];
  title: string;
  actionButton: React.ReactNode;
  isButton: boolean;
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

const BankDetails: React.FC<BankDetailsProps> = ({
  bankDetails,
  title,
  actionButton,
  isButton,
}) => {
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const [modalData, setModalData] = useState<any>({});

  const handleEditClick = (idx: number, item: any) => {
    setPopupIndex(idx);
    setModalData(item);
  };

  const handleClosePopup = () => {
    setPopupIndex(null);
    setModalData({});
  };

  return (
    <>
      <motion.div
        className="w-full mt-3 px-4 py-5 dark:bg-[var(--color-themeBackgroundColorDark)] rounded-lg overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <TableHeader
          title={title || "No Title"}
          actionButton={actionButton}
          showBorder={false}
          showShadow={false}
          padding="none"
          animate={false}
          isButton={isButton}onClick={()=>console.log("Clicked")}
        />
        <div className="flex flex-col gap-6">
          {bankDetails.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-3 sm:gap-2 border-b border-[var(--color-themeBorderColor)] dark:border-[var(--color-themeBorderColorDark)] pb-3"
            >
              {/* Icon + Bank Name + Account Number */}
              <div className="shrink-0 flex items-center gap-2">
                <span>
                  <Image className="w-8 h-8" />
                </span>
                <h1 className="text-lg sm:text-base font-semibold text-gray-500 dark:text-gray-100">
                  {item.bankName}
                </h1>
              </div>
              <div className="flex items-start gap-3 flex-wrap">
                <div className="flex-1">
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 break-words">
                    Account: {item.accountNumber}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 break-words">
                    Type: {item.accountType}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 break-words">
                    IFSC: {item.ifscCode}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 break-words">
                    Status: {item.status}
                  </p>
                </div>
              </div>

              {/* Edit Icon */}
              <span
                className="text-[var(--color-themeBlue)] dark:text-[var(--color-themeBlueLight)] cursor-pointer flex justify-end sm:justify-start"
                onClick={() => handleEditClick(idx, item)}
              >
                <SquarePen className="w-8 h-8" />
              </span>
              {/* Popup for this bank detail */}
              {popupIndex === idx && (
                <PopupBox
                  isOpen={popupIndex === idx}
                  onClose={handleClosePopup}
                  className="max-w-lg p-6"
                  title="Edit Bank Detail"
                >
                  <BankDetailsPopup
                    onClose={handleClosePopup}
                    modalData={modalData}
                    isOpen={popupIndex === idx}
                  />
                </PopupBox>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default BankDetails;
