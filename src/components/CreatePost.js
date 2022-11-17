import React from 'react';
import '../index.css';


export function CreatePost(props) {

    const handleClick = (event) => {
        console.log("you clicked create post!");
    }

    return (
        <div id="post" className="button mb-2 mt-2">
            <button className="create-post" type="button" onClick={handleClick}>
                Create New Post
            </button>
        </div>
    )
}