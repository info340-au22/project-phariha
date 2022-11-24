import { React } from 'react';
import { NavBar } from './NavBar';
import { CreatePost } from './CreatePost';
import { SortPost } from './SortPost';
import { Footer } from './Footer';
import { FilterList } from './FilterList';
import { PostCard } from './PostCard';
import { FilterButton } from './FilterButton';
import '../index.css';


export function PostPage(props) {

    const displayPages = ['homepage', 'major', 'post'];
    const currentPage = "homepage";

    //what content should my App look like?
    return (
        <div className='post-page'>
            <NavBar page={displayPages} currentPage={currentPage} />
            <div className='d-flex d-inline sort-filter d-none d-sm-none d-md-block'>
                <CreatePost />
                <SortPost />
            </div>
            <div className='sort-filter-modal d-block d-md-none d-lg-none'>
                    <FilterButton />
                </div>
            <div className='d-flex'>
                <FilterList />
                <PostCard />
            </div>
            <div className="col d-flex flex-column"></div>
            <Footer />
        </div >
    );
}
