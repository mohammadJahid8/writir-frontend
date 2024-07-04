import React, { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppSettings } from './../../config/app-settings.js';
import Brand from '../../components/brands/Brand.jsx';
import axios from 'axios';
import api from '../../api/axios.js';

function PagesForgotPassword() {
    const context = useContext(AppSettings);
    const navigate = useNavigate();

    useEffect(() => {
        context.setAppHeaderNone(true);
        context.setAppSidebarNone(true);
        context.setAppContentClass('p-0');
        context.setAppContentFullHeight(true);

        return function cleanUp() {
            context.setAppHeaderNone(false);
            context.setAppSidebarNone(false);
            context.setAppContentClass('');
            context.setAppContentFullHeight(false);
        };

        // eslint-disable-next-line
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const entries = Object.fromEntries(data.entries());

        try {
            const promise = await api.post(`/user/forgot-password`, entries);
            if (promise.status === 200) {
                alert('Reset password link sent to your mail!');
            }
        } catch (error) {
            console.log(error);
            alert(error.response.data.message || `Login failed`);
        }
    }

    return (
        <div className='login gap-5'>
            <div className='login-content'>
                <form onSubmit={handleSubmit}>
                    <Brand />
                    <h1 className='fs-4 mt-2'>Forgot your Password?</h1>
                    <p className='text-muted'>
                        For your protection, please verify your identity.
                    </p>

                    <div className='mb-3'>
                        <label className='form-label'>
                            Email Address <span className='text-danger'>*</span>
                        </label>
                        <input
                            required
                            type='text'
                            className='form-control form-control-lg fs-15px'
                            placeholder='username@address.com'
                            name='email'
                        />
                    </div>


                    <div className='mb-3'>
                        <button
                            type='submit'
                            className='btn btn-theme btn-lg fs-15px fw-500 d-block w-100'
                        >
                            Submit
                        </button>
                    </div>
                    <div className='text-muted text-center'>
                        Don't have an account? <Link to='/pages/register'>Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default PagesForgotPassword;
