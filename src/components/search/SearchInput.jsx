import React, { useState } from 'react';
import Icon from '../icon/Icon';

const SearchInput = ({ icon }) => {
  const [inputValue, setInputValue] = useState('');
  const clearInput = () => {
    setInputValue('');
  };
  return (
    <div className='search-input-container'>
      <div className='search-input-group'>
        <div className='search-input-group-prepend d-flex align-items-center'>
          <span className='search-input-group-text'>
            <img
              src='/sparkle.svg'
              alt='explore'
              style={{
                width: '23px',
                height: '23px',
              }}
            />
            {/* <Icon path="/sparkle.svg" /> */}
          </span>
        </div>
        <input
          type='text'
          className='search-form-control'
          placeholder='Start a new search'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {/* <div className='input-group-append'>
          <button
            className='btn btn-secondary d-flex align-items-center justify-content-center bg-light me-2'
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              padding: '0',
            }}
            type='button'
            onClick={clearInput}
          >
            <i
              style={{ fontSize: '18px', lineHeight: '1' }}
              className='bi bi-x fw-bold'
            ></i>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default SearchInput;
