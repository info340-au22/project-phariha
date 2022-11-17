import React from 'react';
import '../index.css';

export function FilterPost(props) {

    const FILTER_OPTIONS = ['filter-1', 'filter-2', 'filter-3'];

    const handleClick = (event) => {
        console.log("you clicked filter!");
    }

    const liArray = FILTER_OPTIONS.map((filterName) => {
        let filterList = "text-dark";

        const element = <li key={filterName}><a className={filterList} href="">{filterName}</a></li>
        return element;
    })


    return (
        <div id="post" className="recent-post mb-2">
            <h1 className="d-inline">Recent Posts</h1>

            <div className="dropdown filter-dropdown d-inline">
                <button className="btn btn-primmary dropdown-toggle" type="button" data-toggle="dropdown" onClick={handleClick}><a href="#"><i className="fa fa-filter" aria-label="filter"></i></a>

                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {liArray}
                </ul>
            </div>
        </div>
    )
}

