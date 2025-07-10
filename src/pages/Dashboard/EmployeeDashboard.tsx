import PageMeta from "../../components/common/PageMeta";
import { motion } from "framer-motion";
import {
  employeeData,
  timeLogData,
  leaveData,
  meetings,
  announcements,
} from "../../constant/EmployeeDahboard";
import { useEffect, useState } from "react";
import SubLoader from "../../components/ui/loader/SubLoader";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import TotalRatingBadge from "../../components/employeeDahboard/TotalRatingBadge";
import ProfileCardSkeleton from "../../components/employeeDahboard/ProfileCardSkeleton";
import ProfileCard from "../../components/employeeDahboard/ProfileCard";
import TimeLogCardSkeleton from "../../components/employeeDahboard/TimeLogCardSkeleton";
import TimeLogCard from "../../components/employeeDahboard/TimeLogCard";
import LeaveCardsSkeleton from "../../components/employeeDahboard/LeaveCardsSkeleton";
import LeaveCards from "../../components/employeeDahboard/LeaveCards";
import ChartCard from "../../components/employeeDahboard/ChartCard";
import AnnouncementsCard from "../../components/employeeDahboard/AnnouncementsCard";

export default function EmployeeDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Simulate data loading
      setTimeout(() => {
        setIsDataLoading(false);
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SubLoader />;
  }

  return (
    <>
      <PageMeta title="HRMS | Carnia Softlabs" description="Dashboard" />
      <PageBreadcrumb pageTitle="Dashboard" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-3">
            {/* Left Side: Profile + Leave Cards */}
            <div className="lg:col-span-2 flex flex-col h-full space-y-6">
              {isDataLoading ? (
                <ProfileCardSkeleton />
              ) : (
                <ProfileCard
                  name={employeeData.name}
                  shiftTime={employeeData.shiftTime}
                  punchInTime={employeeData.punchInTime}
                  punchOutTime={employeeData.punchOutTime}
                  breakTime={employeeData.breakTime}
                  profileImage={employeeData.profileImage}
                />
              )}

              {/* Leave Cards directly below Profile */}
              {isDataLoading ? (
                <LeaveCardsSkeleton />
              ) : (
                <LeaveCards data={leaveData} />
              )}
            </div>

            {/* Right Side: Time Log */}
            <div>
              {isDataLoading ? (
                <TimeLogCardSkeleton />
              ) : (
                <TimeLogCard data={timeLogData} />
              )}
            </div>
          </div>

          {/* Meeting Schedule and Announcements */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
            
            <ChartCard/>

            <AnnouncementsCard announcements={announcements} />
            {/* <AnnouncementsCard announcements={announcements} /> */}

          </div>
        </div>
      </motion.div>
    </>
  );
}
