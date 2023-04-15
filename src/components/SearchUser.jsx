import './SearchUser.scss';

export const SearchUser = ({ onUserDataChange, onUserSubmit, userName }) => {
  return (
    <form className='search-user' onSubmit={onUserSubmit}>
      <input
        placeholder='Search Github User'
        type='text'
        value={userName}
        onChange={onUserDataChange}
      />
      <button type='submit'>Search</button>
    </form>
  );
};
