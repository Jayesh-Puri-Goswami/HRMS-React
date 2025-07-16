import React, { useState } from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import { EMPLOYEE_PROFILE_DATA } from "../../constant/EmployeeProfile";
import { motion } from "framer-motion";
import { File } from "lucide-react";
import DataTable from "../ui/datatable/DataTable";
import { Document } from "../../types/EmployeeProfile";

const columns = [
  { key: "id" as keyof Document, header: "Sr.No" },
  { key: "name" as keyof Document, header: "Name" },
  { key: "type" as keyof Document, header: "Attachment" },
  { key: "uploadDate" as keyof Document, header: "Date" },
  { key: "addedBy" as keyof Document, header: "Added By" },
  {
    key: "action" as keyof Document,
    header: "Action",
    render: (row: Document) => <button onClick={row.action}>View</button>,
  },
];

const DocumentsContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
     <div className=" border-b dark:border-white/[0.09]">
        <PageBreadcrumb pageTitle="Documents" />
      </div>

      <DataTable
        data={EMPLOYEE_PROFILE_DATA.documents}
        columns={columns}
        showSearch={false}
        showActionButton={false}
      />
    </motion.div>
  );
};

export default DocumentsContent;
