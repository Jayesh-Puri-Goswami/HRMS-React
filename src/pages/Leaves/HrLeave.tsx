import React, { useCallback, useState } from "react";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ProfileTab from "../../components/EmployeeProfile/ProfileTab";
import { HR_LEAVE_TABS } from "../../constant/HrLeave.data";
import HrLeaveStatus from "../../components/HrLeave/HrLeaveStatus";
import HrLeaveRequest from "../../components/HrLeave/HrLeaveRequest";
import HrLeaveSummary from "../../components/HrLeave/HrLeaveSummary";
import Card from "../../components/ui/card/Card";
import {
  HrLeaveCardSkeleton,
  HrLeaveStatusTableSkeleton,
} from "../../components/HrLeave/skeletons/HrLeaveStatusSkeleton";

const HrLeave = () => {
  const [activeTab, setActiveTab] = useState<string>("leave-status");
  const [loading, setLoading] = useState(false);
  const [loadingCard, setLoadingCard] = useState(false);

  // Find the label for the current tab
  const currentTabLabel =
    HR_LEAVE_TABS.find((tab) => tab.id === activeTab)?.label || "Leave Status";

  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId);
    setLoading(true);
    setTimeout(() => setLoading(false), 800); // Simulated loading delay
  }, []);

  const renderTabContent = (tabId: string) => {
    // if (loading) {
    //   switch (tabId) {
    //     case "leave-status":
    //       return <HrLeaveStatusTableSkeleton />;
    //       case "leave-request":
    //         return <HrLeaveStatusTableSkeleton />;
    //       case "leave-summary":
    //         return <HrLeaveStatusTableSkeleton />;
    //     // default:
    //     //   return <HrLeaveCardSkeleton count={4} />;
    //   }

    // }

    switch (tabId) {
      case "leave-status":
        return <HrLeaveStatus />;
      case "leave-request":
        return <HrLeaveRequest />;
      case "leave-summary":
        return <HrLeaveSummary />;

      default:
        return (
          <div className="text-center text-gray-500 py-8">
            Content not found
          </div>
        );
    }
  };
  return (
    <div>
      <PageMeta title="Hr Employee Leave" description="" />
      <PageBreadcrumb pageTitle={currentTabLabel} className="text-gray-500" />

      {/* Tabs */}

      <ProfileTab
        actionButtons={HR_LEAVE_TABS.map((tab) => ({
          label: tab.label,
          id: tab.id,
          onClick: () => handleTabChange(tab.id),
        }))}
        currentTab={activeTab}
      />

      {/* Tab Content */}
      <Card className="mt-6 bg-white dark:bg-white/[0.03] text-gray-600 dark:text-white">
        {renderTabContent(activeTab)}
      </Card>
    </div>
  );
};

export default HrLeave;
