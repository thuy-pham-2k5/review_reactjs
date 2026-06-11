import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Employee from "./components/Employee";
import EmployeeDetail from "./components/EmployeeDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/employees" element={<Employee />} />
      <Route path="/employees/detail" element={<EmployeeDetail />} />
    </Routes>
  );
}