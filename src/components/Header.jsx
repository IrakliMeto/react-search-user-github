import './Header.scss';
import sun from '../assets/icons/sun.svg';
import moon from '../assets/icons/moon.svg';

export const Header = ({ onLightMode, lightMode }) => {
  return (
    <header className='header'>
      <h1 className='title'>Find Developer</h1>
      <button onClick={onLightMode} className='theme-button'>
        {lightMode && (
          <span className='theme'>
            Dark <img src={moon} alt='' />
          </span>
        )}
        {!lightMode && (
          <span className='theme'>
            Light <img src={sun} alt='' />
          </span>
        )}
      </button>
    </header>
  );
};
