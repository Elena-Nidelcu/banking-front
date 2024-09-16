// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Registration from './pages/Registration/Registration';
import TransactionHistory from './pages/TransactionHistory/TransactionHistory';
import Dashboard from './pages/Dashboard/Dashboard';
import Transfer from './pages/Transfer/Transfer';
import Profile from './pages/Profile/Profile';
import Manager from './pages/Manager/Manager';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Registration />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/manager" element={<Manager />} />

          <Route path="/" element={
            <div>
              <h1>Welcome to the Web Banking System</h1>
              <p>Please <Link to="/login">login</Link> to access your account.</p>
            </div>
          } />

          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
