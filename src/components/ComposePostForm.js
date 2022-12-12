import React, { useState } from 'react';
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database' //realtime

// this component adds a post to the database 

export function ComposePostForm(props) {
    const [userName, setUserName] = useState("");
    const [date, setDate] = useState("");
    const [major, setMajor] = useState("");
    const [course, setCourse] = useState("");
    const [professor, setProfessor] = useState("");
    const [courseRating, setCourseRating] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [homeworkLoad, setHomeworkLoad] = useState("");
    const [takeAgain, setTakeAgain] = useState("");
    const [recommend, setRecommend] = useState("");

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

    const handleCourseRating = (event) => {
      const inputtedValue = event.target.value;
      setCourseRating(inputtedValue); //update state and re-render!
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

        let formObject = {"userName": userName, "date": date, "major": major, "course": course, "professor": professor, "courseRating": courseRating, "difficulty": difficulty, "homeworkLoad" : homeworkLoad, "takeAgain": takeAgain, "recommend": recommend}

        addFormObject(formObject);

        setUserName(""); //empty the inputs!
        setDate("");
        setMajor("");
        setCourse("");
        setProfessor("");
        setCourseRating("");
        setDifficulty("");
        setHomeworkLoad("");
        setTakeAgain("");
        setRecommend("");
    }


    const addFormObject = (formObject) => {
      console.log(formObject);
      const newPost = 
          formObject;
      
      const db = getDatabase(); //"the database"
      const allNewPostsRef = ref(db, 'allNewPosts');
      firebasePush(allNewPostsRef, newPost);
    }
           
    

    return (
        <div className="compose-post-container">
          <h1 className="compost-post-header">Create a Post</h1>        
            <form className="my-2" onSubmit={handleSubmit}>
              <div className="input-group">
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
                    <input className="row" type="text" onChange={handleCourseRating}></input>
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