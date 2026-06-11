import { useState } from "react";

function useIncrement(step) {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => prev + step);
  };

  return { count, increase };
}

export default useIncrement;