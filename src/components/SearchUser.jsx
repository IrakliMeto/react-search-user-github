import './SearchUser.scss';

import { useState } from 'react';

export const SearchUser = ({ onUserFetched }) => {
  const [userName, setUserName] = useState('');

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
        onUserFetched(data);
      });
  };

  return (
    <form className='search-user' onSubmit={userSubmitHandler}>
      <input
        placeholder='Search Github User'
        type='text'
        value={userName}
        onChange={userDataHandler}
      />
      <button type='submit'>Search</button>
    </form>
  );
};
