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
    id: "daily-log",
    label: "Daily Log",
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
  const [currentTab, setCurrentTab] = useState("daily-log");

  // Get the content of the current tab
  const activeTab = tabItems.find((tab) => tab.id === currentTab);

  return (
    <>
      <PageMeta title="Employee Attendance" description="" />
      <PageBreadcrumb pageTitle="Attendance" />
      <Tabs
        tabItems={[
          "Daily Log",
          "Attendance Request",
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
          activeTab?.label == "Daily Log" ? "rounded-tl-none" : "rounded-tl-3xl"
        } rounded-b-3xl rounded-tr-3xl `}
      >
        <div className="space-y-6">{activeTab?.content}</div>
      </Card>
    </>
  );
}
