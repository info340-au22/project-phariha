import React from 'react';
import '../index.css';
import data from '../data/data.json'
import { useState } from 'react';
import { List } from './List';
import { NavBar } from './NavBar';

export function Major(props) {
    const [inputText, setInputText] = useState("");
    let inputHandler = (event) => {
        setInputText(event.target.value)
    };
    const majorArray = data.map((listPoint) => {
        const dataPoints = <li key={listPoint.major}>{listPoint.major}</li>;
        return dataPoints;
    })
    return (
        <div>
            <NavBar/>
            <header className="major-page">
                    <div className="container">
                        <div className="xs-4 sm-4 md-6">
                            <h2 className="p-3">A Guide To the University of Washington's Major System</h2>
                        </div>
                    </div>
            </header>
            {/* <div className="row m-0">
                <div className="card border-0" >
                    <div className="card-body col-xs-4 col-sm-4 col-md-6">
                    </div>
                </div> */}
                <div className="col-xs-4 col-sm-4 col-md-6">
                    <div className='form-edit'>
                        <form id="form-control" className="p-2">
                            <input type="search bar" id="query" placeholder="Look up..." size="55" onChange={inputHandler}></input>
                            <button>Search</button>
                        </form>
                    </div>
                </div>
            {/* </div> */}
            <div className="container">
                <div className="row">
                    <h5 className="p-4">
                        List of possible majors:
                    </h5>
                    <List input={inputText} />
                </div>
            </div>
        </div>
    )
}