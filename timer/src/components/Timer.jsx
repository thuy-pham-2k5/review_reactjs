import { useEffect, useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    if (timer === 0) {
      alert("Time's up");
      return;
    }

    const intervalId = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);

  return (
    <div>
      <h2>{timer}</h2>
    </div>
  );
}