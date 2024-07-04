import React, { useEffect, useContext, } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppSettings } from "../../config/app-settings.js";
import Brand from "../../components/brands/Brand.jsx";
import axios from "axios";
import api from "../../api/axios.js";


function ResetPassword() {
    const context = useContext(AppSettings);


    const { token } = useParams()
    const navigate = useNavigate()



    useEffect(() => {
        context.setAppHeaderNone(true);
        context.setAppSidebarNone(true);
        context.setAppContentClass("p-0");
        context.setAppContentFullHeight(true);

        return function cleanUp() {
            context.setAppHeaderNone(false);
            context.setAppSidebarNone(false);
            context.setAppContentClass("");
            context.setAppContentFullHeight(false);
        };

        // eslint-disable-next-line
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const entries = Object.fromEntries(data.entries());

        const payload = {
            token,
            newPassword: entries.password
        }

        try {
            const promise = await api.post(`/user/reset-password`, payload);
            if (promise.status === 200) {
                alert("Password reset successful. Login with your new password.")
                navigate("/pages/login")
            }
        } catch (error) {
            console.log(error);
            alert(error.response.data.message || `Login failed`)
        }
    }
    return (


        <div className='login gap-5'>
            <div className='login-content'>
                <form onSubmit={handleSubmit}>
                    <Brand />
                    <h1 className="fs-4 mt-2">Reset your Password</h1>
                    <p className="text-muted">
                        Please enter your new password
                    </p>

                    <div className='mb-3'>
                        <label className='form-label'>
                            New password <span className='text-danger'>*</span>
                        </label>
                        <input
                            required
                            type='password'
                            className='form-control form-control-lg fs-15px'
                            placeholder=''
                            name='password'
                        />
                    </div>


                    <div className='mb-3'>
                        <button
                            type='submit'
                            className='btn btn-theme btn-lg fs-15px fw-500 d-block w-100'
                        >
                            Retrieve your Password
                        </button>
                    </div>
                    <div className='text-muted text-center'>
                        Remember your password?<Link to='/pages/register'>Sign in</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword;