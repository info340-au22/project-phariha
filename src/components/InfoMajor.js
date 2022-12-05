import React from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import '../index.css';

const pageName = "A Guide To the University of Washington's Major System";
const majorName = "Informatics";
const prereqClasses = "Prerequisite Classes";
const warning = "*Applicants are allowed to apply to the Informatics major a maximum of two times.";
const csPrereqClasses = [
    { name: "CSE 121,", link: "http://www.washington.edu/students/crscat/cse.html#cse121" },
    { name: "CSE 122,", link: "http://www.washington.edu/students/crscat/cse.html#cse122" },
    { name: "CSE 123,", link: "http://www.washington.edu/students/crscat/cse.html#cse123" },
    { name: "CSE 142,", link: "http://www.washington.edu/students/crscat/cse.html#cse142" },
    { name: "CSE 143,", link: "http://www.washington.edu/students/crscat/cse.html#cse143" },
    { name: "CSE 143x,", link: "http://www.washington.edu/students/crscat/cse.html#cse143x" },
    { name: "CSE 154,", link: "http://www.washington.edu/students/crscat/cse.html#cse154" },
    { name: "CSE 160,", link: "http://www.washington.edu/students/crscat/cse.html#cse160" },
    { name: "CSE 163,", link: "http://www.washington.edu/students/crscat/cse.html#cse163" },
    { name: "CSE 373,", link: "http://www.washington.edu/students/crscat/cse.html#cse373" },
    { name: "INFO/STAT/CSE 180", link: "http://www.washington.edu/students/crscat/info.html#info180" }
];

const statPrereqClasses = [
    { name: "STAT 220,", link: "http://www.washington.edu/students/crscat/cse.html#stat220" },
    { name: "STAT 221,", link: "http://www.washington.edu/students/crscat/cse.html#stat221" },
    { name: "BIOSTAT 310,", link: "http://www.washington.edu/students/crscat/cse.html#biostat310" },
    { name: "CSE 312,", link: "http://www.washington.edu/students/crscat/cse.html#cse312" },
    { name: "EDPSY 490,", link: "http://www.washington.edu/students/crscat/cse.html#edpsy490" },
    { name: "IND E 315,", link: "http://www.washington.edu/students/crscat/cse.html#inde315" },
    { name: "MATH 390,", link: "http://www.washington.edu/students/crscat/cse.html#math390" },
    { name: "MATH 394,", link: "http://www.washington.edu/students/crscat/cse.html#math394" },
    { name: "PSYCH 315,", link: "http://www.washington.edu/students/crscat/cse.html#psych315" },
    { name: "PSYCH 317,", link: "http://www.washington.edu/students/crscat/cse.html#psych317" },
    { name: "QMETH 201,", link: "http://www.washington.edu/students/crscat/cse.html#qmeth201" },
    { name: "Q SCI 381,", link: "http://www.washington.edu/students/crscat/cse.html#qsci381" },
    { name: "STAT 290", link: "http://www.washington.edu/students/crscat/info.html#stat290" },
    { name: "STAT 311", link: "http://www.washington.edu/students/crscat/info.html#stat311" },
    { name: "STAT 390", link: "http://www.washington.edu/students/crscat/info.html#stat390" },

];

const csClassArray = csPrereqClasses.map((classInfo, index) => {
    const element = <span key={index}> <a href={classInfo.link}>{classInfo.name}</a></span>;
    return element;
});

const statClassArray = statPrereqClasses.map((classInfo, index) => {
    const element = <span key={index}> <a href={classInfo.link}>{classInfo.name}</a></span>;
    return element;
});

const PREREQ_INPUT = [
    <div><a href="http://www.washington.edu/students/crscat/info.html#info200">INFO 200</a></div>,
    <div>One approved computer programming course: <a href="http://www.washington.edu/students/crscat/info.html#info201">INFO 201</a> or one of the following: {csClassArray}</div>,
    <div>One approved staticstics course: {statClassArray}</div>,
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

const deadlineArray = APP_DEADLINE_INPUT.map((deadline, index) => {
    const listType = "sub-li";
    const element = <li key={index} className={listType}>To enter the program in the {deadline.quarter} quarter: {deadline.date}</li>;
    return element;
});

const HOW_TO_APPLY_INPUT = [
    <div>Application Deadlines:<ul>{deadlineArray}</ul></div>,
    <div>1 required <a href="https://ischool.uw.edu/programs/informatics/admissions/apply">application essay</a></div>,
    "Complete all prerequisites before applying",
    <div>More information about applying to the Informatics major can be found <a href="https://ischool.uw.edu/programs/informatics/admissions/current-students">here</a></div>
];

const graduationReqHeadding = "Graduation Requirements: Informatics Component";
const fundamentals = "Lower Level Requirements";
const coreAndElectives = "Core Classes";

const CORE_ELECT_INPUT = [
    "300: Research Methods",
    "330: Databases & Data Modeling",
    "340: Client-Side Development",
    "350: Information Ethics and Policy",
    "360: Design Methods",
    "380: Information Systems Analysis and Management",
    "490: Capstone Project I",
    "491: Capstone Project II"
];

const coreElectArray = CORE_ELECT_INPUT.map((classes, index) => {
    let listType = "sub-li";
    const element = <li key={index} className={listType}>INFO {classes}</li>;
    return element;
})

const FUNDAMENTAL_CLASSES_INPUT = [
    "INFO 200: Intellectual Foundations of Informatics",
    "INFO 201: Foundational Skills for Data Science"
];

const electiveText = <div>After these foundational classes, students must take a range of <a href="http://www.washington.edu/students/crscat/info.html">Informatics electives</a>, culminating in either a Capstone project for students interested in careers in industry or a research project for those interested in pursuing academic or industry research. <a href="https://ischool.uw.edu/programs/informatics/curriculum/degree-planning/approved-electives">View the list of approved electives.</a></div>;

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
    const element = <li key={index} className={listType}>{className}</li>;
    return element;
})

export function InfoMajor(props) {
    return (
        <div>
            {/* <NavBar /> */}
            <div>
                <header className="major-page">
                    <div className="container">
                        <div className="xs-4 sm-4 md-6">
                            <h2 className="p-3">{pageName}</h2>
                        </div>
                    </div>
                </header>
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
                        <ul>{coreElectArray}</ul>

                    </ul>
                    <div className="interact-list-cs">{electiveText}</div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>

    )
}