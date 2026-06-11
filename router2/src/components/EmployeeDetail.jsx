import { useLocation } from "react-router-dom";

export default function EmployeeDetail() {
  const location = useLocation();

  const employee = location.state?.employee;

  if (!employee) {
    return <h2>No employee found</h2>;
  }

  return (
    <div>
      <h1>Employee Detail</h1>

      <p>
        <strong>Id:</strong> {employee.id}
      </p>

      <p>
        <strong>Name:</strong> {employee.name}
      </p>

      <p>
        <strong>Age:</strong> {employee.age}
      </p>
    </div>
  );
}