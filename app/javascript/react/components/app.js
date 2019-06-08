import React from 'react';
import { Router, browserHistory, Route, IndexRoute, Link } from 'react-router';
import Example from './Example'

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Example}/>
    </Router>
  )
}

export default App
