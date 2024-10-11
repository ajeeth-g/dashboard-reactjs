import './header.css';
import { headerItems } from '../../util';
import { IoSettingsOutline } from 'react-icons/io5';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <ul className='header-buttons'>
          {Object.keys(headerItems).map((key) => {
            const item = headerItems[key];

            return (
              <li key={key}>
                <a
                  href='#'
                  onClick={(e) => e.preventDefault()}
                  className='header-button'
                >
                  {item.icon}
                  {item.type === 'iconWithText' && <span>{item.text}</span>}
                  {item.type === 'iconWithNotification' && (
                    <span className='header-notification'>
                      {item.notificationValue}
                    </span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
        <div className='header-profile'>
          <div className='header-profile-image'></div>
          <div className='header-profile-details'>
            <p>Ajeeth</p>
            <p>Full Stack Developer</p>
          </div>
        </div>
        <div className='header-settings-icons'>
          <IoSettingsOutline />
        </div>
      </div>
    </header>
  );
};

export default Header;
