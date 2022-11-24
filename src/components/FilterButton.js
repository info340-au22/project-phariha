import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import '../index.css';

export function FilterButton(props) {
        const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button id="post" onClick={handleShow} className='sort-filter mx-2 mt-2'>
        Sort / Filter
      </Button>

      <Modal id="post" show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>

        <Modal.Body><SortModal /></Modal.Body>
        <Modal.Body><FilterModal /></Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function SortModal(props) {

    const SORT_OPTIONS = ['Sort', 'Date', 'Rating', 'Difficulty'];
    let sortList = "text-dark text-decoration-none filter-list";
  
    const sortLiArray = SORT_OPTIONS.map((elem) => {
      const sortOption = <ul key={elem} id="post" className='sort-modal'><input type="checkbox" /><a className={sortList} href="">{elem}</a></ul>
      return sortOption;
  })

    return (
        <div className='d-block'>
    <div className='flex-column'>
            <div id="post" className=' card text-dark mt-2 mx-2'>
                <ul className='card-body list-unstyled p-2'>
                    <p id='post' className='filter-options-title'>Sort</p>
                    {sortLiArray}
                </ul>
            </div>
        </div>
        </div>
    )
}

function FilterModal(props) {

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

        const filterCategory =
            <ul id="post" className="filter-id" key={filterNameString.id}>
                <a id="post" className={filterList} href="">{filterNameString.title}</a>
                {filterLiArray}
            </ul>
        return filterCategory;
    })

    return (
        <div className='flex-column'>
            <div id="post" className=' card text-dark mt-2 mx-2'>
                <ul className='card-body list-unstyled p-2'>
                    <p id='post' className='filter-options-title'>Filter Options</p>
                    {filterOptionArray}
                </ul>
            </div>
        </div>
    )
}