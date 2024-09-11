// src/pages/LoginRegistration/LoginRegistration.js
import React, { useState } from 'react';
import './LoginRegistration.css';

const LoginRegistration = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="login-registration-container">
      <div className="form-container">
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </>
          )}
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        </form>
        <button onClick={handleToggle} className="toggle-button">
          {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default LoginRegistration;
