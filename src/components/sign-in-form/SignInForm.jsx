import React, { useState } from 'react'
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../utils/firebase';
import FormInput from '../form input/FormInput';
import Button from '../button/Button';


import './sign-in-form.scss'


const defaultFormFields = {
  email: '',
  password: '',
}


const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields

  const resetFormField = () => {
    setFormFields(defaultFormFields)
  }

  const singInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormField()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect Password')
          break;

        case 'auth/user-not-found':
          alert('No user associate with this email')
          break;

        case 'auth/invalid-login-credentials':
          alert('Invalid Email or Password')
          break;

        default:
          console.log(error)
          break;
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
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput label='Email' type="email" name='email' required onChange={handleChange} value={email} />

          <FormInput label='Password' type="password" name='password' required onChange={handleChange} value={password} />

          <div className='buttons-container'>
            <Button type='submit'>Sign In</Button>

            <Button type='button' buttonType='google' onClick={singInWithGoogle}>Google Sign In</Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignInForm