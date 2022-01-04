import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'I`m going to visit Japan', likesCount: 4 },
  { id: 2, message: 'It`s my project', likesCount: 5 },
  { id: 3, message: 'Idfdft', likesCount: 55 },
  { id: 4, message: 'Idfwwwwwroject', likesCount: 995 },
];

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
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts}
      dialogsData={dialogsData}
      messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
