import React, { useState } from 'react';
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database' //realtime
import { NavLink } from 'react-router-dom';
// this component adds a post to the database 

export function ComposePostForm(props) {
  const [userName, setUserName] = useState("");
  // const [date, setDate] = useState("");
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
  // const handleDate = (event) => {
  //     const inputtedValue = event.target.value;
  //     setDate(inputtedValue); //update state and re-render!
  // }

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

    const date = new Date();
    let currentDate = date.toLocaleDateString();

    let formObject = { "userName": userName, "date": currentDate, "major": major, "course": course, "professor": professor, "courseRating": courseRating, "difficulty": difficulty, "homeworkLoad": homeworkLoad, "takeAgain": takeAgain, "recommend": recommend }

    addFormObject(formObject);

    setUserName(""); //empty the inputs!
    // setDate("");
    setMajor("");
    setCourse("");
    setProfessor("");
    setCourseRating("");
    setDifficulty("");
    setHomeworkLoad("");
    setTakeAgain("");
    setRecommend("");
    // return <p>You submitted!</p>
  }

  const addFormObject = (formObject) => {
    console.log(formObject);
    const newPost =
      formObject;

    const db = getDatabase(); //"the database"
    const allNewPostsRef = ref(db, 'allNewPosts');
    firebasePush(allNewPostsRef, newPost);
  }

  const successMessage = () => {
    let alertP = document.querySelector('p');
    alertP.className = '';
    console.log(alertP);
  }

  return (
    <div>
      <div id='compose-post-header'>
        <h1 className='post-header'>Review a Course</h1>
      </div>
      <div className="compose-post-container">
        <form className="my-2" onSubmit={handleSubmit}>
          <div className="input-group">
            <div className='col-9'>
              <label>Name:
                <input className='row required' type="text" required={true} onChange={handleUserName}></input>
              </label>
            </div>
            <div className='col-9'>
              <label>Major:
                <span className="asterisk_input"></span>
                <input className='row required' type="text" required={true} onChange={handleMajor}></input>

              </label>
            </div>
            <div className='col-9'>
              <label>Course:
                <span className="asterisk_input"></span>
                <input className='row required' type="text" required={true} onChange={handleCourse}></input>

              </label>
            </div>
            <div className='col-9'>
              <label>Professor:
                <span className="asterisk_input"></span>
                <input className="row required" type="text" required={true} onChange={handleProfessor}></input>
              </label>
            </div>
            <div className='col-9'>
              <label>Course Ranking (1-5):
                <span className="asterisk_input"></span>
                <input className="row required" type="text" required={true} onChange={handleCourseRating}></input>
              </label>
            </div>
            <div className="col-9">
              <label>Difficulty (1-5):
                <span className="asterisk_input"></span>
                <input className="row required" type="text" required={true} onChange={handleDifficulty}></input>
              </label>
            </div>
            <div className="col-9">
              <label>Homework Load:
                <span className="asterisk_input"></span>
                <input className="row required" type="text" required={true} onChange={handleHomeworkLoad}></input>
              </label>
            </div>
            <div className="col-9">
              <label>Take Again ?:
                <span className="asterisk_input"></span>
                <input className="row required" type="text" required={true} onChange={handleTakeAgain}></input>
              </label>
            </div>
            <div className="col-9">
              <label>Recommend ?:
                <span className="asterisk_input"></span>
                <input className="row required" type="text" required={true} onChange={handleRecommend}></input>
              </label>
            </div>
          </div>

          {/* <NavLink to='/posts'> */}
          <button className='submit-form-button row compose-form btn btn-secondary' type='submit' disabled={false} onClick={successMessage}>Submit</button>
          {/* </NavLink> */}
          <p className="d-none">If you have successfully filled out all the required fields of the form, please return to Post page to view your contribution.</p>
          {/* <div className="submit-post mx-2 mt-3">
                    <Link to="../posts">
                    <button type="submit" className='row-required compose-form btn btn-secondary' disabled={false}>
                        &nbsp;Submit&nbsp;
                    </button>
                    </Link>
                </div> */}

        </form>

      </div>
    </div>
  );


}



// use Navigate function 
