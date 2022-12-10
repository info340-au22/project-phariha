import React, { useState } from 'react';
import '../index.css';

export function SortPost(props) {

    const SORT_OPTIONS = ['Sort', 'Date', 'Rating', 'Difficulty'];

    const currentSort = props.currentSort;
    const cardsToDisplay = props.cardDisplay;


    const liArray = SORT_OPTIONS.map((filterName) => {
        // let filterList = "text-dark";
        const element = <option key={filterName}>{filterName}</option>
        return element;
    })

    const handleClick = (event) => {
        console.log("You are trying to sort!")
        return event;
    }

    const handleChange = (event) => {
        console.log("You are now sorting by " + event.target.value)

        if (event.target.value === "Date") {
            console.log("Date is working");

        } else if(event.target.value === "Rating") {
            console.log("Rating is working");

        } else if (event.target.value === "Difficulty") {
            console.log("Difficulty is working")
        }
        return event;
    }

    return (
        <div id='post' className='sort-post'>
            <select id="post" className='sort-dropdown mx-3 mt-3' aria-label='Default select filter' onClick={handleClick} onChange={handleChange}>
                {liArray}
            </select>
        </div>
    )
}