import React from 'react';
import '../index.css';

export function CreatePost(props) {

    const handleClick = (event) => {
        console.log("you clicked create post!");
    }

    return (
        <button className="create-post mx-2 mt-3" type="button" onClick={handleClick}>
            Create New Post
        </button>
    )
}
