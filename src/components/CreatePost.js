import React from 'react';
import '../index.css';

export function CreatePost(props) {

    const pageInfo = "Create a post to share your experience in a class with others!"

    return (
        <div>
            <h1 className='create-post-heading'>Create a Post</h1>
            <p className='create-post-text'>{pageInfo}</p>
        <form className="create-post-form">
            <p>
            <label>
                Full Name: <input type="text" name="name" />
            </label>
            {/* <input type="submit" value="SubmitName" /> */}
            </p>
            <p>
            <label>
                Major: <input type="text" name="major" />
            </label>
            {/* <input type="submit" value="SubmitMajor" /> */}
            </p>
            <p>
            <label>
                Course: <input type="text" name="course" />
            </label>
            {/* <input type="submit" value="SubmitCourse" /> */}
            </p>
            <p>
            <label>
                Professor: <input type="text" name="professor" />
            </label>
            {/* <input type="submit" value="SubmitProfessor" /> */}
            </p>
            <p>
            <label>
                Course Ranking (1-5): <input type="text" name="courseRank" />
            </label>
            {/* <input type="submit" value="SubmitCourseRank" /> */}
            </p>
            <p>
            <label>
                Difficulty (1-5): <input type="text" name="difficulty" />
            </label>
            {/* <input type="submit" value="SubmitDifficulty" /> */}
            </p>
            <p>
            <label>
                Homework Load: <input type="text" name="hwLoad" />
            </label>
            {/* <input type="submit" value="SubmitHWLoad" /> */}
            </p>
            <p>
            <label>
                Take Again: <input type="radio" name="take_again" value="Yes" />
                <label form="yes">&nbsp;Yes</label>&nbsp;&nbsp;
                <input type="radio" name="take_again" value="No" />
                <label form="no">&nbsp;No</label>
            </label>
            {/* <input type="submit" value="Submit" /> */}
            </p>
            <p>
            <label>
                Would you recommend this course: <input type="radio" name="recommend" value="Yes" />
                <label form="yes">&nbsp;Yes</label>&nbsp;&nbsp;
                <input type="radio" name="recommend" value="No" />
                <label form="no">&nbsp;No</label>
            </label>
            </p>
        </form>
        </div>
    )
}
