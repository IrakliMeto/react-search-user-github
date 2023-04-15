import { useState } from 'react';

import { Header } from './Header';
import { SearchUser } from './SearchUser';
import { User } from './User';

import './GitUsers.scss';

export const GitUsers = () => {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const userDataHandler = (e) => {
    setUserName(e.target.value);
  };

  const userSubmitHandler = (e) => {
    e.preventDefault();

    if (!userName) return;

    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUserData(data);
      });
  };

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      <div className='container__inner'>
        <Header onDarkMode={darkModeHandler} dark={darkMode} />

        <SearchUser
          onUserDataChange={userDataHandler}
          value={userName}
          onUserSubmit={userSubmitHandler}
        />

        <User userData={userData} />
      </div>
    </div>
  );
};
