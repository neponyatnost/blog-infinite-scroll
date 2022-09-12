import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {

    if (!posts.length) {
        return (
            <h3 style={{ textAlign: 'center', textTransform: 'uppercase', color: 'teal' }}>Posts not found</h3>
        )
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'teal' }}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames='post'
                    >
                        <PostItem remove={remove} number={index + 1} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default PostList;