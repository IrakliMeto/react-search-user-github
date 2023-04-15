import './User.scss';

export const User = ({ userData }) => {
  console.log('userData:', userData);
  return (
    <div>
      <div className='user'>
        {userData?.login && (
          <div className='user__holder'>
            <h2 className='user__name'>
              <img src={userData.avatar_url} alt='' /> {userData.name}
            </h2>
            <div className='user__bio'>
              Bio:
              <h3>{userData.bio}</h3>
            </div>
            <div className='user__box'>
              <div className='user__info'>
                Works on <h3>{userData.company}</h3>
              </div>
              <div className='user__info'>
                Lives in <h3>{userData.location}</h3>
              </div>
              <div className='user__info'>
                Mail: <h3>{userData.blog}</h3>
              </div>
            </div>

            <div className='user__box'>
              <div className='user__info'>
                Followers: <h3>{userData.followers}</h3>
              </div>
              <div className='user__info'>
                Following: <h3>{userData.following}</h3>
              </div>
              <div className='user__info'>
                Public Repos: <h3>{userData.public_repos}</h3>
              </div>
            </div>
          </div>
        )}
        {userData?.message && (
          <h2 className='user__error'>{userData.message}</h2>
        )}
      </div>
    </div>
  );
};
