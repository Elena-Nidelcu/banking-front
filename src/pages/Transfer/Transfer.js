// src/pages/Transfer/Transfer.js
import React, { useState } from 'react';
import './Transfer.css';

const Transfer = () => {
  // Sample list of users who have been previously transferred money to
  const previousUsers = ['Alice', 'Bob', 'Charlie'];

  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [previousTransfers, setPreviousTransfers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!recipient || !amount || parseFloat(amount) <= 0) {
      setMessage('Please enter a valid recipient and amount.');
      return;
    }

    // Simulate a transfer operation (store the recipient in previousTransfers)
    setPreviousTransfers((prevTransfers) => [
      ...prevTransfers,
      { recipient, amount }
    ]);

    setMessage(`Successfully transferred $${amount} to ${recipient}.`);
    setRecipient('');
    setAmount('');
  };

  return (
    <div className="transfer-container">
      <h1>Transfer Money</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="recipient">Recipient Username:</label>
          <input
            type="text"
            id="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Enter recipient's username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="previous-users">Or Select from Previous Users:</label>
          <select
            id="previous-users"
            onChange={(e) => setRecipient(e.target.value)}
            value={recipient}
          >
            <option value="">Select a user</option>
            {previousUsers.map((user, index) => (
              <option key={index} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount to Transfer:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>

        <button type="submit">Transfer</button>
      </form>

      {message && <p className="message">{message}</p>}

      {/* Show previous transfers */}
      {previousTransfers.length > 0 && (
        <div className="previous-transfers">
          <h2>Previous Transfers</h2>
          <ul>
            {previousTransfers.map((transfer, index) => (
              <li key={index}>
                Transferred ${transfer.amount} to {transfer.recipient}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Transfer;
