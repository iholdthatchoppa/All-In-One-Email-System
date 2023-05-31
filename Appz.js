import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginForm from './signup';
import EmailForm from './emailForm';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/emails">Emails</Link>
            </li>
            <li>
              <Link to="/send-email">Send Email</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <LoginForm />
          </Route>
          <Route path="/emails">
            <EmailList />
          </Route>
          <Route path="/send-email">
            <EmailForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
