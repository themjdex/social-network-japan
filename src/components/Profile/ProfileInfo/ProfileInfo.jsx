
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
    return (
        <div>
            <div className={s.wallpaper}>
                <img src='https://i.yapx.ru/P4R8u.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;