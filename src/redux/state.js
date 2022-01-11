const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
                { id: 1, message: 'Hi!', sender: true },
                { id: 2, message: 'How are you?', sender: true },
                { id: 3, message: 'When will you arrive?', sender: true },
                { id: 4, message: 'LOL:)))))', sender: false },
                { id: 5, message: 'Goodbye.', sender: false },
            ],
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
    dispatch(action) { // {type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}
export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
window.store = store;
export default store;