import React from 'react';

import '../index.css';

export function FilterList(props) {

    const FILTER_OPTIONS = [{ id: 'department', title: 'Department', liArray: ['Computer Science', 'Informatics', 'Engineering'] },
    { id: 'professor', title: 'Professor', liArray: ['Joel Ross', 'Bob Boiko', 'Jevin West', 'Melanie Welsh', 'Richard Sturman'] },
    { id: 'level', title: 'Level', liArray: ['100', '200', '300', '400'] },
    { id: 'year', title: 'Year', liArray: ['2019', '2020', '2021', '2022'] }
    ]

    const filterOptionArray = FILTER_OPTIONS.map((filterNameString) => {
        let filterList = "text-dark text-decoration-none filter-list";

        const filterLiArray = filterNameString.liArray.map((currentLiArray) => {
            const filterCategoryOption = <ul key={currentLiArray} id="post" className='filter-option'><input type="checkbox" /><a className={filterList} href="">{currentLiArray}</a></ul>
            return filterCategoryOption;
        })

        // filter options
        const filterCategory =
            <ul id="post" className="filter-id" key={filterNameString.id}>
                <a id="post" className={filterList} href="">{filterNameString.title}</a>
                {filterLiArray}
            </ul>
        return filterCategory;
    })

    return (
        <div className='flex-column col-3 d-none d-md-block d-lg-block'>
            <div id="post" className=' card text-dark mt-2 mx-2'>
                <ul className='card-body list-unstyled p-2'>
                    <p id='post' className='filter-options-title'>Filter Options</p>
                    {filterOptionArray}
                </ul>
            </div>
        </div>
    )
}

