// src/pages/TransactionHistory/TransactionHistory.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TransactionHistory.css';
import '../../styles/buttons.css';
import '../../styles/titles.css';
import '../../styles/tables.css';
import Header from '../../components/header';

const TransactionHistory = () => {
  const transactions = [
    { date: '2024-09-01', amount: 200, recipient: 'John Doe', type: 'credit', status: 'Completed' },
    { date: '2024-09-02', amount: -100, recipient: 'Jane Smith', type: 'debit', status: 'Rejected' },
    { date: '2024-09-05', amount: 150, recipient: 'Company ABC', type: 'credit', status: 'In Progress' },
    { date: '2024-09-10', amount: -50, recipient: 'Shop XYZ', type: 'debit', status: 'Pending' },
  ];

  return (
    <div className="table-container">
      <Header />
      <h2 className="page-title">Transaction History</h2>

      {/* Transactions Table */}
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Recipient</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className={transaction.type}>
              <td>{transaction.date}</td>
              <td>
                {transaction.amount > 0 ? (
                  <span className="credit">+${transaction.amount}</span>
                ) : (
                  <span className="debit">-${Math.abs(transaction.amount)}</span>
                )}
              </td>
              <td>{transaction.recipient}</td>
              <td>{transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}</td>
              <td>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Back to Dashboard Button */}
      <div className="back-button-container">
        <Link to="/dashboard" className="back-button">Back to Dashboard</Link>
      </div>
    </div>
  );
};

export default TransactionHistory;
