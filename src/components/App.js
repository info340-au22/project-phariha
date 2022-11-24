import React from 'react';
import { PostPage } from './PostPage'
import { CSMajor } from './CSMajor';
import { InfoMajor } from './InfoMajor';
import { Major } from './Major';
import { useState } from 'react';
import { HomePage } from './Homepage';

export default function App(props) {
    const [currData, setCurrData] = useState([])
    const [storedData, setStoredData] = useState([])
    const navList = ['homepage', 'major', 'post'];

    //what content should my App look like?
    return (
        <div>
            <HomePage />
            {/* <InfoMajor /> */}
            {/* <CSMajor /> */}
            {/* <PostPage /> */}
            {/* <div className='major-page'>
                <Major currData={currData} setStoredData={setStoredData} storedData={storedData} />
            </div> */}
        </div>
    );
}
