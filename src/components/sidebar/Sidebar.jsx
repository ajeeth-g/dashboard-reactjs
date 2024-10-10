import { useState } from 'react';
import './sidebar.css';
import { navigationItems } from '../../util';

const Sidebar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (heading) => {
    setActiveDropdown(activeDropdown === heading ? null : heading);
  };

  return (
    <section className='sidebar'>
      <div className='sidebar-logo'></div>
      <div className='sidebar-content'>
        {Object.keys(navigationItems).map((key) => {
          const item = navigationItems[key];
          const isDropdownOpen = activeDropdown === item.heading;

          return (
            <div key={item.heading} className='sidebar-section'>
              <div className='sidebar-heading'>
                <h3>{item.heading}</h3>
              </div>

              <div className='sidebar-dropdown'>
                <div
                  className='sidebar-dropdown-title'
                  onClick={() => toggleDropdown(item.heading)}
                >
                  <div className='sidebar-dropdown-title-icon'>
                    <div className='sidebar-dropdown-icon'>{item.mainIcon}</div>
                    <a href={item.link}>{item.title}</a>{' '}
                    {item.notification.isnotification ? (
                      <span className='notification'>
                        {item.notification.value}
                      </span>
                    ) : (
                      <span className='notification blue'>
                        {item.notification.value}
                      </span>
                    )}
                  </div>

                  <div className='sidebar-dropdown-arrow'>
                    {isDropdownOpen ? item.rightIcon : item.leftIcon}
                  </div>
                </div>

                {isDropdownOpen && (
                  <ul className='sidebar-dropdown-subtitle'>
                    {item.subItems.map((subItem, idx) => (
                      <li key={idx} className='sidebar-dropdown-subtitle-list'>
                        <a href={subItem.link}>{subItem.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
