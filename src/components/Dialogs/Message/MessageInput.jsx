import React from 'react';
import s from './../Dialogs.module.css';

const MessageInput = (props) => {

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
    return (
        <div>
            <div className='messageForm'>
                <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    )
}

export default MessageInput;