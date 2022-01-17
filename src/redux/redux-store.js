import { combineReducers, createStore } from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
}); // функция, которая комбинирует все существующие редюсеры

let store = createStore(reducers); // создание стора из редюсеров

window.store = store;

export default store;