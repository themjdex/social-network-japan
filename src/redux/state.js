import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                { id: 1, message: 'I`m going to visit Japan', likesCount: 4 },
                { id: 2, message: 'It`s my project', likesCount: 5 },
                { id: 3, message: 'Idfdft', likesCount: 55 },
                { id: 4, message: 'Idfwwwwwroject', likesCount: 995 },
            ],
            newPostText: 'Введите ваш текст',
        },
        sidebar: {},
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state was changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

window.store = store;
export default store;