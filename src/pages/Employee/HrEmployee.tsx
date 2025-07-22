import React, { useCallback, useEffect, useRef, useState } from "react";
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
import SearchBar from "../../components/ui/searchbar/SearchBar";
import { dummyEmployeeCards } from "../../constant/HrEmployee.data";
import HrEmployeeCard from "../../components/ui/card/HrEmployeeCard";
import { HR_EMPLOYEE_CARDS_TYPE } from "../../types/HrEmployee.type";

const PAGE_SIZE = 12; // Number of employees per page

const HrEmployee = () => {
  const [activeTab, setActiveTab] = useState<string>("leave-status");
  const [loading, setLoading] = useState(false);
  const [loadingCard, setLoadingCard] = useState(false);

  // Infinite scroll state
  const [page, setPage] = useState(1);
  const [employees, setEmployees] = useState<HR_EMPLOYEE_CARDS_TYPE[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  // Simulate paginated fetch (replace with real API call in production)
  const fetchEmployees = useCallback(async (pageNum: number) => {
    setLoading(true);
    // Simulate network delay
    await new Promise((res) => setTimeout(res, 600));
    // Replace this with your paginated API call
    const start = (pageNum - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const newEmployees = dummyEmployeeCards.slice(start, end);
    setEmployees((prev) => [...prev, ...newEmployees]);
    setHasMore(end < dummyEmployeeCards.length);
    setLoading(false);
  }, []);

  // Initial and paginated fetch
  useEffect(() => {
    fetchEmployees(page);
  }, [page, fetchEmployees]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (!hasMore || loading) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMore, loading]);

  const handleMenuClick = (employee: HR_EMPLOYEE_CARDS_TYPE) => {
    console.log("Menu clicked for:", employee.name);
    // Add your menu logic here
  };

  return (
    <div className="w-full">
      <PageMeta title="Hr Employee Leave" description="" />
      <div className="flex items-center justify-between mb-5">
        <PageBreadcrumb pageTitle={"All Employee"} className="text-gray-500" />
        <div className="flex items-center justify-center gap-4">
          <button className="w-64 h-14 rounded-2xl bg-gray-500 text-white">
            Add new Employee
          </button>
          <SearchBar className="bg-white" />
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {employees.map((employee) => (
          <HrEmployeeCard
            key={employee.id}
            employee={employee}
            onMenuClick={handleMenuClick}
          />
        ))}
      </div>
      {/* Loader for infinite scroll */}
      <div ref={loaderRef} className="flex justify-center items-center py-6">
        {loading && (
          <span className="text-gray-400 text-sm">Loading more...</span>
        )}
        {!hasMore && (
          <span className="text-gray-400 text-sm">No more employees</span>
        )}
      </div>
    </div>
  );
};

export default HrEmployee;
