
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Akihiko' },
        { id: 2, name: 'Adam' },
        { id: 3, name: 'Jannet' },
        { id: 4, name: 'Ioshiro' },
        { id: 5, name: 'Clark' },
    ];

    let messagesData = [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'When will you arrive?' },
        { id: 4, message: 'LOL:)))))' },
        { id: 5, message: 'Goodbye.' },
    ];

    let dialogsElements = dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = messagesData
        .map(m => <Message message={m.message} />);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;