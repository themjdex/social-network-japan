
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Groups from './components/Groups/Groups';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/news' element={<News />} />
            <Route path='/groups' element={<Groups />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/users' element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

