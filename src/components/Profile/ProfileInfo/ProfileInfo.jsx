
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.wallpaper}>
                <img src='https://i.yapx.ru/P4R8u.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;