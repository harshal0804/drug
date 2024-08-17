import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/SignIn.css';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    // Retrieve user data from local storage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      sessionStorage.setItem('isAuthenticated', 'true');
      navigate('/'); // Redirect to the main page after successful login
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSignIn}>
        <h2>Sign In</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </form>
    </div>
  );
};

export default SignIn;
