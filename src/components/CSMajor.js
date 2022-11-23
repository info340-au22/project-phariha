import React from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import '../index.css';

const pageName = "A Guide To the University of Washington's Major System";
const majorName = "Computer Science";
const prereqClasses = "Prerequisite Classes";

const PREREQ_INPUT = [
    <div><a href="http://www.washington.edu/students/crscat/math.html#math124">MATH 124, 125 & 126</a>, (or Honors <a href="http://www.washington.edu/students/crscat/math.html#math134">MATH 134, 135 & 136</a>)</div>,
    <div><a href="https://www.washington.edu/students/crscat/cse.html#cse121">CSE 121, 122 & 123</a> or <a href="http://www.washington.edu/students/crscat/cse.html#cse142">CSE 142 & 143</a></div>,
    <div>Five credits from the list of approved natural science courses for Computer Science on the <a href="https://www.cs.washington.edu/academics/ugrad/current-students/degree/courses/cs-natural-science">Allen School website</a></div>,
    <div>Five credits of <a href="https://www.washington.edu/uaa/advising/degree-overview/general-education/english-composition/">English Composition</a></div>
];

const howToApply = "How to Apply";

const APP_DEADLINE_INPUT = [{
    quarter: "autumn",
    date: "July 1st"
},
{
    quarter: "spring",
    date: "January 15th"
}];
const deadlineArray = APP_DEADLINE_INPUT.map((deadline, index) => {
    const listType = "sub-li";
    const element = <li key={index} className={listType}>To enter the program in the {deadline.quarter} quarter: {deadline.date}</li>;
    return element;
});

const HOW_TO_APPLY_INPUT = [
    <div>Application Deadlines:<ul>{deadlineArray}</ul></div>, <div>3 required and 1 optional <a href="https://www.engr.washington.edu/uapp/essay_questions.phtml#dept_essay">essay questions</a></div>,
    "Complete all prerequisites before applying",
    <div>More information about applying to the Computer Science major can be found <a href="https://www.cs.washington.edu/academics/ugrad/admissions/currentuw">here</a></div>,
    <div>Related majors can be found <a href="https://www.cs.washington.edu/academics/ugrad/nonmajor-options/related-majors">here</a></div>
];

const graduationReqHeadding = "Graduation Requirements: Computer Science Component";
const fundamentals = "Fundamentals (24-25 credits)";
const coreAndElectives = "Core and Electives (33 credits)";

const coreAndElectivesText = "At least 33 additional credits from courses on the approved CSE Electives list, including at least:";
const CORE_ELECT_INPUT = [
    <div>(12-16 credits) Four, 400-level courses from the <a href="https://www.cs.washington.edu/academics/ugrad/current-students/degree/courses">CSE Core Courses</a></div>,
    <div>(6-8 credits) Two additional <a href="https://www.cs.washington.edu/academics/ugrad/current-students/degree/courses">CSE Core Courses</a> (300 or 400 level)</div>,
    <div>(3-5 credits)Either 1 additional <a href="https://www.cs.washington.edu/academics/ugrad/current-students/degree/courses">CSE Core Course</a> or 1 course from the <a href="https://www.cs.washington.edu/academics/ugrad/current-students/degree/courses/capstone-courses">CSE Capstone list</a></div>,
    <div>(4-12 credits) Additional courses from either the <a href="https://www.cs.washington.edu/academics/ugrad/current-students/degree/courses">CSE Core Courses</a> list or the CSE Elective list to bring total <a href="https://www.cs.washington.edu/academics/ugrad/current-students/degree/courses/elective">CSE Elective credits to 33</a></div>
];

const coreElectArray = CORE_ELECT_INPUT.map((classes, index) => {
    let listType = "sub-li";
    const element = <li key={index} className={listType}>{classes}</li>;
    return element;
})

const FUNDAMENTAL_CLASSES_INPUT = [
    "123 Intro to Computer Programming III OR (5 credits) CSE 143 Computer Programming II",
    "311 Foundations of Computing I",
    "312 Foundations of Computing II",
    "331 Software Design and Implementation",
    "332 Data Structures and Parallelism",
    "351 The Hardware/Software Interface"
];

const prereqClassArray = PREREQ_INPUT.map((prereq, index) => {
    const element = <li key={index}>{prereq}</li>;
    return element;
})

const howToApplyArray = HOW_TO_APPLY_INPUT.map((step, index) => {
    const element = <li key={index}>{step}</li>;
    return element;
})
const fundamentalsArray = FUNDAMENTAL_CLASSES_INPUT.map((className, index) => {
    let listType = "sub-li";
    const element = <li key={index} className={listType}>(4 credits) CSE {className}</li>;
    return element;
})

export function CSMajor(props) {
    return (
        <div className='test'>
            <NavBar />
            <div>
                <header className="major-page">
                    <div className="container">
                        <div className="xs-4 sm-4 md-6">
                            <h2 className="p-3">{pageName}</h2>
                        </div>
                    </div>
                </header>
                <h1 className="interact-h1">{majorName}</h1>
                <div id="container">
                    <h2 className="interact-h2">{prereqClasses}</h2>
                    <ul className="interact-list-cs">{prereqClassArray}</ul>

                    <h2 className="interact-h2">{howToApply}</h2>
                    <ul className="interact-list-cs">{howToApplyArray}</ul>

                    <h2 className="interact-h2">{graduationReqHeadding}</h2>
                    <ul className="interact-list-cs">
                        <li className="category">{fundamentals}</li>
                        <ul>{fundamentalsArray}</ul>
                        <li className="category">{coreAndElectives}</li>
                        <div>{coreAndElectivesText}</div>
                        <ul>{coreElectArray}</ul>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>

    )
}