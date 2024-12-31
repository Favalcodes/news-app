import React, { useState } from "react";
import axios from "axios";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      console.log("Login response:", response);
      setToken(response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-5 border rounded"
    >
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mt-2 border rounded"
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mt-2 border rounded"
      />
      <button
        type="submit"
        className="w-full mt-4 bg-blue-500 text-white py-2 rounded"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
