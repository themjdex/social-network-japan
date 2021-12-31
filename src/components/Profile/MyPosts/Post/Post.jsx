import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://s1.hostingkartinok.com/uploads/images/2021/12/bf85a139e9be1610bd1b1796c523660a.jpg' />
            Post 1
            <div>
                <span>Like</span>
            </div>

        </div>
    )
}

export default Post;