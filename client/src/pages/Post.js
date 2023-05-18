import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Post() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});// this will get the value given to setpostObject and store it in postobject

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
            setPostObject(response.data);// sends to postobject
        });
    });

    return (
        <div className="postPage">
            <div className="leftSide">
                <div className="post" id="individual">
                    <div className="title"> {postObject.title} </div>
                    <div className="body">{postObject.postText}</div>
                    <div className="footer">{postObject.username}</div>
                </div>
            </div>
            <dev className="rigtSide">Comment Sectiom</dev>
        </div>
    )
}

export default Post