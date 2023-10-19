import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../utils/firebase';
import FormInput from '../form input/FormInput';

import './sign-up-form.scss'
import Button from '../button/Button';


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}


const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields


  const resetFormField = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match")
      return;
    }
    try {
      const { user } =await createAuthUserWithEmailAndPassword(email, password);
      console.log(user);
      

      await createUserDocumentFromAuth(user, { displayName })
      resetFormField()
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('User with this email already exist')
      } else {
        console.log("someting went wrong while creating User", error)
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;    
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <>
      <div className='sign-up-container'>
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput label='Display Name' type="text" name='displayName' required onChange={handleChange} value={displayName} />

          <FormInput label='Email' type="email" name='email' required onChange={handleChange} value={email} />

          <FormInput label='Password' type="password" name='password' required onChange={handleChange} value={password} />

          <FormInput label='Confirm Password' type="password" name='confirmPassword' required onChange={handleChange} value={confirmPassword} />

          <Button buttonType='google' type='submit'>Sign Up</Button>
        </form>
      </div>
    </>
  )
}

export default SignUpForm