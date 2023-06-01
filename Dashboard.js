import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/emails');
      setEmails(response.data.emails);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Email Dashboard</h1>
      <button onClick={fetchEmails}>Fetch Emails</button>
      <ul>
        {emails.map((email) => (
          <li key={email.id}>{email.subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
