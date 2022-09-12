import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    const navigate = useNavigate()
    function transitToPost(id) {
        navigate(`/posts/${id}`)
    }
    return (
        <div className='post'>
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
                <MyButton onClick={() => transitToPost(props.post.id)}>Open</MyButton>
            </div>
        </div>
    )
}

export default PostItem;