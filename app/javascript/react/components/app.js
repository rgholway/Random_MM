import React from 'react';
import { Router, browserHistory, Route, IndexRoute, Link } from 'react-router';
import Home from './Home'

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home}/>
      <Route path="/:name" component={Home}/>
    </Router>
  )
}

export default App
