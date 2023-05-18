import './App.css';
import React from 'react'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './pages/home';
import createPost from './pages/createPost';
import Post from './pages/Post';


function App() {


  return (
    <div className="App">
      <Router>  {/* this is like navigator in flutter, goes to the component of the give path that will be a react page */}
      <div className="navbar">
          <Link to="/"> Home Page</Link>
          <Link to="/createpost"> Create A Post</Link>
      </div> 
        

        <Switch>   {/* to select routes we use switch */}
          <Route path='/' exact component={Home} />
          <Route path='/createpost' exact component={createPost} />
          <Route path='/post/:id' exact component={Post} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
