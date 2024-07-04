import React, { useContext, useEffect, useState } from 'react';
import {
  useResolvedPath,
  useMatch,
  NavLink,
  useLocation,
  matchPath,
} from 'react-router-dom';
import { UserContext } from '../../context/context.js';
import Menu from './../../config/app-menu.jsx';
import RantirButton from '../buttons/RantirButton.jsx';
// import computir from "/computir.svg";

function NavItem({ menu, ...props }) {
  let path = menu.path ? menu.path : '';
  let resolved = useResolvedPath(path);
  let match = useMatch({ path: resolved.pathname });

  let location = useLocation();

  if (menu.is_header) {
    return <div className='menu-header'>{menu.title}</div>;
  }

  if (menu.is_divider) {
    return <div className='menu-divider'></div>;
  }

  let match2 = matchPath({ path: path, end: false }, location.pathname);

  let badge = menu.badge && (
    <span className='menu-icon-label'>{menu.badge}</span>
  );
  let icon;

  if (React.isValidElement(menu.icon)) {
    icon = (
      <div className='menu-icon'>
        {menu.icon} {badge}
      </div>
    );
  } else if (menu.icon) {
    icon = (
      <div className='menu-icon'>
        <i className={menu.icon}></i> {badge}
      </div>
    );
  }
  let img = menu.img && (
    <div className='menu-icon-img'>
      <img src={menu.img} alt='' />
    </div>
  );
  let caret = menu.children && (
    <div className='menu-caret'>
      <b className='caret'></b>
    </div>
  );
  let title = menu.title && <div className='menu-text'>{menu.title}</div>;

  return (
    <div
      className={
        'menu-item' +
        (match || match2 ? ' active' : '') +
        (menu.children ? ' has-sub' : '')
      }
    >
      <NavLink className='menu-link' to={menu.path} {...props}>
        {img} {icon} {title} {caret}
      </NavLink>

      {menu.children && (
        <div className='menu-submenu'>
          {menu.children.map((submenu, i) => (
            <NavItem key={i} menu={submenu} />
          ))}
        </div>
      )}
    </div>
  );
}

function SidebarNav() {
  const { folders } = useContext(UserContext);

  // handel dark theme
  const [mode, setMode] = useState(
    localStorage &&
      typeof localStorage.appMode !== 'undefined' &&
      localStorage.appMode === 'dark'
      ? true
      : false
  );
  const [displayfolders, setDisplayfolders] = useState([]);
  const setAppMode = (mode) => {
    document.documentElement.setAttribute('data-bs-theme', mode);

    if (localStorage) {
      localStorage.appMode = mode;
    }

    document.dispatchEvent(new Event('theme-reload'));
  };
  useEffect(() => {
    const slicedfolders = folders.slice(0, 8).sort((a, b) => a - b);
    setDisplayfolders(slicedfolders);
  }, [folders]);
  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setMode(isChecked);
    setAppMode(isChecked ? 'dark' : 'light');
  };
  return (
    <div className='menu'>
      {Menu(displayfolders).map((menu, i) => (
        <NavItem key={i} menu={menu} />
      ))}

      {/* dark mode */}
      <div className='d-flex flex-column dynamic-container'>
        <div
          className='bg-white  p-3 rounded gap-2 shadow self-host mt-5 sidebar-selfhost'
          style={{
            margin: '0 18px',
            border: '1px solid #00000014',
            // display: "none",
          }}
        >
          <div className='d-flex flex-column'>
            <h5 className=''>Self Host and Install</h5>
            <p className=''>
              Need an on-premise install? We can help. Talk to our enterprise
              team.
            </p>
            <RantirButton
              imageSource={'/computir.svg'}
              text='Computir Enterprise'
            />
          </div>
        </div>
        <div className='dark-btn d-flex flex-row'>
          <div className='control-label text-body-emphasis fw-bold'>
            <div className='dark-mode-text' style={{ marginLeft: '10px' }}>
              Dark Mode{' '}
              <span
                className='badge bg-theme text-theme-color ms-1 position-relative py-4px px-6px dark-mode-text-label'
                style={{ top: '-1px' }}
              >
                NEW
              </span>
            </div>
          </div>
          <div className='form-check form-switch ms-auto mb-0 mt-2px'>
            <input
              type='checkbox'
              className='form-check-input'
              name='app-theme-dark-mode'
              onChange={handleCheckboxChange}
              checked={mode}
              value='1'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarNav;
