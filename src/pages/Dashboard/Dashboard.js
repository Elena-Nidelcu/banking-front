// src/pages/Dashboard/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <nav>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/transfer">Transfer Money</Link></li>
            <li><Link to="/transaction-history">Transaction History</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
      </aside>

      <main className="dashboard-content">
        <div className="account-balance">
          <h1>$0.00</h1>
          <p>Account Balance</p>
        </div>

        <div className="action-buttons">
          <button className="dashboard-button">
            <Link to="/transfer">
              <i className="fas fa-money-bill-wave"></i> Transfer Money
            </Link>
          </button>
          <button className="dashboard-button">
            <Link to="/transaction-history">
              <i className="fas fa-history"></i> Transaction History
            </Link>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
