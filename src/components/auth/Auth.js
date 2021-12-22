import React from 'react'
import "./auth.css"

const Auth = () => {
    return (
        <div className="auth">
            <div className="auth__header">
                <p className="header__title">Authentication</p>
                <p className="header__desc">Manage how you log into your account</p>
            </div>
            <div className="authemail">
                <div className="emailheader">
                    <p>Email</p>
                    <p>We'll send you an email confirmation if you update your email</p>
                </div>
                <input type="email" placeholder="zenith@gmail.com" />
            </div>
            <div className="authemail">
                <div className="emailheader">
                    <p>New Password</p>
                    <p>Please make sure your password includes at least 8 characters, 1 uppercase letter, 1 number and 1 symbol(!, $, @, * etc) </p>
                </div>
                <input type="password" placeholder="" />
            </div>
            <div className="authemail">
                <div className="emailheader">
                    <p>Confirm Password</p>
                    <p>Re-enter your new password for verification</p>
                </div>
                <input type="password" placeholder="" />
            </div>
            <div className="saveBtn">
                <div className="div"></div>
                <button>save changes</button>
            </div>
        </div>
    )
}

export default Auth
