import React from 'react';
import '../index.css';
import POST_HISTORY from '../data/course-posts.json'
import { FilterTrial, showFilter } from './FilterTrial';


export function PostCard(props) {

    const newPosts = props.newPosts;

    // only show current posts
    const showPost = POST_HISTORY.filter((postObj) => {
        return postObj.course;
    })

    const postItemArray = showPost.map((postObj) => {
        const element = (
            <PostItem
                postData={postObj}
                key={postObj.date}
            />
        )
        return element;
    })

    // *databaseinfo* will be passed as a prop to PostCard (newPosts) 
    const newPostArray = newPosts.map((postObj) => {
        console.log(postObj);
            const element = (
                <PostItem 
                    postData={postObj}
                    key={postObj.date}
                />
            )
            return element;
        })    
        //***(array resulting from the mapping of new post data)***
        // if(newPostArray.length === 0){
        //     return <p>No new posts yet!</p>
        //   }


    return (
        <div id='post' className="scrollable-pane flex-grow-1">
            <div id='post' className="mt-2 mx-2">
                {postItemArray}
                {newPostArray} 
                {/* array of new posts in sync with firebase */}
            </div>
        </div>
    )
}

function PostItem(props) {

    const { userName, date, major, course, professor, courseRating, difficulty, homeworkLoad, takeAgain, recommend } = props.postData;
    return (
        <div id='post' className="card message d-flex mb-2">
            <div id='post' className="card-body flex-grow-1">
                <div id='post' className='card-contents'>

                    <div className='card-title flex-column'>
                        <p id='post' className="user-name m-0 col mx-2">{userName}</p>
                        <p id='post' className='date m-0'>{date}</p>
                    </div>
                    
                    <p id='post' className='major m-0'>Major: {major}</p>
                    <p id='post' className='course m-0'>Course: {course}</p>
                    <p id='post' className='professor m-0'>Professor: {professor}</p>
                    <p id='post' className='courseRating m-0'>Course Rating: {courseRating}</p>
                    <p id='post' className='difficulty m-0'>Difficulty: {difficulty}</p>
                    <p id='post' className='homeworkLoad m-0'>Homework Load: {homeworkLoad}</p>
                    <p id='post' className='takeAgain m-0'>Take Again: {takeAgain}</p>
                    <p id='post' className='recommend m-0'>Recommend: {recommend}</p>
                </div>
            </div>
        </div>
    )
}