import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', { email, password });
      setToken(response.data.token);
    } catch (error) {
      console.error('Register error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-5 border rounded">
      <label>Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mt-2 border rounded" />
      <label>Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mt-2 border rounded" />
      <button type="submit" className="w-full mt-4 bg-blue-500 text-white py-2 rounded">Register</button>
    </form>
  );
};

export default Register;
