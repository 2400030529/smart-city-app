import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [role, setRole] = useState("citizen");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Temporary login validation
    if (email && password) {
      alert(`Logged in as ${role}`);
      onLogin(role); // pass role to parent (App.jsx)
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="login-container">
      <h2>Smart City App Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="citizen">Citizen</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
