import './Header.scss';
import sun from '../assets/icons/sun.svg';
import moon from '../assets/icons/moon.svg';

export const Header = ({ onDarkMode, dark }) => {
  return (
    <header className='header'>
      <h1 className='title'>Find Developer</h1>
      <button onClick={onDarkMode} className='dark-mode-button'>
        {!dark && (
          <span className='theme'>
            Dark <img src={moon} alt='' />
          </span>
        )}
        {dark && (
          <span className='theme'>
            Light <img src={sun} alt='' />
          </span>
        )}
      </button>
    </header>
  );
};
