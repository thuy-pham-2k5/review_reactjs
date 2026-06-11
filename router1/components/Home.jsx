import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  const account = location.state?.account;

  return (
    <div>
      <h1>Home</h1>

      <h3>Login Successfully</h3>

      <p>Email: {account?.email}</p>
      <p>Password: {account?.password}</p>
    </div>
  );
}