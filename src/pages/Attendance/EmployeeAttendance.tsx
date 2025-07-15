import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import { useState } from "react";
import Card from "../../components/ui/card/Card";
import AttendanceContent from "../../components/EmployeeAttendance/AttendanceContent";
import AttendanceRequestContent from "../../components/EmployeeAttendance/AttendanceRequestContent";
import Tabs from "../../components/ui/tabs/Tab";
import PageMeta from "../../components/common/PageMeta";
import AttendanceDetail from "../../components/EmployeeAttendance/AttendanceDetail";
import AttendanceSummary from "../../components/EmployeeAttendance/AttendanceSummary";

const tabItems = [
  {
    id: "monthly-log",
    label: "Monthly Log",
    content: <AttendanceContent />,
  },
  {
    id: "attendance-request",
    label: "Attendance Request",
    content: <AttendanceRequestContent />,
  },
  {
    id: "attendance-details",
    label: "Attendance Details",
    content: <AttendanceDetail />,
  },
  {
    id: "summary",
    label: "Summary",
    content: <AttendanceSummary />,
  },
];

export default function EmployeeAttendance() {
  const [currentTab, setCurrentTab] = useState("monthly-log");

  // Get the content of the current tab
  const activeTab = tabItems.find((tab) => tab.id === currentTab);

  return (
    <>
      <PageMeta title="Employee Attendance" description="" />
      <PageBreadcrumb pageTitle="Attendance" />
      <Tabs
        tabItems={[
          "Monthly Log",
          // "Attendance Request",
          "Attendance Details",
          "Summary",
        ]}
        currentTab={tabItems.find((tab) => tab.id === currentTab)?.label || ""}
        onTabChange={(label) => {
          const selected = tabItems.find((tab) => tab.label === label);
          if (selected) setCurrentTab(selected.id);
        }}
      />

      <Card
        className={`dark:border-white/10  bg-white dark:bg-white/[0.03] ${
          activeTab?.label == tabItems[0].label ? "rounded-tl-none " : "rounded-tl-none sm:rounded-tl-3xl"
        } ${
          activeTab?.label == tabItems[tabItems?.length - 1].label ? "rounded-tr-none sm:rounded-tr-3xl" : "rounded-tr-3xl"
        } rounded-b-3xl rounded-tr-none sm:rounded-tr-3xl `}
      >
        <div className="space-y-6">{activeTab?.content}</div>
      </Card>
    </>
  );
}
