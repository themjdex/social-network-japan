import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>

            </div>
            <div className={s.posts}>
                <Post message='I`m going to visit Japan' likeCount='4' />
                <Post message='It`s my project' likeCount='5' />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;