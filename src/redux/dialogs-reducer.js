const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Akihiko', link: 'https://i.yapx.ru/P7FTI.png' },
        { id: 2, name: 'Adam', link: 'https://i.yapx.ru/P7FTK.png' },
        { id: 3, name: 'Jannet', link: 'https://i.yapx.ru/P7FTL.png' },
        { id: 4, name: 'Ioshiro', link: 'https://i.yapx.ru/P7FTM.png' },
        { id: 5, name: 'Clark', link: 'https://i.yapx.ru/P7FTQ.png' },
    ],
    messages: [
        { id: 1, message: 'Hi!', },
        { id: 2, message: 'How are you?', },
        { id: 3, message: 'When will you arrive?', },
        { id: 4, message: 'LOL:)))))', },
        { id: 5, message: 'Goodbye.', },
    ],
    newMessageBody: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body, }],
            };
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE,
});
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
});

export default dialogsReducer;