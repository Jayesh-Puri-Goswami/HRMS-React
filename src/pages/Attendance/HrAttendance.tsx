import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import { useCallback, useEffect, useState } from "react";
import Card from "../../components/ui/card/Card";
import PageMeta from "../../components/common/PageMeta";
import ProfileTab from "../../components/EmployeeProfile/ProfileTab";
import {
  HR_ATTENDANCE_TABS,
  hrAttendanceMainData,
} from "../../constant/HrAttendance";
import DailyLog from "../../components/HrAttendance/DailyLog";
import HrAttendanceSummary from "../../components/HrAttendance/HrAttendanceSummary";
import AttendanceProgress from "../../components/HrAttendance/AttendanceProgress";
import { CardSkeleton, HrDailyLogSkeleton } from "../../components/HrAttendance/skeletons/CardSkeleton";

export default function HrAttendance() {
  const [activeTab, setActiveTab] = useState<string>("dailylog");
  const [loading, setLoading] = useState(false);
  const [loadingCard, setLoadingCard] = useState(false)

  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId);
    setLoading(true);
    setTimeout(() => setLoading(false), 800); // Simulated loading delay
  }, []);
  // setLoading(true);
  // Skeleton
  const renderTabContent = (tabId: string) => {
    if (loading) {
      switch (tabId) {
        case "dailylog":
          return <HrDailyLogSkeleton />;
          case "summary":
            return <HrDailyLogSkeleton />;
        default:
          return <HrDailyLogSkeleton />;
      }

    }
    
    switch (tabId) {
      case "dailylog":
        return <DailyLog />;
      case "summary":
        return <HrAttendanceSummary loading={loading} />;

      default:
        return (
          <div className="text-center text-gray-500 py-8">
            Content not found
          </div>
        );
    }



  };

  return (
    <>
      <PageMeta title="Employee Attendance" description="" />
      <PageBreadcrumb pageTitle="Attendance" className="text-gray-500" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {hrAttendanceMainData.map((item) =>
            loadingCard ? (
              <CardSkeleton key={item.id} />
            ) : (
              <Card className="bg-white  dark:bg-white/[0.09] dark:border-gray-800 dark:text-white">
                <h2 className="text-gray-500 font-semibold dark:text-white">
                  {item.value}
                </h2>
                <h3 className="text-gray-400 text-sm maxw">{item.label}</h3>
              </Card>
            )
          )}
        </div>

        <AttendanceProgress />
      </div>

      <div className=""></div>

      {/* Tabs */}
      <ProfileTab
        actionButtons={HR_ATTENDANCE_TABS.map((tab) => ({
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
