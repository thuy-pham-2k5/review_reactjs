import { useState } from "react";

function App() {
  const [number, setNumber] = useState(5);

  const increase = () => { setNumber(number + 1); }

  const descrease = () => { setNumber(number - 1); }

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <span style={{padding:'10px'}}>{number}</span>
      <button onClick={descrease}>Descrease</button>
    </div>
  );
};

export default App;