import React from "react";
import data from '../data/data.json'


export function List(props) {
    const filteredData = data.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.major.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.major}>{item.major}</li>
            ))}
        </ul>
    )
}
