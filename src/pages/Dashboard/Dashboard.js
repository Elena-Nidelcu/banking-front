// src/pages/Dashboard/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  // Sample account balance
  const accountBalance = 0;

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="account-info">
        <h2>Account Balance: ${accountBalance.toFixed(2)}</h2>
      </div>
      <div className="links">
        <Link to="/transaction-history">View Transaction History</Link>
        <Link to="/transfer">Transfer Money</Link>
        <Link to="/profile">Manage Profile</Link>
      </div>
    </div>
  );
};

export default Dashboard;
