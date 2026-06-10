import { useState } from "react";

function App() {
  const [task, setTask] = useState("");

  const [list, setList] = useState([]);

  const add = () => {
    setList([... list, task]);
    setTask("");
  }
  
  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={task} onChange={(e) => {setTask(e.target.value)}}/>
      <button onClick={add}>Add</button>
      <ul>
        {list.map((task, index) => (
          <li style={{textAlign: 'left'}} key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;