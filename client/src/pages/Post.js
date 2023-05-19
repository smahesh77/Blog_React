import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from 'formik' // for forms
import * as yup from 'yup' //for validation


function Post() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});// this will get the value given to setpostObject and store it in postobject
    const [comments, setcommentObject] = useState([]);
    const [newComment, setnewComment] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
            setPostObject(response.data);// sends to postobject
        });

        axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
            setcommentObject(response.data);// sends to postobject
            console.log(response.data)
        });
    }, []); // always put [] and the states in which you want to rerun the api requests never leave empty(just put[])

    const addComment =() => {
        axios.post(`http://localhost:3001/comments`, {commentBody: newComment, PostId: id}).then((response) => {
            alert("new comment added ("+ newComment + ")")
            const commentToAdd = { commentBody: newComment };
            setcommentObject([...comments, commentToAdd]);
            setnewComment("");
        })
    }

    const initialValues = {
        
    };

    const onSubmit = (data) => {
        // axios.post("http://localhost:3001/posts", data).then((response) => {// sends the data to server 
        //     console.log(response.data)
        //     console.log("IT WORKS")

        // })
        console.log("submited")
    }





    return (
        <div className="postPage">
            <div className="leftSide">
                <div className="post" id="individual">
                    <div className="title"> {postObject.title} </div>
                    <div className="body">{postObject.postText}</div>
                    <div className="footer">{postObject.username}</div>
                </div>
            </div>
            <div className="rightSide">
                <div className="addCommentContainer">
                    <input type="text" placeholder="Comment" value={newComment} onChange={(event) => {setnewComment(event.target.value)}}/> 
                     {/*this is how you get value from one variabe forms and inputs*/} 
                    <button onClick={addComment}>Submit</button>
                </div>
                <div className="listOfComments">
                    {comments.map((comment, key) => {
                        return (
                            <div key={key} className="comment">
                                {comment.commentBody }
                                
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Post


