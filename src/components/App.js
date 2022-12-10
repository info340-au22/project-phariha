import React from 'react';
import { PostPage } from './PostPage'
import { MajorInfo } from './MajorInfo';
import { Major } from './Major';
import { useState } from 'react';
import { HomePage } from './Homepage';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import {Routes, Route, Navigate} from 'react-router-dom';

export default function App(props) {
    const [currData, setCurrData] = useState([])
    const [storedData, setStoredData] = useState([])
    const navList = ['homepage', 'major', 'post'];

    //what content should my App look like?
    return (
        <div>
            <header>
                <NavBar />
            </header>
            
            <main>     
                <Routes>
                    <Route path="home" element={<HomePage />}/>
                    <Route path="major" element={<Major />}/>
                    <Route path="posts" element={<PostPage />}/> 
                    <Route path="CS" element={<MajorInfo major={'cse'}/>}/>
                    <Route path="Info" element={<MajorInfo major={'info'}  />}/>

                    <Route path="/*" element={<Navigate to="/home"/>}/>
                </Routes>
                {/* <InfoMajor /> */}
                {/* <CSMajor /> */}
                {/* <div className='major-page'>
                    <Major crrData={currData} setStoredData={setStoredData} storedData={storedData} />
                </div>    */}

            </main>

            <footer>
                <Footer />
            </footer>

        </div>

        
    );
}
