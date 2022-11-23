import React from 'react';
import '../index.css';

export function SortPost(props) {

    const SORT_OPTIONS = ['Sort', 'Date', 'Rating', 'Difficulty'];

    const handleClick = (event) => {
        console.log("you clicked filter!");
    }

    const liArray = SORT_OPTIONS.map((filterName) => {
        // let filterList = "text-dark";
        const element = <option key={filterName} onClick={handleClick}>{filterName}</option>
        return element;
    })

    return (
        <div id='post' className='sort-post'>
            <select id="post" className='sort-dropdown mx-3 mt-3' aria-label='Default select filter'>
                {liArray}
            </select>
        </div>
    )
}