import { React } from 'react';
import { CreatePost } from './CreatePost';
import { PostCard } from './PostCard';
import { Link } from 'react-router-dom';
import '../index.css';


export function PostPage(props) {


    const handleClick = (event) => {
        console.log("you clicked create post!");
    }

    return (
        <div className='post-page'>
            <div className='d-flex d-inline sort-filter m-4'>
                <Link to="../create-post">
                    <button className="create-post mx-2 mt-3" type="button" onClick={handleClick}>
                        Create New Post
                    </button>
                </Link>
            </div>
            <div className='d-flex'>
                <PostCard />
            </div>
            <div className="col d-flex flex-column"></div>
            {/* <Footer /> */}
        </div >
    );
}
