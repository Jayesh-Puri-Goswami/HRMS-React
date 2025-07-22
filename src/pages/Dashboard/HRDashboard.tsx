/* eslint-disable @typescript-eslint/no-explicit-any */
import PageMeta from "../../components/common/PageMeta";
import { motion } from "framer-motion";
import {
  HRData,
  timeLogData,
  leaveData,
  leaveChartData,
  absents,
  // meetings,
  // announcements,
} from "../../constant/HRDashboard";
import { useEffect, useRef, useState } from "react";
// import SubLoader from "../../components/ui/loader/SubLoader";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import TotalRatingBadge from "../../components/EmployeeDahboard/TotalRatingBadge";
import ProfileCardSkeleton from "../../components/common/ProfileCardSkeleton";
import ProfileCard from "../../components/common/ProfileCard";
import TimeLogCardSkeleton from "../../components/EmployeeDahboard/TimeLogCardSkeleton";
import TimeLogCard from "../../components/EmployeeDahboard/TimeLogCard";
import LeaveCardsSkeleton from "../../components/EmployeeDahboard/LeaveCardsSkeleton";
import LeaveCards from "../../components/HRDashboard/LeaveCards";
// import ChartCard from "../../components/EmployeeDahboard/ChartCard";
// import AnnouncementsCard from "../../components/EmployeeDahboard/AnnouncementsCard";
// import MeetingCard from "../../components/EmployeeDahboard/MeetingCard";
// import Loader from "../../components/ui/loader/Loader";
// import ChartCardSkeleton from "../../components/EmployeeDahboard/ChartCardSkeleton";
// import AnnouncementsCardSkeleton from "../../components/EmployeeDahboard/AnnouncementsCardSkeleton";
// import MeetingCardSkeleton from "../../components/EmployeeDahboard/MeetingCardSkeleton";
import { useApi } from "../../hooks/useApi";
import EmptyState from "../../components/ui/error/EmptyState";
import { Swiper, SwiperSlide } from "swiper/react";
import ChartSkeleton from "../../components/HRDashboard/Skeletons/ChartSkeleton";
import LeavesChart from "../../components/HRDashboard/LeaveChart";
import HrAllAnnounements from "../../components/HRDashboard/HrAllAnnounements";
import AbsentChartSkeleton from "../../components/HRDashboard/Skeletons/AbsentChartSkeleton";

import HrAbsentChart from "../../components/HRDashboard/HrAbsentChart";
import HrEmployeeCard from "../../components/ui/card/HrEmployeeCard";
import { announcements } from "../../constant/EmployeeDahboard";
import { FreeMode } from "swiper/modules";
import { dummyEmployeeCards } from "../../constant/HrEmployee.data";
import { HR_EMPLOYEE_CARDS_TYPE } from "../../types/HrEmployee.type";

export default function HRDashboard() {
  const [checkInData, setCheckInData] = useState<any>(null);

  const { data, error, loading, run } = useApi(
    `/employee/dashboard/getEmployeeDashboard`,
    "GET",
    { manual: true }
  );

  const {
    data: APIData,
    error: APIError,
    loading: APILoading,
    run: APIRun,
  } = useApi(`/admin/hrDashboard`, "GET", { manual: true });

  console.log(APIData);

  const IMAGE_URL = `${import.meta.env.VITE_IMAGE_URL}/${
    data?.data?.profile_image
  }`;

  const isFetched = useRef(false);
  useEffect(() => {
    if (!isFetched.current) {
      run();
      APIRun();
      isFetched.current = true;
      setCheckInData(JSON.parse(localStorage.getItem("checkInData") || "{}"));
    }
  }, []);

  // if (isLoading) {
  //   return <Loader className="h-[30vh]" />;
  // }

  const handleMenuClick = (employee: HR_EMPLOYEE_CARDS_TYPE) => {
    console.log("Menu clicked for:", employee.name);
    // Add your menu logic here
  };

  if (error) {
    return (
      <EmptyState
        imageUrl="/images/error/noData.png"
        description={`Error while loading dashboard data: ${error}`}
        title={`No Dashboard Data Found!`}
      />
    );
  }

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
              {loading ? (
                <ProfileCardSkeleton />
              ) : (
                <ProfileCard
                  name={data?.data?.name}
                  shiftTime={`${data?.data?.shifts?.startTimeFormatted} to ${data?.data?.shifts?.endTimeFormatted}`}
                  punchInTime={HRData.punchInTime}
                  punchOutTime={HRData.punchOutTime}
                  breakTime={HRData.breakTime}
                  profileImage={IMAGE_URL}
                />
              )}

              {/* Leave Cards directly below Profile */}
              {loading ? (
                <LeaveCardsSkeleton />
              ) : (
                <LeaveCards
                  totalEmployee={APIData?.totalEmployee || 0}
                  absentEmployees={APIData?.absentEmployees || 0}
                  leaveEmployees={APIData?.leaveEmployees || 0}
                  halfDayEmployees={APIData?.halfDayEmployees || 0}
                />
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 pt-3">
            {loading ? (
              <ChartSkeleton />
            ) : (
              <LeavesChart  data={leaveChartData} isLoading={loading} />
            )}

            <HrAllAnnounements
              isLoading={loading}
              displayAnnouncements={announcements}
              onAnnouncementClick={() => {}}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 pt-3">
            {loading ? (
              <AbsentChartSkeleton />
            ) : (
              <HrAbsentChart data={absents} />
            )}

            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              freeMode={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
              }}
              modules={[FreeMode]}
              className="mySwiper w-full"
            >
              {dummyEmployeeCards.map((employee) => (
                <SwiperSlide key={employee.id} className="flex justify-center">
                  <HrEmployeeCard
                    key={employee.id}
                    employee={employee}
                    onMenuClick={handleMenuClick}
                    // cardClassName="w-[260px] sm:w-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </motion.div>
    </>
  );
}
