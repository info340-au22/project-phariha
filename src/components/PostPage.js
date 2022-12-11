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
            // convert object into array
            const objKeys = Object.keys(valueObj);
            const objArray = objKeys.map((keyString) => {
                const postObj = valueObj[keyString];
                postObj.key = keyString;
                return postObj;
            })
            console.log(objArray);
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
            {/* <NavBar page={displayPages} currentPage={currentPage} /> */}
            <div className='d-flex d-inline sort-filter d-none d-sm-none d-md-block'>
                <Link to="/ComposePostForm" className="create-post-button btn btn-primary create-post mx-2 mt-3">Create New Post</Link>
            </div>
           
            <div className=''>
                <PostCard newPosts={newPosts}/>
            </div>
            {/* <Footer /> */}
        </div >
    );
}
