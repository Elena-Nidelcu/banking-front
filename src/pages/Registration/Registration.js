// src/pages/LoginRegistration/Registration.js
import React, { useState } from 'react';
import './Registration.css';
import '../../styles/buttons.css';
import '../../styles/titles.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration form submission logic here
    console.log('Registration form submitted:', formData);
  };

  return (
    <div className="registration-container">
      <div className="form-container">
        <h2 className="page-title">Registration</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="save-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
