/* eslint-disable @typescript-eslint/no-explicit-any */

// import DataTable from "../../components/tables/Table/DataTable";
import EmployeeCard from "../../components/EmployeeProfile/ProfileCard";
import ProfileProgress from "../../components/EmployeeProfile/ProfileProgress";
import ProfileTab from "../../components/EmployeeProfile/ProfileTab";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import TableWrapper from "../../components/ui/card/TableWrapper";
import { useMemo, useState } from "react";
import Button from "../../components/ui/button/Button";
import {
  Briefcase,
  Calendar,
  Clock,
  FileEdit,
  Image,
  SquarePen,
} from "lucide-react";
import Badge from "../../components/ui/badge/Badge";
import PopupBox from "../../components/ui/popup/PopupBox";
import ProfileDetail from "../../components/EmployeeProfile/ProfileDesig";
import InputField from "../../components/ui/inputs/InputField";
import ProfileAddress from "../../components/EmployeeProfile/ProfileAddress/ProfileAddress";
import LeaveAllowance from "../../components/EmployeeProfile/LeaveAllowance";
import GuardianDetail from "../../components/EmployeeProfile/ProfileGraduation/GuardianDetail";
import ProfileDocuments from "../../components/EmployeeProfile/ProfileDocuments/ProfileDocuments";
import BankDetails from "../../components/EmployeeProfile/BankDetails/BankDetails";

// Types
interface AddressItem {
  icon: React.ReactNode;
  label: string;
  address: string;
  onEdit: () => void;
  EditIcon: React.ReactNode;
}
interface GuardianData {
  icon: React.ReactNode;
  label: string;
  data?: Array<{
    icon: React.ReactNode;
    phone: string;
    email: string;
    relation: string;
    address: string;
    status: string;
  }>;
}
interface LeaveAllowanceItem {
  [key: string]: string;
}

interface ModalData {
  address: string;
  type: "Permanent Address" | "Current Address";
}

const EmployeeProfile: React.FC = () => {
  const [currentTab, setCurrentTab] = useState("address");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalData>();

  // Remove unused selectedAddress state

  const openModal = (item?: { address: string; type: ModalData["type"] }) => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Static Data
  const sampleEmployee = {
    id: "1",
    name: "Employee Name",
    phone: "+91 99999 99999",
    email: "Lorem@gmail.com",
    department: "Game Development",
    designation: "Designer",
    workShift: "Regular",
    joiningDate: "1-Sep-2021",
    avatar: "",
  };
  const bankDetails = [
    {
      id: "1",
      imgae: "/pucli/hdh",
      bankName: "HDFC Bank",
      accountNumber: "****1234",
      accountType: "Savings",
      ifscCode: "HDFC0001234",
      status: "Active",
    },
    {
      id: "2",
      bankName: "ICICI Bank",
      accountNumber: "****5678",
      accountType: "Current",
      ifscCode: "ICIC0005678",
      status: "Active",
    },
    {
      id: "3",
      bankName: "SBI Bank",
      accountNumber: "****9012",
      accountType: "Savings",
      ifscCode: "SBIN0009012",
      status: "Inactive",
    },
    {
      id: "4",
      bankName: "Axis Bank",
      accountNumber: "****3456",
      accountType: "Current",
      ifscCode: "AXIS0003456",
      status: "Active",
    },
  ];
  const columns = [
    {
      key: "bankName" as keyof (typeof bankDetails)[0],
      label: "Bank Name",
      sortable: true,
    },
    {
      key: "accountNumber" as keyof (typeof bankDetails)[0],
      label: "Account Number",
      sortable: true,
    },
    {
      key: "accountType" as keyof (typeof bankDetails)[0],
      label: "Account Type",
      sortable: true,
    },
    {
      key: "ifscCode" as keyof (typeof bankDetails)[0],
      label: "IFSC Code",
      sortable: true,
    },
    {
      key: "status" as keyof (typeof bankDetails)[0],
      label: "Status",
      sortable: true,
      render: (row: (typeof bankDetails)[0]) => (
        <Badge color={row.status === "Active" ? "success" : "error"} size="sm">
          {row.status}
        </Badge>
      ),
    },
  ];
  const documentColumns = [
    { key: "name", label: "Document Name", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "uploadedDate", label: "Uploaded Date", sortable: true },
    { key: "status", label: "Status", sortable: true },
  ];
  const documentData = [
    {
      id: "1",
      name: "Aadhaar Card",
      type: "PDF",
      uploadedDate: "2024-01-12",
      status: "Verified",
    },
    {
      id: "2",
      name: "PAN Card",
      type: "PDF",
      uploadedDate: "2023-12-10",
      status: "Pending",
    },
  ];
  const salaryOverviewColumns = [
    { key: "month", label: "Month", sortable: true },
    { key: "basic", label: "Basic Salary", sortable: true },
    { key: "bonus", label: "Bonus", sortable: true },
    { key: "total", label: "Total", sortable: true },
  ];
  const salaryOverviewData = [
    {
      id: "1",
      month: "June 2025",
      basic: "₹30,000",
      bonus: "₹5,000",
      total: "₹35,000",
    },
    {
      id: "2",
      month: "May 2025",
      basic: "₹30,000",
      bonus: "₹3,000",
      total: "₹33,000",
    },
  ];
  const payslipColumns = [
    { key: "month", label: "Month", sortable: true },
    { key: "file", label: "File", sortable: false },
    {
      key: "download",
      label: "Download",
      sortable: false,
      render: () => <Button size="sm">Download</Button>,
    },
  ];
  const payslipData = [
    { id: "1", month: "June 2025", file: "payslip-june-2025.pdf" },
    { id: "2", month: "May 2025", file: "payslip-may-2025.pdf" },
  ];
  const leaveAllowance = [
    {
      id: 1,
      title: "Leave Allowance",
      leaveName: "Casual Leave",
      value: "8",
    },
    { id: 2, leaveName: "Personal Leave", value: "10" },
    { id: 3, leaveName: "Medical Leave", value: "15" },
  ];
  const leaveAvailable = [
    {
      id: 1,
      title: "Leave Available",
      leaveName: "Casual Leave",
      value: "4",
    },
    { id: 2, leaveName: "Personal Leave", value: "5" },
    { id: 3, leaveName: "Medical Leave", value: "12" },
  ];
  const guardianDetail = [
    {
      name: "Loren Name",
      subhead: "Lorem",
      icon: <Image />,
      data: [
        {
          icon: <Image />,
          phone: "+91 98765 43210",
          email: "guardian@example.com",
          relation: "Father",
          address: "XYZ Street, City",
          status: "Active",
        },
      ],
    },
  ];

  const address = [
    {
      icon: (
        <Image className="w-10 h-10 p-2 bg-themeBackgroundColor dark:bg-gray-800 dark:text-white text-gray-800 rounded-full" />
      ),
      label: "Permanent Address",
      address:
        "124/5, Singapore Township, Talawali Chanda Indore (Madhya Pradesh)",

      addressInput: "address",
      EditIcon: (
        <SquarePen className="w-10 h-10 p-2 bg-themeBackgroundColor dark:bg-gray-800 dark:text-white text-gray-800 rounded-full cursor-pointer" />
      ),
    },
    {
      icon: (
        <Image className="w-10 h-10 p-2 bg-themeBackgroundColor dark:bg-gray-800 dark:text-white text-gray-800 rounded-full" />
      ),
      label: "Current Address",
      address:
        "124/5, Singapore Township, Talawali Chanda Indore (Madhya Pradesh)",

      EditIcon: (
        <SquarePen className="w-10 h-10 p-2 bg-themeBackgroundColor dark:bg-gray-800 dark:text-white text-gray-800 rounded-full cursor-pointer" />
      ),
    },
  ];

  const actionButtons = [
    {
      label: "Address",
      id: "address",
      isButton: false,
      onClick: () => setCurrentTab("address"),
      onAdd: () => {
        openModal();
      },
    },
    {
      label: "Documents",
      id: "documents",
      isButton: true,
      onClick: () => setCurrentTab("documents"),
      onAdd: () => {
        openModal();
      },
    },
    {
      label: "Bank Details",
      id: "bank-details",
      isButton: true,
      onClick: () => setCurrentTab("bank-details"),
      onAdd: () => {
        openModal();
      },
    },
    {
      label: "Salary Overview",
      id: "salary-overview",
      isButton: true,
      onClick: () => setCurrentTab("salary-overview"),
      onAdd: () => {
        openModal();
      },
    },
    {
      label: "Payslip",
      id: "payslip",
      isButton: true,
      onClick: () => setCurrentTab("payslip"),
      onAdd: () => {
        openModal();
      },
    },
    // {
    //   label: "Leave Allowance",
    //   onClick: () => setCurrentTab("leave-allowance"),
    // },
    {
      label: "Guardian Detail",
      id: "guardian-detail",
      isButton: true,
      onClick: () => setCurrentTab("guardian-detail"),
      onAdd: () => {
        openModal();
      },
    },
  ];

  const tabItems = [
    {
      id: "address",
      label: "Address",
      content: <TableWrapper onClick={() => openModal()} />,
      onAdd: () => {
        openModal();
      },
    },
    {
      id: "documents",
      label: "Documents",
      content: <TableWrapper onClick={() => openModal()} />,
      onAdd: () => {
        openModal();
      },
    },
    {
      id: "bank-details",
      label: "Bank Details",
      content: <TableWrapper onClick={() => openModal()} />,
      onAdd: () => {
        openModal();
      },
    },
    {
      id: "salary-overview",
      label: "Salary Overview",
      content: <TableWrapper onClick={() => openModal()} />,
    },
    {
      id: "payslip",
      label: "Payslip",
      content: <TableWrapper onClick={() => openModal()} />,
    },
    {
      id: "leave-allowance",
      label: "Leave Allowance",
      content: <LeaveAllowance onClick={openModal}>d</LeaveAllowance>,
    },
    {
      id: "guardian-detail",
      label: "Guardian Detail",
      content: <TableWrapper onClick={() => openModal()} />,
    },
  ];
  // Get the content of the current tab
  const activeTab = tabItems.find((tab) => tab.id === currentTab);

  const tabData: {
    [key: string]: {
      columns: {
        key: string;
        label: string;
        sortable?: boolean;
        render?: (row: any) => React.ReactNode;
      }[];
      data: any[];
      getRowKey: (row: any) => any;
      onClick: (row: any) => void;
    };
  } = {
    documents: {
      columns: documentColumns,
      data: documentData,
      getRowKey: (row: any) => row.id,
      onClick: (row: any) => console.log("Clicked row:", row),
    },
    "bank-details": {
      columns: columns,
      data: bankDetails,
      getRowKey: (row: any) => row.id,
      onClick: (row: any) => console.log("Clicked row:", row),
    },
    payslip: {
      columns: payslipColumns,
      data: payslipData,
      getRowKey: (row: any) => row.id,
      onClick: (row: any) => console.log("Clicked row:", row),
    },
    "salary-overview": {
      columns: salaryOverviewColumns,
      data: salaryOverviewData,
      getRowKey: (row: any) => row.id,
      onClick: (row: any) => console.log("Clicked row:", row),
    },
  };
  const textOnlyTabs = ["address", "leave-allowance", "guardian-detail"];
  return (
    <>
      <PageMeta
        title="React.js Profile Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Profile Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Profile" />
      <div className=" ">
        <div className="flex items-center justify-center gap-3 w-full flex-col md:flex-row md:justify-center  ">
          <EmployeeCard
            employee={sampleEmployee}
            onDocumentsClick={() => {}}
            onBankDetailClick={() => {}}
            onSalaryOverviewClick={() => {}}
          >
            {/* avatar */}
            <div className="flex-shrink-0  px-4 flex justify-center md:justify-start">
              <div className="flex h-28 w-28 md:h-36 md:w-36 items-center justify-center rounded-full bg-[var(--color-themeBlueLight)] text-gray-800 dark:text-white">
                {sampleEmployee.avatar ? (
                  <img
                    src={sampleEmployee.avatar}
                    alt={sampleEmployee.name}
                    className="h-full w-full rounded-full object-cover"
                  />
                ) : (
                  <Image className="h-10 w-10 md:h-14 md:w-14" />
                )}
              </div>
            </div>
            {/* menu  */}
            <div className="flex-1  px-4 space-y-2 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-lg md:text-2xl font-semibold text-gray-500 dark:text-gray-300">
                {sampleEmployee.name}
              </h2>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                <div>{sampleEmployee.phone}</div>
                <div>{sampleEmployee.email}</div>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 dark:bg-gray-800">
                  <Image className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Department
                  </div>
                  <div className="text-base font-medium text-gray-900 dark:text-white">
                    {sampleEmployee.department}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full  px-4  flex flex-col md:items-start items-center gap-4">
              <div className=" space-y-4">
                <ProfileDetail
                  icon={Briefcase}
                  label="Designation"
                  value={sampleEmployee.designation}
                />
                <ProfileDetail
                  icon={Clock}
                  label="Work Shift"
                  value={sampleEmployee.workShift}
                />
                <ProfileDetail
                  icon={Calendar}
                  label="Joining Date"
                  value={sampleEmployee.joiningDate}
                />
              </div>
            </div>
          </EmployeeCard>

          <ProfileProgress />
        </div>

        <ProfileTab actionButtons={actionButtons} currentTab={currentTab} />


        <div className="space-y-6">
          {activeTab &&
            (textOnlyTabs.includes(activeTab.id) ? (
              <TableWrapper
                id={tabItems.find((tab) => tab.id === activeTab.id)?.id}
                title={activeTab.label}
                onClick={() => setIsModalOpen(!isModalOpen)}
                actionButton={
                  <Button onClick={() => openModal()} size="sm">
                    Add
                  </Button>
                }
                isButton={
                  actionButtons.find(
                    (button) => button.label === activeTab.label
                  )?.isButton || false
                }
                columns={undefined}
                data={undefined}
                loading={false}
                getRowKey={undefined}
                onRowClick={undefined}
                isLeaveAllowance={activeTab.id === "leave-allowance"}
              >
                {activeTab.id === "address" && (
                  <ProfileAddress onClick={openModal} address={address} />
                )}
                {activeTab.id === "documents" && <ProfileDocuments />}
                {activeTab.id === "leave-allowance" && (
                  <LeaveAllowance onClick={openModal}>
                    {leaveAllowance.map((item) => (
                      <div
                        className="flex items-center justify-between   gap-2 shrink-0"
                        key={item.id}
                      >
                        <div className="flex items-center gap-2">
                          <h1>{item.leaveName}:- </h1>
                          <p>{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </LeaveAllowance>
                )}
                {activeTab.id === "guardian-detail" && (
                  <GuardianDetail guardianDetail={guardianDetail} />
                )}
              </TableWrapper>
            ) : (
              <TableWrapper
                id={tabItems.find((tab) => tab.id === activeTab.id)?.id}
                title={activeTab.label}
                onClick={() => setIsModalOpen(!isModalOpen)}
                actionButton={
                  <Button onClick={() => console.log("clicked")} size="sm">
                    Add
                  </Button>
                }
                columns={tabData[activeTab.id]?.columns}
                data={tabData[activeTab.id]?.data}
                loading={false}
                getRowKey={tabData[activeTab.id]?.getRowKey}
                onRowClick={tabData[activeTab.id]?.onClick}
                isLeaveAllowance={false}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default EmployeeProfile;
