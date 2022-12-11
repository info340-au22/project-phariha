import React, { useState } from 'react';
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database' //realtime

// this component adds a post to the database 

export function ComposePostForm(props) {
    const [userName, setUserName] = useState("");
    const [date, setDate] = useState("");
    const [major, setMajor] = useState("");
    const [course, setCourse] = useState("");
    const [professor, setProfessor] = useState("");
    const [courseranking, setCourseRanking] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [homeworkload, setHomeworkLoad] = useState("");
    const [takeagain, setTakeAgain] = useState("");
    const [recommend, setRecommend] = useState("");

    // const addPostCallback = props.addPostCallback;
    // console.log(addPostCallback);

    const handleUserName = (event) => {
        const inputtedValue = event.target.value;
        setUserName(inputtedValue); //update state and re-render!
    }
    const handleDate = (event) => {
        const inputtedValue = event.target.value;
        setDate(inputtedValue); //update state and re-render!
    }
      
    const handleMajor = (event) => {
      const inputtedValue = event.target.value;
      setMajor(inputtedValue); //update state and re-render!
    }

    const handleCourse = (event) => {
      const inputtedValue = event.target.value;
      setCourse(inputtedValue); //update state and re-render!
    }

    const handleProfessor = (event) => {
      const inputtedValue = event.target.value;
      setProfessor(inputtedValue); //update state and re-render!
    }

    const handleCourseRanking = (event) => {
      const inputtedValue = event.target.value;
      setCourseRanking(inputtedValue); //update state and re-render!
    }

    const handleDifficulty = (event) => {
      const inputtedValue = event.target.value;
      setDifficulty(inputtedValue); //update state and re-render!
    }

    const handleHomeworkLoad = (event) => {
      const inputtedValue = event.target.value;
      setHomeworkLoad(inputtedValue); //update state and re-render!
    }
    
    const handleTakeAgain = (event) => {
      const inputtedValue = event.target.value;
      setTakeAgain(inputtedValue); //update state and re-render!
    }

    const handleRecommend = (event) => {
      const inputtedValue = event.target.value;
      setRecommend(inputtedValue); //update state and re-render!
    }

   

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitting", userName);

        // formArray = [userName, date, major, course, professor, courseranking, difficulty, homeworkload, takeagain, recommend]
        // addPost(formArray);

        addUserName(userName) //call the function
        addDate(date);
        // addPost(major);
        // addPost(course);
        // addPost(professor);
        // addPost(courseranking);
        // addPost(difficulty);
        // addPost(homeworkload);
        // addPost(takeagain);
        // addPost(recommend);
        setUserName(""); //empty the input!
        setDate("");
        setMajor("");
        setCourse("");
        setProfessor("");
        setCourseRanking("");
        setDifficulty("");
        setHomeworkLoad("");
        setTakeAgain("");
        setRecommend("");
    }
      // have addPost take in an array of values and map to the corresponding labels ??
      // const addPost = (postText) => {
      //   const newPost = {
      //       "username":postText,
      //       "date": postText,
      //       "major": postText,
      //       "course": postText,
      //       "professor":postText,
      //       "courseranking":postText,
      //       "difficulty":postText,
      //       "homeworkload":postText,
      //       "takeagain":postText,
      //       "recommend":postText,
      //       "timestamp": Date.now(),
      //   } 
      
    const addUserName = (userName) => {
        const newPost = {
            "userName": userName,
            "timestamp": Date.now(),
        } 
        const db = getDatabase(); //"the database"
        const allNewPostsRef = ref(db, 'allNewPosts');
        firebasePush(allNewPostsRef, newPost);
    }

    const addDate = (date) => {
      const newPost = {
          "date": date,
          "timestamp": Date.now(),
      } 
      const db = getDatabase(); //"the database"
      const allNewPostsRef = ref(db, 'allNewPosts');
      firebasePush(allNewPostsRef, newPost);
    }
      
           
        
    
      
    

    return (
        <div className="compose-post-container">
          <h1 className="compost-post-header">Create a Post</h1>        
            <form className="my-2" onSubmit={handleSubmit}>
              <div className="input-group">
                {/* <textarea className="form-control" rows="2" placeholder='Review a course' onChange={handleChange}></textarea> */}
                <div className='col-9'>
                  <label>UserName:
                    <input className ='row' type="text" onChange={handleUserName}></input>
                  </label>
                </div>
                <div className='col-9'>
                    <label>Date:
                      <input className='row' type="text" onChange={handleDate}></input>
                    </label>
                </div>
                <div className='col-9'>
                  <label>Major:
                    <input className='row' type="text" onChange={handleMajor}></input>
                  </label>
                </div>
                <div className='col-9'>
                  <label>Course:
                    <input className='row' type="text" onChange={handleCourse}></input>
                  </label>
                </div>
                <div className='col-9'>
                    <label>Professor:
                      <input className="row" type="text" onChange={handleProfessor}></input>
                    </label>
                </div>
                <div className='col-9'>
                  <label>Course Ranking (1-5):
                    <input className="row" type="text" onChange={handleCourseRanking}></input>
                  </label>
                </div>
                <div className="col-9">
                  <label>Difficulty (1-5):
                    <input className="row" type="text" onChange={handleDifficulty}></input>
                  </label>
                </div>
                <div className="col-9">
                  <label>Homework Load:
                    <input className="row" type="text" onChange={handleHomeworkLoad}></input>
                  </label>
                </div>
                <div className="col-9">
                  <label>Take Again:
                    <input className="row" type="text" onChange={handleTakeAgain}></input>
                  </label>
                </div>
                <div className="col-9">
                  <label>Recommend:
                    <input className="row" type="text" onChange={handleRecommend}></input>
                  </label>
                </div>
              </div>
              <button className='row compose-form btn btn-secondary' type='submit' disabled={false}>Submit</button>
            </form>
        </div>
      );


}