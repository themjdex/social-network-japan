import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://w7.pngwing.com/pngs/542/197/png-transparent-prefectures-of-japan-map-japan-logo-map-world-map.png'></img>
            <h1 className={s.serviceName}>Student`s social network in Japan </h1>
        </header>
    )
}

export default Header;