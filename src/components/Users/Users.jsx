import css from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                { id: 1, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Akihoshide.jpg/1200px-Akihoshide.jpg', isFollowed: true, fullName: 'Akihiko T.', status: 'Well done', location: { city: 'Tokyo', country: 'Japan' } },
                { id: 2, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Star_Wars-_The_Last_Jedi_Japan_Premiere_Red_Carpet-_Adam_Driver_%2827163437599%29_%28cropped%29.jpg/1200px-Star_Wars-_The_Last_Jedi_Japan_Premiere_Red_Carpet-_Adam_Driver_%2827163437599%29_%28cropped%29.jpg', isFollowed: false, fullName: 'Adam K.', status: 'I`m looking for a job in Japan!', location: { city: 'Toronto', country: 'Canada' } },
                { id: 3, photoURL: 'https://instagrammi.ru/wp-content/uploads/zhannet-rodzyan.jpg', isFollowed: true, fullName: 'Jannet A.', status: 'Pretty girl(o_o)', location: { city: 'Saitama', country: 'Japan' } },
                { id: 4, photoURL: 'https://i1.sndcdn.com/avatars-000655118672-xb0aun-t500x500.jpg', isFollowed: true, fullName: 'Ioshiro U.', status: '頑張ってください', location: { city: 'Tokyo', country: 'Japan' } },
            ]
        );
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoURL} className={css.userPhoto} />
                    </div>
                    <div>
                        {u.isFollowed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;