import { useEffect, useState } from "react";
import todoApi from "./api/todoApi";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await todoApi.getAll();

      // chỉ lấy 10 item đầu cho dễ nhìn
      setTodos(response.data.slice(0, 10));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    if (!task.trim()) {
      alert("Please enter a task");
      return;
    }

    try {
      const response = await todoApi.create({
        userId: 1,
        title: task,
        completed: false,
      });

      alert(`Status: ${response.status}`);

      setTodos((prev) => [
        response.data,
        ...prev,
      ]);

      setTask("");
    } catch (error) {
      console.error(error);
      alert("Create failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) =>
            setTask(e.target.value)
          }
        />

        <button
          onClick={handleSubmit}
          style={{ marginLeft: "10px" }}
        >
          Submit
        </button>
      </div>

      <ul style={{ marginTop: "20px" }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;