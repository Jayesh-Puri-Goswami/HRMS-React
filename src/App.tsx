import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import EmployeeDashboard from "./pages/Dashboard/EmployeeDashboard";
import { useEffect, useState } from "react";
import Loader from "./components/ui/loader/Loader";
import EmployeeProfile from "./pages/profile/Profile/EmployeeProfile";
import EmployeeLeave from "./pages/Leaves/EmployeeLeave";
import EmployeeAttendance from "./pages/Attendance/EmployeeAttendance";
import EmployeeEvent from "./pages/Event/EmployeeEvent";
import EmployeeHoliday from "./pages/Holiya/EmployeeHoliday";

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
            <Route index path="/" element={<EmployeeDashboard />} />

            {/* Employee Pages Starts */}
            <Route path="/profile" element={<EmployeeProfile />} />
            <Route path="/attendance" element={<EmployeeAttendance />} />
            <Route path="/events" element={<EmployeeEvent />} />
            <Route path="/leaves" element={<EmployeeLeave />} />
            <Route path="/holiday" element={<EmployeeHoliday />} />
            {/* Employee Pages Ends */}

          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
