import React, { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const [userRole, setUserRole] = useState(null);

  const handleLogin = (role) => {
    setUserRole(role); // store user role
  };

  return (
    <div>
      {!userRole ? <Login onLogin={handleLogin} /> : <Home role={userRole} />}
    </div>
  );
}

export default App;
