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
<<<<<<< HEAD
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import EmployeeCalendar from "./pages/Calendar/EmployeeCalendar";
import EmployeePolicy from "./pages/Policy/EmployeePolicy";

interface ProtectedRouteProps {
  allowedRoles: string[];
}

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const user = useSelector((state: any) => state.auth.user);
  const token = localStorage.getItem("token");

  if (!user && !token) {
    return <Navigate to="/login" replace />;
  }

  console.log(user);
  

  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};
=======
import HrAttendance from "./pages/Attendance/HrAttendance";
>>>>>>> 59cf20eef3f4930e236fb7586a1dbeec7027eb7a

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
    return <Loader />
  }

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
<<<<<<< HEAD
          
          {/* Auth Starts */}
          <Route path="/" element={<Navigate to="/login" replace />} />
=======
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
>>>>>>> 59cf20eef3f4930e236fb7586a1dbeec7027eb7a
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/unauthorized" element={<NotFound />} />
          {/* Auth Ends */}

          {/* Protected HR Routes  Starts */}
          <Route element={<ProtectedRoute allowedRoles={['HR']} />}>
            <Route element={<AppLayout />}>
              <Route path="/hr-dashboard" element={<HRDashboard />} />
              <Route path="/hr-attendance" element={<HRDashboard />} />
            </Route>
          </Route>
          {/* Protected HR Routes  Ends */}

          {/* Protected Employee Routes Starts */}
          <Route element={<ProtectedRoute allowedRoles={['Employee']} />}>
            <Route element={<AppLayout />}>
            <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
              <Route path="/employee-profile" element={<EmployeeProfile />} />
              <Route path="/employee-attendance" element={<EmployeeAttendance />} />
              <Route path="/employee-events" element={<EmployeeEvent />} />
              <Route path="/employee-leaves" element={<EmployeeLeave />} />
              <Route path="/employee-holiday" element={<EmployeeHoliday />} />
              <Route path="/employee-calendar" element={<EmployeeCalendar />} />
              <Route path="/employee-policies" element={<EmployeePolicy />} />
            </Route>
          </Route>
          {/* Protected Employee Routes Ends */}

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
