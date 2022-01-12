
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} avatar={d.link} />);

    let messagesElements = state.messages
        .map(m => <Message message={m.message} sender={m.sender} />);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            onChange={onNewMessageChange}
                            value={newMessageBody} placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;