// src/pages/TransactionHistory/TransactionHistory.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TransactionHistory.css';
import '../../styles/buttons.css';
import '../../styles/titles.css';

const TransactionHistory = () => {
  const transactions = [
    { date: '2024-09-01', amount: 200, recipient: 'John Doe', type: 'credit' },
    { date: '2024-09-02', amount: -100, recipient: 'Jane Smith', type: 'debit' },
    { date: '2024-09-05', amount: 150, recipient: 'Company ABC', type: 'credit' },
    { date: '2024-09-10', amount: -50, recipient: 'Shop XYZ', type: 'debit' },
  ];

  return (
    <div className="transaction-history-container">
      <h2 className="page-title">Transaction History</h2>

      {/* Transactions Table */}
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Recipient</th>
            <th>Type</th>
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
