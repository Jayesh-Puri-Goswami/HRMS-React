"use client";

import React, { useState, useCallback } from "react";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import EmployeeProfileCard from "../../components/EmployeeProfile/EmployeeProfileCard";
import ProfileProgress from "../../components/EmployeeProfile/ProfileProgress";
import ProfileTab from "../../components/EmployeeProfile/ProfileTab";
import {
  employeeProfileCardData,
  DEFAULT_TABS,
  EMPLOYEE_PROFILE_DATA,
} from "../../constant/EmployeeProfile";
import {
  AddressSkeleton,
  BankDetailsSkeleton,
  DocumentsSkeleton,
  GenericSkeleton,
  GraduationSkeleton,
} from "../../components/EmployeeProfile/skeletons/LoadingSkeletons";
import AddressContent from "../../components/EmployeeProfile/AddressContent";
import DocumentsContent from "../../components/EmployeeProfile/DocumentsContent";
import BankDetailContent from "../../components/EmployeeProfile/BankDetailContent";
import SalaryOverviewContent from "../../components/EmployeeProfile/SalaryOverviewContent";
import PayslipContent from "../../components/EmployeeProfile/PayslipContent";
import ProfileGraduation from "../../components/EmployeeProfile/ProfileGraduation";
import Card from "../../components/ui/card/Card";

const HRProfile = () => {
  const [activeTab, setActiveTab] = useState<string>("address");
  const [loading, setLoading] = useState(false);

  const handleTabChange = useCallback((tabId: string) => {
    setActiveTab(tabId);
    setLoading(true);
    setTimeout(() => setLoading(false), 800); // Simulated loading delay
  }, []);

  // Skeleton
  const renderTabContent = (tabId: string) => {
    if (loading) {
      switch (tabId) {
        case "address":
          return <AddressSkeleton />;
        case "documents":
          return <DocumentsSkeleton />;
        case "bank-detail":
          return <BankDetailsSkeleton />;
        case "salary-overview":
          return <BankDetailsSkeleton />;
        case "payslip":
          return <BankDetailsSkeleton />;
        case "graduation-details":
          return <GraduationSkeleton />;
        default:
          return <GenericSkeleton />;
      }
    }
    //  Show content while tabchange
    switch (tabId) {
      case "address":
        return <AddressContent />;
      case "documents":
        return <DocumentsContent />;
      case "bank-detail":
        return <BankDetailContent />;
      case "salary-overview":
        return <SalaryOverviewContent />;
      case "payslip":
        return <PayslipContent />;
      case "graduation-details":
        return <ProfileGraduation />;
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
      <PageMeta title="Employee Profile" description="" />
      <PageBreadcrumb pageTitle="Profile" />

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row my-5 gap-6">
        <div className="w-full lg:basis-3/5 h">
          <EmployeeProfileCard
            key={employeeProfileCardData.id}
            employee={employeeProfileCardData}
            variant="default"
            onCardClick={(employee) => console.log("Clicked:", employee)}
            animationDelay={0.1}
            className="hover:scale-[1] transition-transform duration-200"
          />
        </div>
        <div className="w-full lg:basis-2/5">
          <ProfileProgress />
        </div>
      </div>

      {/* Tabs */}
      <ProfileTab
        actionButtons={DEFAULT_TABS.map((tab) => ({
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
    </>
  );
};

export default HRProfile;
