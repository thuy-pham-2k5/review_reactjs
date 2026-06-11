import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ACCOUNT = {
  email: "admin@gmail.com",
  password: "letmein",
};

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    const isValid =
      form.email === ACCOUNT.email &&
      form.password === ACCOUNT.password;

    if (!isValid) {
      alert("Wrong email or password");
      return;
    }

    navigate("/employees", {
      state: {
        account: form,
      },
    });
  };

  return (
    <div>
      <h1>Login</h1>

      <p>
        Email:
        <input
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />
      </p>

      <p>
        Password:
        <input
          type="password"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />
      </p>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}