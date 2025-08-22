import React from "react";
import EmployeeList from "./EmployeeList";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import TimeInOut from "./components/Attendance/TimeInOut";
import AttendanceRecord from "./components/Attendance/AttendanceRecord";
import LeaveManagement from "./pages/LeaveManagement";


function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <EmployeeList />
    </div>
  );
}

export default App;
