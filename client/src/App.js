import './App.css';
import React from 'react'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './pages/home';
import createPost from './pages/createPost';


function App() {


  return (
    <div className="App">
      <Router>
        <Link to="/createpost"> Create a post </Link> {/* this is like navigator in flutter, goes to the component of the give path that will be a react page */}
        <Link to="/"> Home Page </Link>

        <Switch>   {/* to select routes we use switch */}
          <Route path='/' exact component={Home} />
          <Route path='/createpost' exact component={createPost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
