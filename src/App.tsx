import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from "./pages/AuthPages/Login";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import EmployeeDashboard from "./pages/Dashboard/EmployeeDashboard";
import { useEffect, useState } from "react";
import Loader from "./components/ui/loader/Loader";
import EmployeeProfile from "./pages/Profile/EmployeeProfile";
import EmployeeLeave from "./pages/Leaves/EmployeeLeave";
import EmployeeAttendance from "./pages/Attendance/EmployeeAttendance";
import EmployeeEvent from "./pages/Event/EmployeeEvent";
import EmployeeHoliday from "./pages/Holiya/EmployeeHoliday";
import HRDashboard from "./pages/Dashboard/HRDashboard";
import HrAttendance from "./pages/Attendance/HrAttendance";

export default function App() {

  const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader/>
  }

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}


          <Route element={<AppLayout />}>
            <Route index path="/" element={<HRDashboard />} />
            {/* HR Pages Starts */}
            <Route index path="/hrDashboard" element={<HRDashboard />} />
            <Route index path="/hrAttendance" element={<HrAttendance />} />
            {/* HR Pages Ends */}


            {/* Employee Pages Starts */}
            <Route index path="/employeeDashboard" element={<EmployeeDashboard />} />
            <Route path="/employeeProfile" element={<EmployeeProfile />} />
            <Route path="/employeeAttendance" element={<EmployeeAttendance />} />
            <Route path="/employeeEvents" element={<EmployeeEvent />} />
            <Route path="/employeeLeaves" element={<EmployeeLeave />} />
            <Route path="/employeeHoliday" element={<EmployeeHoliday />} />
            {/* Employee Pages Ends */}

          </Route>

          {/* Auth Layout */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
