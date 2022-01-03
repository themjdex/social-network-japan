import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = [
        { id: 1, message: 'I`m going to visit Japan', likesCount: 4 },
        { id: 2, message: 'It`s my project', likesCount: 5 },
        { id: 3, message: 'Idfdft', likesCount: 55 },
        { id: 4, message: 'Idfwwwwwroject', likesCount: 995 },
    ];

    let postsElement = posts.map(post => <Post message={post.message} likeCount={post.likesCount} />);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;