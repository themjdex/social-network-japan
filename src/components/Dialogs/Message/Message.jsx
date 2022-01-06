
import s from './../Dialogs.module.css';


const Message = (props) => {
    if (props.sender) {
        return (<div className={s.message + ' ' + s.sender}>{props.message}</div>
        )
    } else {
        return <div className={s.message + ' ' + s.receiver}>{props.message}</div>
    }

}


export default Message;
