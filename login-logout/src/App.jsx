import { useState } from "react";
import Home from "./Home.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {setIsLoggedIn(true);};

  const handleLogout = () => {setIsLoggedIn(false);};

  return (
    <div style={{textAlign: 'center'}}>
      {isLoggedIn ? (
        <Home onLogout={handleLogout}/>
      ) : (
        <div>
          <h1>Please log in</h1>
          <button onClick={handleLogin}>Log in</button>
        </div>
      )}
    </div>
  );
}

export default App;