// src/pages/Manager/Manager.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/buttons.css';
import './Manager.css';
import Header from '../../components/header';

const Manager = () => {
  // Initial list of pending transactions
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2024-09-02', amount: 100, recipient: 'John Doe', status: 'Pending' },
    { id: 2, date: '2024-09-03', amount: 200, recipient: 'Jane Smith', status: 'Pending' },
  ]);

  // Handle confirming a transaction
  const confirmTransaction = (id) => {
    setTransactions(transactions.map(transaction => 
      transaction.id === id ? { ...transaction, status: 'Confirmed' } : transaction
    ));
  };

  // Handle rejecting a transaction
  const rejectTransaction = (id) => {
    setTransactions(transactions.map(transaction => 
      transaction.id === id ? { ...transaction, status: 'Rejected' } : transaction
    ));
  };

  return (
    <div className="manager-container">
      <Header /> {/* Include the Header component */}
      <h2 className="page-title">Manage Transactions</h2>

      <table className="transactions-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Recipient</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>${transaction.amount}</td>
              <td>{transaction.recipient}</td>
              <td>{transaction.status}</td>
              <td>
                {transaction.status === 'Pending' && (
                  <>
                    <button 
                      className="confirm-btn" 
                      onClick={() => confirmTransaction(transaction.id)}
                    >
                      Confirm
                    </button>
                    <button 
                      className="reject-btn" 
                      onClick={() => rejectTransaction(transaction.id)}
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="back-button-container">
        <Link to="/dashboard" className="back-button">Back to Dashboard</Link>
      </div>
    </div>
  );
};

export default Manager;
