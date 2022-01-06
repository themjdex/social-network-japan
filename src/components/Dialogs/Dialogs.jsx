
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import MessageInput from './Message/MessageInput';


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} avatar={d.link} />);

    let messagesElements = props.state.messages
        .map(m => <Message message={m.message} sender={m.sender} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <MessageInput />
            </div>
        </div>
    )
}

export default Dialogs;