import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import Tabs from "../../components/ui/tabs/Tab";
import { useState } from "react";
import Card from "../../components/ui/card/Card";
import LeaveStatusTable from "../../components/EmployeeLeave/LeaveStatusTable";
import LeaveSummary from "../../components/EmployeeLeave/LeaveSummary";
import LeaveAvailable from "../../components/EmployeeLeave/LeaveAvailable";

const tabItems = [
  {
    id: "leave-status",
    label: "Leave Status",
    content: <LeaveStatusTable />,
  },
  {
    id: "summary",
    label: "Summary",
    content: <LeaveSummary />,
  },
  {
    id: "leave-available",
    label: "Leave Available",
    content: <LeaveAvailable />,
  },
];

function EmployeeLeave() {
  const [currentTab, setCurrentTab] = useState("leave-status");


  const activeTab = tabItems.find((tab) => tab.id === currentTab);


  return (
    <>
      <PageMeta title="Employee Leave" description="" />
      <PageBreadcrumb pageTitle="Leave" />

      <Tabs
       tabItems={['Leave Status','Summary', 'Leave Available']}
        currentTab={tabItems.find((tab) => tab.id === currentTab)?.label || ""}
        onTabChange={(label) => {
          const selected = tabItems.find((tab) => tab.label === label);
          if (selected) setCurrentTab(selected.id);
        }}
      />

      <Card
        className={`dark:border-white/10  bg-white dark:bg-white/[0.03] ${
          activeTab?.label == tabItems[0].label ? "rounded-tl-none" : "rounded-tl-none sm:rounded-tl-3xl"
        } ${activeTab?.label == tabItems[tabItems.length - 1].label ? "rounded-tr-none sm:rounded-tr-3xl" : "rounded-tr-3xl" }  rounded-b-3xl rounded-tr-none sm:rounded-tr-3xl `}
      >
        <div className="space-y-6">{activeTab?.content}</div>
      </Card>
    </>
  );
}

export default EmployeeLeave;
