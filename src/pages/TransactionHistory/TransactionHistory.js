// src/pages/TransactionHistory/TransactionHistory.js
import React from 'react';
import './TransactionHistory.css';

const transactions = [
  {
    id: 'TXN123456',
    date: '2024-09-01',
    type: 'Deposit',
    amount: '$500.00',
    status: 'Completed',
  },
  {
    id: 'TXN123457',
    date: '2024-09-03',
    type: 'Withdrawal',
    amount: '$100.00',
    status: 'Pending',
  },
  {
    id: 'TXN123458',
    date: '2024-09-05',
    type: 'Transfer',
    amount: '$200.00',
    status: 'Completed',
  },
];

const TransactionHistory = () => {
  return (
    <div className="transaction-history-container">
      <h2>Transaction History</h2>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Transaction ID</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.id}</td>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
