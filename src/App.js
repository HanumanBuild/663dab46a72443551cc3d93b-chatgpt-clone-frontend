import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChatInterface from './components/ChatInterface';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/chat" component={ChatInterface} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;