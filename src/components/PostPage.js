import { React } from 'react';
import { NavBar } from './NavBar';
import { CreatePost } from './CreatePost';
import { SortPost } from './SortPost';
import { Footer } from './Footer';
import { FilterList } from './FilterList';
import { PostCard } from './PostCard';
import '../index.css';


export function PostPage(props) {

    const displayPages = ['homepage', 'major', 'post'];
    const currentPage = "homepage";

    //what content should my App look like?
    return (
        <div className='post-page'>
            <NavBar page={displayPages} currentPage={currentPage} />
            <CreatePost />
            <SortPost />
            <div className='d-flex'>
                <FilterList />
                <PostCard />
            </div>
            <div className="col d-flex flex-column"></div>
            <Footer />
        </div >
    );
}