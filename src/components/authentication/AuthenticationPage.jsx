import React from 'react'
import SignUpForm from '../sign-up-form/SignUpForm';
import SignInForm from '../sign-in-form/SignInForm';

import './authentication.styles.scss';

const AuthenticationPage = () => {


    return (
        <>
            <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
            </div>
        </>
    )
}

export default AuthenticationPage