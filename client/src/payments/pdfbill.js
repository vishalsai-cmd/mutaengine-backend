// Success.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './pdfbill.css';

function Success() {
  const location = useLocation();
  const { sessionId } = location.state || { sessionId: 'No seesion ID' }; //if no session id is passed,if we want we can pass sessionID over here

  const downloadInvoice = async () => {
    try {
      const response = await fetch(`https://mutaengine-backend-0hc3.onrender.com/generate-invoice/${sessionId}`, {
        method: 'GET',
      });
      
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `invoice_${sessionId}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        console.error('Failed to fetch invoice');
      }
    } catch (error) {
      console.error('Error downloading invoice:', error);
    }
  };

  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="green" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM12.97 6.03a.75.75 0 0 0-1.07-1.06L7.477 9.385 5.525 7.433a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5z"/>
          </svg>
        </div>
        <h2 className="success-title">Payment Successful!</h2>
        <p className="success-message">Your payment has been successfully processed.</p>
        <p className="success-transaction-id">Transaction ID: <strong>{sessionId}</strong></p>
        <button className="success-button" onClick={downloadInvoice}>Download Invoice</button>
        <button className="success-home-button">Go to Home</button>
      </div>
    </div>
  );
}

export default Success;
