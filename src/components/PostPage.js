import React, { useState, useEffect } from 'react';
import { NavBar } from './NavBar';
import { CreatePost } from './CreatePost';
import { PostCard } from './PostCard';
import { Link } from 'react-router-dom';
import '../index.css';
import { ComposePostForm } from './ComposePostForm';
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database' //realtime


export function PostPage(props) {

    const [newPosts, setNewPosts] = useState([]);

    useEffect(() => {

        const db = getDatabase(); 
        const allNewPostsRef = ref(db, "allNewPosts");

        //when db value changes
        const offFunction = onValue(allNewPostsRef, (snapshot) => {
            const valueObj = snapshot.val();
            // extract confusing keys from object, creates an array of confusing keys(objKeys)
            const objKeys = Object.keys(valueObj);
            
            const objArray = objKeys.map((keyString) => {
                // take each keyString and use it to extract each value(object) it is associated with in valueObj
                const postObj = valueObj[keyString];
                postObj.key = keyString;
                return postObj;
            })
            // set this array of objects to newPosts
            setNewPosts(objArray);
        })

        function cleanup() {
            console.log("component is being removed");
            offFunction();
        }
        return cleanup; 
    }, [])

   
    return (
        <div className='post-page'>
            
            <div className='d-flex d-inline sort-filter'>
                <Link to="/ComposePostForm" className="postbutton btn">&nbsp;Create New Post&nbsp;</Link>
            </div>
           
            <div className=''>
                <PostCard newPosts={newPosts}/>
            </div>
            
        </div >
    );
}
