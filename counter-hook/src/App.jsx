import { useState } from "react";
import Counter from "./components/Counter";

export default function App() {
  return (
    <>
      <Counter step={1} />
      <Counter step={2} />
    </>
  );
}