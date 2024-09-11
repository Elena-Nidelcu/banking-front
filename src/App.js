// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginRegistration from './pages/LoginRegistration/LoginRegistration';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes here */}
          <Route path="/login" element={<LoginRegistration />} />
          
          {/* Add more routes for other pages, e.g., dashboard, account, etc. */}
          <Route path="/" element={
            <div>
              <h1>Welcome to the Web Banking System</h1>
              <p>This is the home page. Please <a href="/login">login</a>.</p>
            </div>
          } />

          {/* Add a catch-all route for 404 (Not Found) */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
