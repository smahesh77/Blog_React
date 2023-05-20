import './App.css';
import React from 'react'
import { AuthContext } from "./helpers/authContext";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './pages/home';
import createPost from './pages/createPost';
import Post from './pages/Post';
import Reg from './pages/reg';
import Login from './pages/login';


function App() {
  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAuthState(true)
    }
  }, [])

  return (
    <div className="App">
      <AuthContext.Provider value={{authState, setAuthState}}> {/* now auth state and setauth will be aaccesseble from all the componenets under this tag */}
        <Router>  {/* this is like navigator in flutter, 
                 goes to the component of the give path that will be a react page */}
          <div className="navbar">
            <Link to="/"> Home Page</Link>
            <Link to="/createpost"> Create A Post</Link>
             {!authState && (
              <>
                <Link to="/log"> Login</Link>
                <Link to="/reg"> reg</Link>
              </>
            )} 
          </div>


          <Switch>   {/* to select routes we use switch, this doest take you to that page
                    just loads the componet you gave on the route on the current page */}
            <Route path='/' exact component={Home} />
            <Route path='/createpost' exact component={createPost} />
            <Route path='/post/:id' exact component={Post} />
            <Route path='/log' exact component={Login} />
            <Route path='/reg' exact component={Reg} />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
