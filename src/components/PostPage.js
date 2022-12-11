import { React } from 'react';
import { NavBar } from './NavBar';
import { CreatePost } from './CreatePost';
import { SortPost } from './SortPost';
import { Footer } from './Footer';
import { FilterList } from './FilterList';
import { FilterTrial } from './FilterTrial';
import { PostCard } from './PostCard';
import { FilterButton } from './FilterButton';
import { Link } from 'react-router-dom';
import '../index.css';


export function PostPage(props) {

    const displayPages = ['homepage', 'major', 'post'];
    const currentPage = "homepage";

    const handleClick = (event) => {
        console.log("you clicked create post!");
    }
    //what content should my App look like?
    return (
        <div className='post-page'>
            {/* <NavBar page={displayPages} currentPage={currentPage} /> */}
            <div className='d-flex d-inline sort-filter d-none d-sm-none d-md-block'>
                {/* <CreatePost /> */}
                <Link to="../create-post">
                    <button className="create-post mx-2 mt-3" type="button" onClick={handleClick}>
                        Create New Post
                    </button>
                </Link>
                <SortPost />
            </div>
            <div className='sort-filter-modal d-block d-md-none d-lg-none'>
                <FilterButton />
            </div>
            <div className='d-flex'>
                <FilterTrial />
                <PostCard />
            </div>
            <div className="col d-flex flex-column"></div>
            {/* <Footer /> */}
        </div >
    );
}
