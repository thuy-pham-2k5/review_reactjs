import { useState } from "react";

const EMPTY_STUDENT = {
  name: "",
  phone: "",
  email: "",
};

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState(EMPTY_STUDENT);

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateStudent = () => {
    const { name, phone, email } = form;

    if (!name.trim() || !phone.trim() || !email.trim()) {
      return "Vui lòng nhập đầy đủ thông tin";
    }

    if (!/^0\d{9}$/.test(phone)) {
      return "Số điện thoại phải gồm 10 số và bắt đầu bằng 0";
    }

    return null;
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;

    // chỉ cho nhập số
    if (!/^\d*$/.test(value)) return;

    // tối đa 10 ký tự
    if (value.length > 10) return;

    updateField("phone", value);
  };

  const handleSubmit = () => {
    const error = validateStudent();

    if (error) {
      alert(error);
      return;
    }

    setStudents((prev) => [...prev, form]);
    setForm(EMPTY_STUDENT);
  };

  const handleDelete = (index) => {
    setStudents((prev) =>
      prev.filter((_, currentIndex) => currentIndex !== index)
    );
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h1>Student List</h1>

      <p>
        Name:
        <input
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
        />
      </p>

      <p>
        Phone:
        <input
          type="tel"
          value={form.phone}
          onChange={handlePhoneChange}
        />
      </p>

      <p>
        Email:
        <input
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
        />
      </p>

      <button onClick={handleSubmit}>Submit</button>

      {students.length > 0 && (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.phone}</td>
                <td>{student.email}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;