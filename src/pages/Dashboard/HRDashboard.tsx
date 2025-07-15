import PageMeta from "../../components/common/PageMeta";
import { motion } from "framer-motion";
import {
  HRData,
  timeLogData,
  leaveData,
  // meetings,
  // announcements,
} from "../../constant/HRDashboard";
import { useEffect, useState } from "react";
// import SubLoader from "../../components/ui/loader/SubLoader";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import TotalRatingBadge from "../../components/EmployeeDahboard/TotalRatingBadge";
import ProfileCardSkeleton from "../../components/common/ProfileCardSkeleton";
import ProfileCard from "../../components/common/ProfileCard";
import TimeLogCardSkeleton from "../../components/EmployeeDahboard/TimeLogCardSkeleton";
import TimeLogCard from "../../components/EmployeeDahboard/TimeLogCard";
import LeaveCardsSkeleton from "../../components/EmployeeDahboard/LeaveCardsSkeleton";
import LeaveCards from "../../components/HRDashboard/LeaveCards";
import ChartCard from "../../components/EmployeeDahboard/ChartCard";
import AnnouncementsCard from "../../components/EmployeeDahboard/AnnouncementsCard";
import MeetingCard from "../../components/EmployeeDahboard/MeetingCard";
import Loader from "../../components/ui/loader/Loader";
import ChartCardSkeleton from "../../components/EmployeeDahboard/ChartCardSkeleton";
import AnnouncementsCardSkeleton from "../../components/EmployeeDahboard/AnnouncementsCardSkeleton";
import MeetingCardSkeleton from "../../components/EmployeeDahboard/MeetingCardSkeleton";

export default function HRDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsDataLoading(false);
      // Simulate data loading
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // if (isLoading) {
  //   return <Loader className="h-[30vh]" />;
  // }

  return (
    <>
      <PageMeta title="HRMS | Carnia Softlabs" description="Dashboard" />
      <PageBreadcrumb
        pageTitle="Dashboard"
        endSection={<TotalRatingBadge rating={HRData.totalRating} />}
      />

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
                  name={HRData.name}
                  shiftTime={HRData.shiftTime}
                  punchInTime={HRData.punchInTime}
                  punchOutTime={HRData.punchOutTime}
                  breakTime={HRData.breakTime}
                  profileImage={HRData.profileImage}
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
            {isDataLoading ? <ChartCardSkeleton /> : <ChartCard />}

            <div className="flex flex-wrap  gap-5">
              {isDataLoading ? <AnnouncementsCardSkeleton /> : <AnnouncementsCard />}
              
              {isDataLoading ? <MeetingCardSkeleton /> : <MeetingCard />}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
