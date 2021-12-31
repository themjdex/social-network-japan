import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://s1.hostingkartinok.com/uploads/images/2021/12/bf85a139e9be1610bd1b1796c523660a.jpg' />
            {props.message}
            {/* вызов пропса */}
            <div>
                <span>Likes: {props.likeCount}</span>
            </div>

        </div>
    )
}

export default Post;