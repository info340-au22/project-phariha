import React from 'react';

export function Post(props) {

    const userName = "Malena Arduino";
    const todayDate = "Nov. 16, 2022";

    const POST_INPUT = ['Major: ', 'ClassName: ', 'Professor: ', 'Year: ', 'Teacher Rating: ', 'Difficulty: ', 'Homework Load: '];


    const liArray = POST_INPUT.map((postName) => {
        let postList = "text-dark";

        const element = <li key={postName}><a className={postList} href="">{postName}</a></li>
        return element;
    })

    return (
        <div className="card mb-2">
            <div id="post" className="card-body">
                <div id="post" className="card-title p-2">
                    <h2 className="student-name d-inline">{userName}</h2>
                    <h2 id="post" className="post-date">{todayDate}</h2>
                </div>
                <ul className='no-bullet'>
                    {liArray}
                </ul>
            </div>
        </div>
    )
}