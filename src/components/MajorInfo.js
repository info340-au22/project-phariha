import React from 'react';
import MAJOR_DATA from '../data/major-data.json'
import _ from 'lodash';
import '../index.css';

export function MajorInfo(props) {
    const pageName = "A Guide To the University of Washington's Major System";
    const prereqClasses = "Prerequisite Classes";
    const howToApply = "How to Apply";
    const graduationReqHeadding = "Graduation Requirements: Computer Science Component";
    const fundamentals = "Fundamentals (24-25 credits)";
    const coreAndElectives = "Core and Electives (33 credits)";

    const majorName = props.major;
    const majorData = _.find(MAJOR_DATA.majors, { major: majorName });

    const prereqClassArray = [];
    const howToApplyArray = [];
    const fundamentalsArray = [];
    const coreElectArray = [];
    Object.keys(majorData).forEach((entry) => {
        if (entry.startsWith("prereq")) {
            let element = <li key={entry}>{majorData[entry]}</li>;
            prereqClassArray.push(element);
        };

        if (entry.startsWith("required")) {
            let element = <li key={entry}>{majorData[entry]}</li>;
            howToApplyArray.push(element);
        };

        if (entry.startsWith("fundamental")) {
            let element = <li key={entry}>{majorData[entry]}</li>;
            fundamentalsArray.push(element);
        };

        if (entry.startsWith("fundamental")) {
            let element = <li key={entry}>{majorData[entry]}</li>;
            coreElectArray.push(element);
        };

        if (entry.startsWith("core")) {
            let element = <li key={entry}>{majorData[entry]}</li>;
            coreElectArray.push(element);
        };
    });

    howToApplyArray.push(<li key={"more info "}>More information about applying to the {majorData.name} major can be found <a href={majorData.link}>here</a></li>)


    return (
        <div>

            <div>
                <header className="major-page">
                    <div className="container">
                        <div className="xs-4 sm-4 md-6">
                            <h2 className="p-3">{pageName}</h2>
                        </div>
                    </div>
                </header>
                <h1 className="interact-h1">{majorData.name}</h1>
                <div id="container">
                    <h2 className="interact-h2">{prereqClasses}</h2>
                    <ul className="interact-list-cs">{prereqClassArray}</ul>

                    <h2 className="interact-h2">{howToApply}</h2>
                     <ul className="interact-list-cs">{howToApplyArray}</ul>

                    <h2 className="interact-h2">{graduationReqHeadding}</h2>
                    
                    <ul className="interact-list-cs">
                        <li className="category">{majorData.textFundamentals}</li>
                        <ul>{fundamentalsArray}</ul>
                        <li className="category">{majorData.textCore}</li>
                        <ul>{coreElectArray}</ul>
                    </ul>
                    <div className="interact-list-cs">{majorData.bottomText}</div>
                </div>
            </div>

        </div>

    )
}