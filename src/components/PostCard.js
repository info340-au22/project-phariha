import { React, useState, useEffect } from 'react';
import '../index.css';
import FILTER_OPTIONS from '../data/filter-options.json';
import COURSE_POSTS from '../data/course-posts.json';


export function PostCard(props) {
    const newPosts = props.newPosts;

    const [displayedPosts, setDisplayedPosts] = useState([]);
    const [clickedOptions, setClickedOptions] = useState([]);
    const handleChange = (event) => {
        if (event.target.checked) {
            setClickedOptions([...clickedOptions, { "name": event.target.name, "selected": true }]);

            COURSE_POSTS.map((names) => {
                if (event.target.name === names.major && !displayedPosts.includes(names)) {
                    setDisplayedPosts(displayedPosts => displayedPosts.concat(names));
                }
                else if (event.target.name === names.professor && !displayedPosts.includes(names)) {
                    setDisplayedPosts(displayedPosts => displayedPosts.concat(names));

                }
                else if (event.target.name === names.level && !displayedPosts.includes(names)) {
                    setDisplayedPosts(displayedPosts => displayedPosts.concat(names));
                }

            })

        } else {
            clickedOptions.map((option) => {
                if (option.name === event.target.name) {

                    option.selected = false;
                }
            })


            const copy = [...clickedOptions];
            setClickedOptions([]);

            const currData = copy.map((option) => {

                if (option.selected) {
                    setClickedOptions(clickedOptions => clickedOptions.concat(option));
                    return option;

                }

            });

            setDisplayedPosts([]);
            currData.map((option) => {
                if (option != undefined) {
                    
                    COURSE_POSTS.map((post) => {
                        console.log(post.professor);
                        if (option.name === post.major) {
                            setDisplayedPosts(displayedPosts => displayedPosts.concat(post));
                        }

                        else if (option.name === post.professor) {
                            setDisplayedPosts(displayedPosts => displayedPosts.concat(post));
                            
                        }

                        else if (option.name === post.level) {
                            setDisplayedPosts(displayedPosts => displayedPosts.concat(post));
                        }
                    })
                }
            })
        }


    }
    //useEffect(() => {
        //console.log(displayedPosts);
        //console.log(clickedOptions);

    //});
    
    const postItemArray = displayedPosts.map((postObj, index) => {
        const element = (
            <PostItem
                postData={postObj}
                key={index}
            />
        )
        return element;
    })

    const newPostArray = newPosts.map((postObj) => {
        console.log(postObj);
            const element = (
                <PostItem 
                    postData={postObj}
                    key={postObj.key}
                />
            )
            return element;
        })    

    const showFilter = FILTER_OPTIONS.map((filterObj) => {
        const filterOption = <ul key={filterObj.option} className='filter-option'><input type="checkbox" name={filterObj.option} onChange={(e) => handleChange(e)} /><a>&nbsp;{filterObj.option}</a></ul>
        return filterOption;
    })

    return (
        <div className='container-fluid'>
            <div id='post' className='row'>
                    <div id="post" className='col-sm-4 col-lg-3 card text-dark fs-5'>
                        <ul className='card-body list-unstyled p-2'>
                            <p id='post' className='filter-options-title'>Filter Options</p>
                            <p id='post' className='filter-options-p'>Please select filter(s) to view content</p>
                            {showFilter}
                        </ul>
                    </div>
                <div id='post' className="col-sm scrollable-pane flex-grow-1 d-inline">
                    {/* post cards */}
                    <div id='post'>
                        {postItemArray}
                        {newPostArray}
                    </div>
                </div>
            </div>
        </div>
    )
}

function PostItem(props) {

    const {userName, date, major, course, professor, courseRating, difficulty, homeworkLoad, takeAgain, recommend } = props.postData;
    return (
        <div id='post' className="card message d-flex mb-2 fs-5">
            <div id='post' className="card-body flex-grow-1">
                <div id='post' className='card-contents'>

                    <div className='card-title flex-column'>
                        <p id='post' className="course-title m-0 col mx-2">{course}</p>
                        <p id='post' className='date-title m-0'>{date}</p>
                    </div>

                    <p id='post' className='course txt m-0'>Name: {userName}</p>
                    <p id='post' className='major txt m-0'>Major: {major}</p>        
                    <p id='post' className='professor txt m-0'>Professor: {professor}</p>
                    <p id='post' className='courseRating txt m-0'>Course Rating: {courseRating}</p>
                    <p id='post' className='difficulty txt m-0'>Difficulty: {difficulty}</p>
                    <p id='post' className='homeworkLoad txt m-0'>Homework Load: {homeworkLoad}</p>
                    <p id='post' className='takeAgain txt m-0'>Take Again: {takeAgain}</p>
                    <p id='post' className='recommend txt m-0'>Recommend: {recommend}</p>
                </div>
            </div>
        </div>
    )
}