import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://i.yapx.ru/QeFNF.jpg' />
            {props.message}
            {/* вызов пропса */}
            <div>
                <span>Likes: {props.likeCount}</span>
            </div>

        </div>
    )
}

export default Post;