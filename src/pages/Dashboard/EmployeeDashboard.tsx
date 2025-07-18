import PageMeta from "../../components/common/PageMeta";
import { motion } from "framer-motion";
import {
  employeeData,
  timeLogData,
  leaveData,
} from "../../constant/EmployeeDahboard";
import { useEffect, useRef, useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import TotalRatingBadge from "../../components/EmployeeDahboard/TotalRatingBadge";
import ProfileCardSkeleton from "../../components/common/ProfileCardSkeleton";
import ProfileCard from "../../components/common/ProfileCard";
import TimeLogCardSkeleton from "../../components/EmployeeDahboard/TimeLogCardSkeleton";
import TimeLogCard from "../../components/EmployeeDahboard/TimeLogCard";
import LeaveCardsSkeleton from "../../components/EmployeeDahboard/LeaveCardsSkeleton";
import LeaveCards from "../../components/EmployeeDahboard/LeaveCards";
import ChartCard from "../../components/EmployeeDahboard/ChartCard";
import AnnouncementsCard from "../../components/EmployeeDahboard/AnnouncementsCard";
import MeetingCard from "../../components/EmployeeDahboard/MeetingCard";
import Loader from "../../components/ui/loader/Loader";
import ChartCardSkeleton from "../../components/EmployeeDahboard/ChartCardSkeleton";
import AnnouncementsCardSkeleton from "../../components/EmployeeDahboard/AnnouncementsCardSkeleton";
import MeetingCardSkeleton from "../../components/EmployeeDahboard/MeetingCardSkeleton";
import { useApi } from "../../hooks/useApi";
import EmptyState from "../../components/ui/error/EmptyState";

export default function EmployeeDashboard() {

  const [checkInData,setCheckInData] = useState<any>(null)

  const { data, error, loading, run } = useApi(`/employee/dashboard/getEmployeeDashboard`, "GET", { manual: true })

  const IMAGE_URL = `${import.meta.env.VITE_IMAGE_URL}/${data?.data?.profile_image}`

  
  const isFetched = useRef(false)
  useEffect(() => {
    if (!isFetched.current) {
      run()
      isFetched.current = true
      setCheckInData(JSON.parse(localStorage.getItem("checkInData") || "{}"))
    }
  }, [])

  console.log(checkInData?.checkInTime );
  

  if (error) {
    return <EmptyState imageUrl="/images/error/noData.png" description={`Error while loading dashboard data: ${error}`} title={`No Dashboard Data Found!`} />
  }

  return (
    <>
      <PageMeta title="HRMS | Carnia Softlabs" description="Dashboard" />
      <PageBreadcrumb
        pageTitle="Dashboard"
        endSection={<TotalRatingBadge rating={85} />}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <div className="max-w-7xl mx-auto ">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-3 ">
            {/* Left Side: Profile + Leave Cards */}
            <div className="lg:col-span-2 flex flex-col h-full space-y-6 " >
              {loading ? (
                <ProfileCardSkeleton />
              ) : (
                <ProfileCard
                  name={data?.data?.name}
                  shiftTime={`${data?.data?.shifts?.startTimeFormatted} to ${data?.data?.shifts?.endTimeFormatted}`}
                  punchInTime={employeeData.punchInTime}
                  punchOutTime={employeeData.punchOutTime}
                  breakTime={employeeData.breakTime}
                  profileImage={IMAGE_URL}
                />
              )}

              {/* Leave Cards directly below Profile */}
              {loading ? (
                <LeaveCardsSkeleton />
              ) : (
                <LeaveCards data={leaveData} />
              )}
            </div>

            {/* Right Side: Time Log */}
            <div>
              {loading ? (
                <TimeLogCardSkeleton />
              ) : (
                <TimeLogCard data={timeLogData} />
              )}
            </div>
          </div>

          {/* Meeting Schedule and Announcements */}
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-0 lg:gap-5 mt-6">
            {loading ? <ChartCardSkeleton /> : <ChartCard />}

            <div className="flex flex-wrap  gap-5 mt-5 lg:mt-0">
              {loading ? <AnnouncementsCardSkeleton /> : <AnnouncementsCard />}

              {loading ? <MeetingCardSkeleton /> : <MeetingCard />}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
