import React, { useState, useEffect } from 'react';
import { NavBar } from './NavBar';
import { CreatePost } from './CreatePost';
import { SortPost } from './SortPost';
import { Footer } from './Footer';
import { FilterList } from './FilterList';
import { FilterTrial } from './FilterTrial';
import { PostCard } from './PostCard';
import { FilterButton } from './FilterButton';
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

    const handleClick = (event) => {
        console.log("you clicked create post!");
    }
    //what content should my App look like?
    return (
        <div className='post-page'>
            {/* <NavBar page={displayPages} currentPage={currentPage} /> */}
            <div className='d-flex d-inline sort-filter d-none d-sm-none d-md-block'>
                <Link to="/ComposePostForm" className="btn btn-primary create-post mx-2 mt-3">Create New Post</Link>
                <SortPost />
            </div>
            <div className='sort-filter-modal d-block d-md-none d-lg-none'>
                <FilterButton />
            </div>
            <div className='d-flex'>
                <FilterTrial />
                <PostCard newPosts={newPosts}/>
            </div>
            <div className="col d-flex flex-column"></div>
            {/* <Footer /> */}
        </div >
    );
}
