import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
// import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://i.yapx.ru/P4R8u.jpg'></img>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;