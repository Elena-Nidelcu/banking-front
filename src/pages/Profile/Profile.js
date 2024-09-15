// src/pages/Profile/Profile.js
import React, { useState } from 'react';
import './Profile.css';
import '../../styles/buttons.css';
import '../../styles/titles.css';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    address: '',
    phone: '',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handleProfileChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Add profile update logic here
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Add password change logic here
  };

  return (
    <div className="profile-container">
      <h2 className="page-title">Profile</h2>
      <form className="profile-form" onSubmit={handleProfileSubmit}>
        <div className="card">
          <h3>Personal Information</h3>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profileData.name}
              onChange={handleProfileChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={profileData.address}
              onChange={handleProfileChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={profileData.phone}
              onChange={handleProfileChange}
            />
          </div>
          <button type="submit" className="save-btn">Save Changes</button>
        </div>
      </form>

      <form className="profile-form" onSubmit={handlePasswordSubmit}>
        <div className="card password-change-section">
          <h3>Change Password</h3>
          <div className="form-group">
            <label htmlFor="currentPassword">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmNewPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmNewPassword"
              name="confirmNewPassword"
              value={passwordData.confirmNewPassword}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="save-btn">Change Password</button>
        </div>
      </form>

      <div className="back-button-container">
        <a href="/dashboard" className="back-button">Back to Dashboard</a>
      </div>
    </div>
  );
};

export default Profile;
