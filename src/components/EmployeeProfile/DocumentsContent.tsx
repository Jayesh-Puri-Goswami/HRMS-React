import React, { useState } from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import { EMPLOYEE_PROFILE_DATA } from "../../constant/EmployeeProfile";
import { motion } from "framer-motion";
import { File, FileInput } from "lucide-react";
import DataTable from "../ui/datatable/DataTable";
import { Address, Document } from "../../types/EmployeeProfile";
import { AddressModel } from "./EmployeModels/Address.Model";
import InputField from "../ui/inputs/InputField";
import ImageUploader from "../form/input/ImageUploader";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(
    null
  );
  const [editDocument, setEditDocument] = useState<Document | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedDocument(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editDocument) return;
    setEditDocument({
      ...editDocument,
      [e.target.name]: e.target.value,
    });
  };
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
            pageTitle="Documents"
            endSection={<UploadDocumentButton onClick={() => setIsModalOpen(true)} />}
          />
        </div>

        <DataTable
          data={EMPLOYEE_PROFILE_DATA.documents}
          columns={columns}
          showSearch={false}
          showActionButton={false}
        />
      </motion.div>

      {/* Modal */}
      <AddressModel
        className="max-w-xl  scale-75 md:scale-100  p-3"
        isOpen={isModalOpen}
        onClose={handleClose}
      >
        {isModalOpen  && (
          <div className="p-4 space-y-4  ">
            <h2 className="text-lg font-medium mb border-b pb-2  dark:border-white/[0.09] ">
              Add Document 
            </h2>
            <div>
              <InputField
                name="name"
                value={""}
                onChange={handleInputChange}
                type="text"
                id="name"
                label="Name"
                placeholder="Enter Name"
              />
              <ImageUploader onImageChange={setSelectedImage} selectedImage={selectedImage} />
          
             
            </div>

            <p className="text-sm text-gray-500/50">
            Document size allowed : 5MB. Document type allwed : Png, Jpg, Pdf, Docx please check
            file format before upload.
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

const UploadDocumentButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className="text-themeBlue font-medium px-4 py-2 flex items-center justify-center text-sm bg-themeBlueLight rounded-2xl ">
      Add new
    </button>
  );
};
export default DocumentsContent;
