import { useState } from 'react';

import { Header } from './Header';
import { SearchUser } from './SearchUser';
import { User } from './User';

import './GitUsers.scss';

export const GitUsers = () => {
  const [userData, setUserData] = useState(null);
  const [lightMode, setLightMode] = useState(false);

  const lightModeHandler = () => {
    setLightMode(!lightMode);
  };

  return (
    <div className={`container ${lightMode ? 'light-mode' : ''}`}>
      <div className='container__inner'>
        <Header onLightMode={lightModeHandler} lightMode={lightMode} />

        <SearchUser onUserFetched={setUserData} />

        <User userData={userData} />
      </div>
    </div>
  );
};
