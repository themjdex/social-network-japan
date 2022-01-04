import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


    let postsElement = props.posts.map(post => <Post message={post.message} likeCount={post.likesCount} />);

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