import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
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
                <Post message='I`m going to visit Japan' likeCount='4' />
                <Post message='It`s my project' likeCount='5' />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;