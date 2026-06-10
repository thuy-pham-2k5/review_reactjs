import { useState, useEffect } from "react";
import Hello from "./Hello";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div style={{textAlign: 'center', marginTop: 50}}>
      {show && <Hello/>}
      <button onClick={() => setShow(false)}>Delete the component</button>
    </div>
  );
};

export default App;