import { useState } from "react";
import useIncrement from "../hooks/useIncrement";

function Counter({ step }) {
  const { count, increase } = useIncrement(step);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increase}>
        Add {step}
      </button>
    </div>
  );
}

export default Counter;