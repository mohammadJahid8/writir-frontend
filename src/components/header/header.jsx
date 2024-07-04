import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppSettings } from './../../config/app-settings.js';
import brandLogo from '../../assets/brandLogo.png';
import rantirLogo from '../../assets/rantirLogo.png';
import RantirButton from '../buttons/RantirButton.jsx';
import { UserContext } from '../../context/context.js';
import BrandWeldButton from '../buttons/BrandWeldButton.jsx';
import AddWorkspaceButton from '../buttons/AddWorkspaceButton.jsx';

function Header() {
  const context = useContext(AppSettings);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const notificationData = [
    {
      icon: 'fa fa-receipt fa-lg fa-fw text-success',
      title: 'Your store has a new order for 2 items totaling $1,299.00',
      time: 'just now',
    },
    {
      icon: 'far fa-user-circle fa-lg fa-fw text-body text-opacity-25',
      title: '3 new customer account is created',
      time: '2 minutes ago',
    },
    {
      img: '/assets/img/icon/android.svg',
      title: 'Your android application has been approved',
      time: '5 minutes ago',
    },
    {
      img: '/assets/img/icon/paypal.svg',
      title: 'Paypal payment method has been enabled for your store',
      time: '10 minutes ago',
    },
  ];

  const toggleAppSidebarDesktop = () => {
    context.handleToggleAppSidebarMinified();
  };

  const toggleAppSidebarMobile = () => {
    context.handleToggleAppSidebarMobile();
  };
  const handleLogOut = () => {
    setUser(null);
    localStorage.removeItem('rantirToken');
  };
  return (
    <div id='header' className='app-header'>
      <div className='mobile-toggler'>
        <button
          type='button'
          className='menu-toggler'
          onClick={toggleAppSidebarMobile}
        >
          <span className='bar'></span>
          <span className='bar'></span>
        </button>
      </div>

      <div className='brand'>
        <div className='desktop-toggler'>
          <button
            type='button'
            className='menu-toggler'
            onClick={toggleAppSidebarDesktop}
          >
            <span className='bar'></span>
            <span className='bar'></span>
          </button>
        </div>

        {/* <div className='brand-logo d-flex align-items-end gap-1'>
          <BrandWeldButton />
        </div> */}
        <div className='brand-logo d-flex align-items-end gap-1'>
          <AddWorkspaceButton onClick={() => navigate('/workspace')} />
        </div>
        {/* <Link to='/' className='brand-logo d-flex align-items-end gap-1'>
          <img src={brandLogo} className='invert-dark' alt='' height='20' />
          <span
            style={{
              fontSize: '10px',
              color: '#212837',
            }}
          >
            Cloud 1.2.1
          </span>
        </Link> */}
      </div>

      <div className='menu'>
        <form
          className='menu-search'
          method='POST'
          name='header_search_form'
        ></form>

        <div className='menu-item dropdown'>
          <a
            href='#/'
            data-bs-toggle='dropdown'
            data-bs-display='static'
            className='menu-link'
          >
            <div className='menu-img online'>
              <img
                src={user?.image}
                alt=''
                className='ms-100 mh-100 rounded-circle'
              />
            </div>
            <div className='' style={{ marginLeft: '10px' }}>
              {user?.email}
            </div>
          </a>
          <div className='dropdown-menu dropdown-menu-end me-lg-3'>
            <Link
              to='/settings'
              className='dropdown-item d-flex align-items-center'
              href='settings.html'
            >
              Setting{' '}
              <i className='fa fa-wrench fa-fw ms-auto text-body text-opacity-50'></i>
            </Link>
            <div className='dropdown-divider'></div>
            <Link
              to='/pages/login'
              className='dropdown-item d-flex align-items-center'
              onClick={handleLogOut}
            >
              Log Out{' '}
              <i className='fa fa-toggle-off fa-fw ms-auto text-body text-opacity-50'></i>
            </Link>
            <div className='custom-link text-dark '>
              <span>Go Custom.</span> Build a custom AI dashboard experience for
              you
              <RantirButton
                imageSource={'/computir.svg'}
                text='Computir custom'
              />
            </div>
            <Link
              to='/'
              className='dropdown-item d-flex align-items-center'
              onClick={handleLogOut}
            >
              Privacy Policy
            </Link>
            <Link
              to='/'
              className='dropdown-item d-flex align-items-center'
              onClick={handleLogOut}
            >
              Terms and Conditions
            </Link>

            <div className='dropdown-divider'></div>

            <p
              style={{
                padding: '5.6px 16px',
              }}
            >
              Copyright ©2024 Computir, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
