/* eslint-disable @typescript-eslint/no-explicit-any */

// import DataTable from "../../components/tables/Table/DataTable";
import EmployeeCard from "../../../components/profile/ProfileCard";
import ProfileProgress from "../../../components/profile/ProfileProgress";
import ProfileTab from "../../../components/profile/ProfileTab";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import PageMeta from "../../../components/common/PageMeta";
import TableWrapper from "../../../components/ui/card/TableWrapper";
import { useMemo, useState } from "react";
import Button from "../../../components/ui/button/Button";
import { FileEdit, Image, SquarePen } from "lucide-react";
import Badge from "../../../components/ui/badge/Badge";

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
};
const sampleTableData = [
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
    key: "bankName" as keyof (typeof sampleTableData)[0],
    label: "Bank Name",
    sortable: true,
  },
  {
    key: "accountNumber" as keyof (typeof sampleTableData)[0],
    label: "Account Number",
    sortable: true,
  },
  {
    key: "accountType" as keyof (typeof sampleTableData)[0],
    label: "Account Type",
    sortable: true,
  },
  {
    key: "ifscCode" as keyof (typeof sampleTableData)[0],
    label: "IFSC Code",
    sortable: true,
  },
  {
    key: "status" as keyof (typeof sampleTableData)[0],
    label: "Status",
    sortable: true,
    render: (row: (typeof sampleTableData)[0]) => (
      <Badge color={row.status === "Active" ? "success" : "error"} size="sm">
        {row.status}
      </Badge>
    ),
  },
];
const address = {
  address: [
    {
      icon: (
        <Image className="w-10 h-10 p-2 bg-themeBackgroundColor dark:bg-gray-800 dark:text-white text-gray-800 rounded-full" />
      ),
      label: "Permanent Address",
      address:
        "124/5, Singapore Township, Talawali Chanda Indore (Madhya Pradesh)",
      onEdit: () => alert("Edit address"),
      EditIcon: (
        <SquarePen className="w-10 h-10 p-2 bg-themeBackgroundColor dark:bg-gray-800 dark:text-white text-gray-800 rounded-full cursor-pointer" />
      ),
    },
  ] as AddressItem[],
};
const leaveAllowance = {
  leaveAllowance: [
    { casualLeave: "Casual Leave", value: "8" },
    { sickLeave: "Sick Leave", value: "10" },
    { annualLeave: "Annual Leave", value: "15" },
    { maternityLeave: "Maternity Leave", value: "12" },
    { paternityLeave: "Paternity Leave", value: "10" },
    { otherLeave: "Other Leave", value: "Other Leave" },
  ] as LeaveAllowanceItem[],
};
const guardianDetail = {
  guardianDetail: [
    {
      icon: (
        <Image className="w-10 h-10 p-2 bg-themeBackgroundColor dark:bg-gray-800 dark:text-white text-gray-800 rounded-full" />
      ),
      label: "Guardian Detail",
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
  ] as GuardianData[],
};
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

interface ProfileTabContentProps {
  selectedTab: string;
}
const ProfileTabContent: React.FC<ProfileTabContentProps> = ({
  selectedTab,
}) => {
  // Memoize all derived values
  const { tableTitle, columnsToShow, dataToShow, contentToRender } =
    useMemo(() => {
      let tableTitle = "";
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let columnsToShow: any = undefined;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let dataToShow: any = undefined;
      let contentToRender: React.ReactNode = null;

      if (selectedTab === "Bank Details") {
        tableTitle = "Bank Details";
        columnsToShow = columns;
        dataToShow = sampleTableData;
      }
      if (selectedTab === "Address") {
        tableTitle = "Address";
        contentToRender = address.address.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between gap-4 flex-wrap"
          >
            <div className="flex items-center gap-2">
              {item.icon}
              <span className="text-gray-500">{item.label}</span>
            </div>
            <p className="text-gray-500">{item.address}</p>
            <div onClick={item.onEdit} className="cursor-pointer">
              {item.EditIcon}
            </div>
          </div>
        ));
      }
      if (selectedTab === "Leave Allowance") {
        tableTitle = "Leave Allowance";
        contentToRender = leaveAllowance.leaveAllowance.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <span className="text-gray-500 font-semibold">
              {Object.values(item)[0]}
            </span>
            <span className="text-gray-800 font-bold">
              {Object.values(item)[1]}
            </span>
          </div>
        ));
      }
      if (selectedTab === "Guardian Detail") {
        tableTitle = "Guardian Detail";
        contentToRender = guardianDetail.guardianDetail.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center flex-row  gap-40 px-20 flex-wrap"
          >
            <div className="flex items-center  gap-2">
              {item.data?.[0]?.icon}
              <span className="text-gray-500">{item.label}</span>
            </div>
            <p className="text-gray-500">
              {item.data?.[0]?.phone && (
                <span className="block">Phone: {item.data[0].phone}</span>
              )}
              {item.data?.[0]?.email && (
                <span className="block">Email: {item.data[0].email}</span>
              )}
              {item.data?.[0]?.relation && (
                <span className="block">Relation: {item.data[0].relation}</span>
              )}
              {item.data?.[0]?.address && (
                <span className="block">Address: {item.data[0].address}</span>
              )}
              {item.data?.[0]?.status && (
                <span className="block">Status: {item.data[0].status}</span>
              )}
            </p>
          </div>
        ));
      }

      if (selectedTab === "Documents") {
        tableTitle = "Uploaded Documents";
        columnsToShow = documentColumns;
        dataToShow = documentData;
      }
      if (selectedTab === "Salary Overview") {
        tableTitle = "Salary Overview";
        columnsToShow = salaryOverviewColumns;
        dataToShow = salaryOverviewData;
      }
      if (selectedTab === "Payslip") {
        tableTitle = "Payslip History";
        columnsToShow = payslipColumns;
        dataToShow = payslipData;
      }
      return { tableTitle, columnsToShow, dataToShow, contentToRender };
    }, [selectedTab]);

  // Fallback getRowKey for non-table content
  const getRowKey = (row: any) =>
    row && row.id ? row.id : Math.random().toString();

  return (
    <TableWrapper
      title={tableTitle}
      columns={columnsToShow}
      data={dataToShow}
      getRowKey={(row: any) =>
        row && row.id ? row.id : Math.random().toString()
      }
      loading={false}
      onRowClick={(row) => console.log("Row clicked:", row)}
      actionButton={
        selectedTab === "Bank Details" ? (
          <div className="flex items-center gap-2">
            <span>Current Salary : XXXXX</span>
            <Button
              variant="primary"
              size="sm"
              onClick={() => console.log("Add Bank Details clicked")}
            >
              <FileEdit size={15} />
            </Button>
          </div>
        ) : undefined
      }
    >
      {contentToRender}
    </TableWrapper>
  );
};

const EmployeeProfile = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Address");
  const actionButtons = [
    { label: "Address", onClick: () => setSelectedTab("Address") },
    { label: "Documents", onClick: () => setSelectedTab("Documents") },
    { label: "Bank Details", onClick: () => setSelectedTab("Bank Details") },
    {
      label: "Salary Overview",
      onClick: () => setSelectedTab("Salary Overview"),
    },
    { label: "Payslip", onClick: () => setSelectedTab("Payslip") },
    {
      label: "Leave Allowance",
      onClick: () => setSelectedTab("Leave Allowance"),
    },
    {
      label: "Guardian Detail",
      onClick: () => setSelectedTab("Guardian Detail"),
    },
  ];

  return (
    <>
      <PageMeta
        title="React.js Profile Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Profile Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Profile" />
      <div className=" ">
        <div className="flex items-start gap-3 w-full flex-col md:flex-row justify-center md:justify-start">
          <EmployeeCard
            employee={sampleEmployee}
            onDocumentsClick={() => {}}
            onBankDetailClick={() => {}}
            onSalaryOverviewClick={() => {}}
          />
          <ProfileProgress
            totalRating={92}
            items={[
              { label: "PERFORMANCE", value: 25, color: "#10B981" },
              { label: "QUALITY", value: 20, color: "#3B82F6" },
              { label: "TEAMWORK", value: 18, color: "#8B5CF6" },
              { label: "INNOVATION", value: 22, color: "#F59E0B" },
            ]}
          />
        </div>

        <ProfileTab actionButtons={actionButtons} />
        <ProfileTabContent selectedTab={selectedTab} />

        {/* <TableWrapper  >
          
        </TableWrapper> */}

        {/* <DataTable columns={columns}  /> */}
      </div>
    </>
  );
};

export default EmployeeProfile;
