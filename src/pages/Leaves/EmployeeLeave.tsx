import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
// import Tabs from "../../components/ui/tabs/Tab";
import { useEffect, useState } from "react";
import Card from "../../components/ui/card/Card";
import LeaveStatusTable from "../../components/EmployeeLeave/LeaveStatusTable";
import LeaveSummary from "../../components/EmployeeLeave/LeaveSummary";
// import LeaveAvailable from "../../components/EmployeeLeave/LeaveAvailable";

const tabItems = [
  {
    id: "leave-status",
    label: "Leave Status",
    content: <LeaveStatusTable />,
  },
  // {
  //   id: "summary",
  //   label: "Summary",
  //   content: <LeaveSummary />,
  // },
  // {
  //   id: "leave-available",
  //   label: "Leave Available",
  //   content: <LeaveAvailable />,
  // },
];

function EmployeeLeave() {
  const [currentTab, setCurrentTab] = useState("");


  const activeTab = tabItems.find((tab) => tab.id === currentTab);

  // Temporary disabling tabs for now 
  useEffect(() => {
    setCurrentTab(tabItems[0].id)
  }, [])

  return (
    <>
      <PageMeta title="Employee Leave" description="" />
      <PageBreadcrumb pageTitle="Leave" />
      <div className="w-full">
        {/* <Tabs
          tabItems={['Leave Status', 
            //  'Summary',
            // // 'Leave Available'
          ]}
          currentTab={tabItems.find((tab) => tab.id === currentTab)?.label || ""}
          onTabChange={(label) => {
            const selected = tabItems.find((tab) => tab.label === label);
            if (selected) setCurrentTab(selected.id);
          }}
        /> */}

        <div className="">
          <LeaveSummary/>
        </div>



        <Card
          className={`dark:border-white/10  bg-white dark:bg-white/[0.03] w-full`}
        >
          <div className="space-y-6">{activeTab?.content}</div>
        </Card>
      </div>

    </>
  );
}

export default EmployeeLeave;
