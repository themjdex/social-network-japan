import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


    let postsElement = props.posts.map(post => <Post message={post.message} likeCount={post.likesCount} />);

    let newPostElement = React.createRef(); // создаем референс на определенный объект

    let addPost = () => {
        let text = newPostElement.current.value; // записываем в переменную ссылку на текущее значение указанного рефа, который подключается к HTML-элементу
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;