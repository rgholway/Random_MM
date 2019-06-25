import React from 'react';
import { Router, browserHistory, Route, IndexRoute, Link } from 'react-router';
import Home from './Home'
import ArtistShow from './ArtistShow'

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home}/>
      <Route path="/:name" component={ArtistShow}/>
    </Router>
  )
}

export default App
