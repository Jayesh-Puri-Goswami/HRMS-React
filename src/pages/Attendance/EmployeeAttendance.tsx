import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import { useCallback, useState } from "react";
import Card from "../../components/ui/card/Card";
import AttendanceContent from "../../components/EmployeeAttendance/AttendanceContent";
import AttendanceRequestContent from "../../components/EmployeeAttendance/AttendanceRequestContent";
import PageMeta from "../../components/common/PageMeta";
import AttendanceDetail from "../../components/EmployeeAttendance/AttendanceDetail";
import AttendanceSummary from "../../components/EmployeeAttendance/AttendanceSummary";
import ProfileTab from "../../components/EmployeeProfile/ProfileTab";

const tabItems = [
  {
    id: "monthly-log",
    label: "Monthly Log",
  },
  // {
  //   id: "attendance-request",
  //   label: "Attendance Request",
  //   content: <AttendanceRequestContent />,
  // },
  {
    id: "attendance-details",
    label: "Attendance Details",
  },
  {
    id: "summary",
    label: "Summary",
  },
];

export default function EmployeeAttendance() {
  const [activeTab, setActiveTab] = useState("monthly-log");

  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId);
  }, []);

  const renderTabContent = (tabId: string) => {
    switch (tabId) {
      case "monthly-log":
        return <AttendanceContent />;
      // case "attendance-request":
      //   return <AttendanceRequestContent />;
      case "attendance-details":
        return <AttendanceDetail />;
      case "summary":
        return <AttendanceSummary />;
      default:
        return (
          <div className="py-8 text-center text-gray-500">
            Content not found
          </div>
        );
    }
  };

  return (
    <>
      <PageMeta title="Employee Attendance" description="" />
      <PageBreadcrumb pageTitle="Attendance" />
      <ProfileTab
        actionButtons={tabItems.map((tab) => ({
          label: tab.label,
          id: tab.id,
          onClick: () => handleTabChange(tab.id),
        }))}
        currentTab={activeTab}
      />

      <Card className="mt-6 bg-white dark:bg-white/[0.03] text-gray-600 dark:text-white">
        {renderTabContent(activeTab)}
      </Card>
    </>
  );
}
