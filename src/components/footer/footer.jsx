import React from 'react';
import logo2 from '../../assets/loginLogo.png';
import { Link } from 'react-router-dom';
import Brand from '../brands/Brand';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='app-footer'>
      <div className='footer-content'>
        <img
          className=''
          style={{
            width: '20px',
            height: '18px',
          }}
          src={'/computir.svg'}
          alt='logo_2'
        />

        <p className='footer-text'>Computir</p>
        <p className='footer-separator'>
          <svg
            width='5'
            height='4'
            viewBox='0 0 5 4'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='2.83478' cy='2' r='2' fill='#252525' />
          </svg>
        </p>
        <p className='footer-text'>
          Copyright ©2024 Computir, Inc. All rights reserved.
        </p>
        <p className='footer-separator'>
          <svg
            width='5'
            height='4'
            viewBox='0 0 5 4'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='2.83478' cy='2' r='2' fill='#252525' />
          </svg>
        </p>
        <div className='footer-links'>
          <p
            className='footer-link'
            onClick={() => window.open('https://rantir.com/support', '_blank')}
          >
            Get Support{'  '}|
          </p>
          <p
            className='footer-link'
            onClick={() => window.open('https://rantir.com/privacy', '_blank')}
          >
            Privacy Policy{'  '}|
          </p>
          <p
            className='footer-link'
            onClick={() => window.open('https://rantir.com/terms', '_blank')}
          >
            Terms and Conditions
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
