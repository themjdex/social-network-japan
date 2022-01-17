const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'I`m going to visit Japan', likesCount: 4 },
        { id: 2, message: 'It`s my project', likesCount: 5 },
        { id: 3, message: 'Idfdft', likesCount: 55 },
        { id: 4, message: 'Idfwwwwwroject', likesCount: 995 },
    ],
    newPostText: 'Введите ваш текст',
}; // при первом запуске редюсеры получают стейт андефайнд, поэтому страница не будет отрисовываться. Поэтому мы передаем эту заготовку в state редюсера по умолчанию

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        default:
            return state;

    }
};

export const addPostActionCreator = () => ({
    type: ADD_POST
});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profileReducer;