import React from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import '../index.css';

const pageName = "A Guide To the University of Washington's Major System";
const majorName = "Informatics";
const prereqClasses = "Prerequisite Classes";
const warning = "*Applicants are allowed to apply to the Informatics major a maximum of two times.";

const PREREQ_INPUT = [
    <div><a href="http://www.washington.edu/students/crscat/info.html#info200">INFO 200</a></div>,
    <div><a href="https://www.washington.edu/students/crscat/cse.html#cse121">CSE 121, 122 & 123</a> or <a href="http://www.washington.edu/students/crscat/cse.html#cse142">CSE 142 & 143</a></div>,
    <div>Five credits from the list of approved natural science courses for Computer Science on the <a href="https://www.cs.washington.edu/academics/ugrad/current-students/degree/courses/cs-natural-science">Allen School website</a></div>,
    <div>Any <a href="https://www.washington.edu/uaa/advising/degree-overview/general-education/">I&S course</a> (Individuals and Societies) other than INFO 200</div>,
    <div>More informaion about the major's prerequsite classes can be found <a href="https://ischool.uw.edu/programs/informatics/admissions/current-students/prerequisites">here</a></div>
];

const howToApply = "How to Apply";

const APP_DEADLINE_INPUT = [{
    quarter: "winter",
    date: "September 30th"
},
{
    quarter: "autumn",
    date: "early April"
}];

const deadlineArray = APP_DEADLINE_INPUT.map((deadline) => {
    const listType = "sub-li";
    const element = <li className={listType}>To enter the program in the {deadline.quarter} quarter: {deadline.date}</li>;
    return element;
});

const HOW_TO_APPLY_INPUT = [
    <div>Application Deadlines:<ul>{deadlineArray}</ul></div>, 
    <div>1 required <a href="https://ischool.uw.edu/programs/informatics/admissions/apply">application essay</a></div>,
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

const coreElectArray = CORE_ELECT_INPUT.map((classes) => {
    let listType = "sub-li";
    const element = <li className={listType}>{classes}</li>;
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

const prereqClassArray = PREREQ_INPUT.map((prereq) => {
    const element = <li>{prereq}</li>;
    return element;
})

const howToApplyArray = HOW_TO_APPLY_INPUT.map((step) => {
    const element = <li>{step}</li>;
    return element;
})
const fundamentalsArray = FUNDAMENTAL_CLASSES_INPUT.map((className) => {
    let listType = "sub-li";
    const element = <li className={listType}>(4 credits) CSE {className}</li>;
    return element;
})

export function InfoMajor(props) {
    return (
        <div className='test'>
            <NavBar />
            <div>
                <h1 className="interact-h1">{majorName}</h1>
                <p className="interact-h2">{warning}</p>
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
                        <p>{coreAndElectivesText}</p>
                        <ul>{coreElectArray}</ul>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>

    )
}