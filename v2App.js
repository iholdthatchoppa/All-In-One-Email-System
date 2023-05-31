import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Email System</h1>
      <Link to="/login">Login</Link> or <Link to="/register">Register</Link>
    </div>
  );
};

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/users/register', {
        name,
        username,
        email,
        password,
      });
      console.log(response.data);

      // Redirect to the Gmail connection page
      window.location.href = '/connect-gmail';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

const ConnectGmail = () => {
  const handleConnectGmail = async () => {
    try {
      const response = await axios.get('/api/emails/connect-gmail');
      console.log(response.data);

      // Redirect to the email dashboard
      window.location.href = '/dashboard';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Connect Gmail</h1>
      <button onClick={handleConnectGmail}>Connect with Gmail</button>
    </div>
  );
};

const Dashboard = () => {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    try {
      const response = await axios.get('/api/emails');
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

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/connect-gmail" component={ConnectGmail} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
