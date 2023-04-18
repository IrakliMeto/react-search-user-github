import { useState } from 'react';

import { Header } from './Header';
import { SearchUser } from './SearchUser';
import { User } from './User';

import './GitUsers.scss';

export const GitUsers = () => {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState(null);
  const [lightMode, setLightMode] = useState(false);

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

  const lightModeHandler = () => {
    setLightMode(!lightMode);
  };

  return (
    <div className={`container ${lightMode ? 'light-mode' : ''}`}>
      <div className='container__inner'>
        <Header onLightMode={lightModeHandler} lightMode={lightMode} />

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
