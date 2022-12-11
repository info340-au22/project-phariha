import { React } from 'react';
import { NavBar } from './NavBar';
import { CreatePost } from './CreatePost';
import { PostCard } from './PostCard';
import { Link } from 'react-router-dom';
import '../index.css';
import { ComposePostForm } from './ComposePostForm';
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database' //realtime


export function PostPage(props) {

    const [newPosts, setNewPosts] = useState([]);

    useEffect(() => {

        const db = getDatabase(); 
        const allNewPostsRef = ref(db, "allNewPosts");

        //when db value changes
        const offFunction = onValue(allNewPostsRef, (snapshot) => {
            const valueObj = snapshot.val();
            // convert object into array
            const objKeys = Object.keys(valueObj);
            const objArray = objKeys.map((keyString) => {
                const postObj = valueObj[keyString];
                postObj.key = keyString;
                return postObj;
            })
            console.log(objArray);
            setNewPosts(objArray);
        })

        function cleanup() {
            console.log("component is being removed");
            offFunction();
        }
        return cleanup; 
    }, [])

   
    const displayPages = ['homepage', 'major', 'post'];
    const currentPage = "homepage";

    const handleClick = (event) => {
        console.log("you clicked create post!");
    }

   
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
