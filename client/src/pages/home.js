import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {

    const [listOfPosts, setListOfPosts] = useState([]); // gets the data from server in useEffect and stores in into list of posts

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response) => {
            setListOfPosts(response.data)// this will somehow send the data to listpost, dw about it now
        })
    }, []);//value will go through each object in the list

    return (

        <div>
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
    )
}

export default Home