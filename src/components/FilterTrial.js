import { React, useState, useEffect } from 'react';
import FILTER_OPTIONS from '../data/filter-options.json'
import '../index.css';

export function FilterTrial(props) {

    const [checkBoxData, setCheckBoxData] = useState({});

    const handleChange = (event) => {
        const whichBox = event.target.name;
        if (event.target.checked) {
            const stateCopy = { ...checkBoxData };
            stateCopy[whichBox] = true;
            setCheckBoxData(filterObj=> ({
                ...stateCopy
            }))
        } else {
            const stateCopy = { ...checkBoxData };
            stateCopy[whichBox] = false;
            delete stateCopy[whichBox];
            setCheckBoxData(filterObj => ({
                ...stateCopy
            }))
        }
    }  

    // shows checked filters
    // console.log(checkBoxData);

    const showFilter = FILTER_OPTIONS.map((filterObj) => {
        const filterOption = <ul key={filterObj.option} className='filter-option'><input type="checkbox" name={filterObj.option} onChange={(e) => handleChange(e)}/><a className={filterObj.option}href="">{filterObj.option}</a></ul>
        return filterOption;
    })

    return (
        <div className='flex-column col-3 d-none d-md-block d-lg-block'>
            <div id="post" className=' card text-dark mt-2 mx-2'>
                <ul className='card-body list-unstyled p-2'>
                    <p id='post' className='filter-options-title'>Filter Options</p>
                    {showFilter}
                </ul>
            </div>
        </div>
    )
}






