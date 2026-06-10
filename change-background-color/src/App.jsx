import { useEffect, useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setColor("blue");
    }, 3000);
  })

  return (
    <div style={{height:'100px', width:'100px', backgroundColor: color}}></div>
  )
}

export default App;