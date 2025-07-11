
// import DataTable from "../../components/tables/Table/DataTable";
import EmployeeCard from "../../../components/profile/ProfileCard";
import ProfileProgress from "../../../components/profile/ProfileProgress";
import ProfileTab from "../../../components/profile/ProfileTab";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import PageMeta from "../../../components/common/PageMeta";
import TableWrapper from "../../../components/ui/card/TableWrapper";


const sampleEmployee = {
  id: "1",
  name: "Jayesh Puri Goswami",
  phone: "+91 99999 99999",
  email: "goswamijayesh@carinasoftlabs.com",
  department: "Web Development",
  designation: "Designer",
  workShift: "Regular",
  joiningDate: "1-Sep-2021",
  avatar : '/public/images/user/user-38.jpg'
};

const EmployeeProfile = () => {
  const handleAddressClick = () => {
    console.log("Address clicked");
  };

  const handleDocumentsClick = () => {
    console.log("Documents clicked");
  };

  const handleBankDetailClick = () => {
    console.log("Bank Detail clicked");
  };

  const handleSalaryOverviewClick = () => {
    console.log("Salary Overview clicked");
  };

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
            onDocumentsClick={handleDocumentsClick}
            onBankDetailClick={handleBankDetailClick}
            onSalaryOverviewClick={handleSalaryOverviewClick}
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

        <ProfileTab
          actionButtons={[
            { label: "Address", onClick: handleAddressClick },
            { label: "Address", onClick: handleAddressClick },
            { label: "Address", onClick: handleAddressClick },
            { label: "Address", onClick: handleAddressClick },
            { label: "Address", onClick: handleAddressClick },
          ]}
        />

        {/* <TableWrapper  >
          
        </TableWrapper> */}

        {/* <DataTable columns={columns}  /> */}
      </div>
    </>
  );
};

export default EmployeeProfile;
