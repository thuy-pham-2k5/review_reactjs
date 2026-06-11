import { useLocation, useNavigate } from "react-router-dom";

const employees = [
  {
    id: 1,
    name: "Hoa",
    age: 20,
  },
  {
    id: 2,
    name: "Khánh",
    age: 25,
  },
  {
    id: 3,
    name: "Tú",
    age: 22,
  },
];

export default function Employee() {
  const navigate = useNavigate();
  const location = useLocation();

  const account = location.state?.account;

  const handleDetail = (employee) => {
    navigate("/employees/detail", {
      state: {
        employee,
      },
    });
  };

  return (
    <div>
      <h1>Employee List</h1>

      <h3>
        Welcome: {account?.email}
      </h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>
                <button
                  onClick={() =>
                    handleDetail(employee)
                  }
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}