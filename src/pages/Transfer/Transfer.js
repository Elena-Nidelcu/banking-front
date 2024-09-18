// src/pages/Transfer/Transfer.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify'; // Import DOMPurify to sanitize inputs
import './Transfer.css';
import '../../styles/buttons.css';
import '../../styles/titles.css';
import Header from '../../components/header';

const Transfer = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [selectedPreviousRecipient, setSelectedPreviousRecipient] = useState('');

  // List of previous recipients
  const previousRecipients = ['John Doe', 'Jane Smith', 'Company ABC'];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const sanitizedRecipient = DOMPurify.sanitize(recipient);
    const sanitizedAmount = DOMPurify.sanitize(amount);
    const sanitizedMessage = DOMPurify.sanitize(message);

    if (sanitizedAmount > 0 && sanitizedRecipient) {
      // Process the transfer logic here with sanitized values
      alert(`Transfer of $${sanitizedAmount} to ${sanitizedRecipient} was successful!`);
    } else {
      alert('Please fill in all fields and ensure the amount is greater than zero.');
    }
  };

  // Auto-fill recipient when selecting from the dropdown
  const handlePreviousRecipientChange = (e) => {
    const selectedRecipient = e.target.value;
    const sanitizedRecipient = DOMPurify.sanitize(selectedRecipient);
    setSelectedPreviousRecipient(sanitizedRecipient);
    setRecipient(sanitizedRecipient);
  };

  // If user manually types in the recipient field, clear the dropdown selection
  const handleRecipientChange = (e) => {
    const sanitizedRecipient = DOMPurify.sanitize(e.target.value);
    setRecipient(sanitizedRecipient);
    if (selectedPreviousRecipient) {
      setSelectedPreviousRecipient(''); // Clear dropdown when manual input happens
    }
  };

  return (
    <div className="transfer-container">
      <Header />
      <h2 className="page-title">Transfer Money</h2>
      <form className="transfer-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="previousRecipients">Select Previous Recipient</label>
          <select
            id="previousRecipients"
            value={selectedPreviousRecipient}
            onChange={handlePreviousRecipientChange}
            className="recipient-dropdown"
          >
            <option value="">-- Select a Previous Recipient --</option>
            {previousRecipients.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="recipient">Recipient’s Name/Account Number</label>
          <input
            type="text"
            id="recipient"
            value={recipient}
            onChange={handleRecipientChange} // Clear dropdown when user types manually
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(DOMPurify.sanitize(e.target.value))}
            required
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Optional Message</label>
          <input
            type="text"
            id="message"
            value={message}
            onChange={(e) => setMessage(DOMPurify.sanitize(e.target.value))}
          />
        </div>

        <button type="submit" className="save-btn" disabled={!(recipient && amount > 0)}>
          Send
        </button>
      </form>

      <div className="back-button-container">
        <Link to="/dashboard" className="back-button">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Transfer;
