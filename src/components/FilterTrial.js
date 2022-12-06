import { React, useState, useEffect } from 'react';
import FILTER_OPTIONS from '../data/filter-options.json'
import '../index.css';

export function FilterTrial(props) {

    const [selectedFilter, setSelectedFilter] = useState([]);
    const [checked, setChecked] = useState([]);

    const showFilter = FILTER_OPTIONS.filter((filterObj) => {
        return filterObj.filter;
    })

    const filterItemArray = showFilter.map((filterObj, index) => {
        // each json object

        const handleClick = (event) => {
            filterObj.checked = !filterObj.checked;

            if (filterObj.checked) {
                console.log(filterObj.option + " is selected");
                console.log(filterObj.checked);
                setSelectedFilter(filterObj.option);
            } else (
                console.log(filterObj.option + " is deselected")
            )
        }

        const handleCheck = (event) => {
            let updatedList = [...checked];
            if (event.target.checked) {
                updatedList = [...checked, event.filter];
                updatedList = [...checked, filterObj.option];

            } else {
                updatedList.splice(checked.indexOf(event.target.value), 1);
            }
            setChecked(updatedList);
            console.log(updatedList);
        }    


        const filterCategoryOption = <ul key={filterObj.option} className='filter-option'><input type="checkbox" onClick={handleClick} onChange={handleCheck}/><a className={filterObj.option} href="">{filterObj.option}</a></ul>
        return filterCategoryOption;
    })

    return (
        <div className='flex-column col-3 d-none d-md-block d-lg-block'>
        <div id="post" className=' card text-dark mt-2 mx-2'>
            <ul className='card-body list-unstyled p-2'>
                <p id='post' className='filter-options-title'>Filter Options</p>
                {filterItemArray}
            </ul>
        </div>
    </div>
    )
}






