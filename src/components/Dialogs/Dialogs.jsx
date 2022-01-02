import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>

}
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Akihiko' id='1' />
                <DialogItem name='Adam' id='2' />
                <DialogItem name='Jannet' id='3' />
                <DialogItem name='Ioshiro' id='4' />
                <DialogItem name='Clark' id='5' />
            </div>
            <div className={s.messages}>
                <Message message='Hi!' />
                <Message message='How are you?' />
                <Message message='When will you arrive?' />
                <Message message='LOL:)))))' />
            </div>
        </div>
    )
}

export default Dialogs;