// src/pages/Profile/Profile.js
import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  // State for user profile data
  const [profile, setProfile] = useState({
    name: '',
    address: '',
    phone: '',
    newPassword: '',
    confirmPassword: '',
    mfaEnabled: false
  });
  
  // State for messages and errors
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (profile.newPassword !== profile.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Simulate a profile update
    setMessage('Profile updated successfully!');
    setError('');
    // Clear form (optional)
    setProfile({
      name: '',
      address: '',
      phone: '',
      newPassword: '',
      confirmPassword: '',
      mfaEnabled: false
    });
  };

  return (
    <div className="profile-container">
      <h1>Profile Management</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={profile.address}
            onChange={handleChange}
            placeholder="Enter your address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={profile.newPassword}
            onChange={handleChange}
            placeholder="Enter new password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={profile.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm new password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="mfaEnabled">Enable MFA:</label>
          <input
            type="checkbox"
            id="mfaEnabled"
            name="mfaEnabled"
            checked={profile.mfaEnabled}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Update Profile</button>

        {message && <p className="message">{message}</p>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Profile;
