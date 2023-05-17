import './App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
function App() {

  const [listOfPosts, setListOfPosts] = useState([]); // gets the data from server in useEffect and stores in into list of posts

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data)// this will somehow send the data to listpost, dw about it now
    })
  }, []);//value will go through each object in the list
  return (
    <div className="App">
      {listOfPosts.map((value, key) => {
        return (
          <div className="post">
            <div className="title"> {value.title} </div>
            <div className="body">{value.postText}</div>
            <div className="footer">{value.username}</div>
          </div>
        );
      })}
    </div>
  );}

export default App;
