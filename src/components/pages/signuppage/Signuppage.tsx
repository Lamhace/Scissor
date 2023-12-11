import React from 'react'
import GoogleApple from '../../googleApple/GoogleApple'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebaseConfig'



export default function Signuppage() {
  const navigate = useNavigate();

  const [signUpData, setSignUpData] = React.useState({
    username: '',
    password: '',
    email: '',
    confirmPassword: ''
  })
  const [errorMessage, setErrorMessage] = React.useState('')
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('')

  function signUpChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSignUpData((prevSignupData) => {
      return {
        ...prevSignupData,
        [event.target.name]: event.target.value
      }
    })
  }

  function submitSignInData(event: React.FormEvent<HTMLFormElement>) {

    event.preventDefault()
    const hasUppercase = /[A-Z]/.test(signUpData.password);
    const hasLowercase = /[a-z]/.test(signUpData.password);
    const hasNumber = /[0-9]/.test(signUpData.password);


    if (signUpData.password.length < 6 || !hasUppercase || !hasLowercase || !hasNumber) {
      setErrorMessage('Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number.');
      return;
    }
    if (signUpData.password !== signUpData.confirmPassword) {
      setPasswordErrorMessage(`Password doesn't match. Kindly check and try again.`);
      return
    }

    else {
      createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password)
        .then((userCredential) => {
          // User successfully signed in
          const user = userCredential.user;
          navigate("/homepage");
        })
        .catch((error) => {
          // An error occurred during sign-in
          setErrorMessage('Email is already taken')
        });
    }

  }




  return (
    <div>
      <div className='flex flex-col items-center justify-center py-24'>
        <GoogleApple />
        <form className="flex flex-col items-center justify-center" onSubmit={submitSignInData}>
          <div className="">
            <input className='pl-5 w-96 border-2 py-3  border-secondary rounded-xl mb-5' type="text" placeholder='Username' value={signUpData.username} onChange={signUpChange} id="username" name="username" required />
          </div>

          <div className="">
            <input className='pl-5 w-96 border-2 py-3  border-secondary rounded-xl mb-5' type="email" placeholder='Email' value={signUpData.email} onChange={signUpChange} id="email" name="email" required />
          </div>

          <div className="">
            <input className='pl-5 w-96 border-2 py-3  border-secondary rounded-xl mb-5' type="password" placeholder='Password' value={signUpData.password} onChange={signUpChange} id="password" name="password" required />
          </div>

          <div className="">
            <input className='pl-5 w-96 border-2 py-3  border-secondary rounded-xl mb-5' type="password" placeholder='Confirm Password' value={signUpData.confirmPassword} onChange={signUpChange} id="confirm-password" name="confirmPassword" required />
          </div>
          <div className=' text-xs font-semibold justify-start'>6 or more characters, one number, one uppercase & one lowercase</div>
          <div className='text-red-600'>{errorMessage}</div>
          <div className=' text-red-600'>{passwordErrorMessage}</div>

          <button className='py-3 text-tertiary font-medium bg-secondary w-96 rounded-3xl mt-10'>Sign up with Email</button>
          <div className='text-gray-500 font-medium mt-4'>Already have an account? <Link to='/'><span className='text-secondary'>Log in</span></Link></div>
        </form>
      </div>
      <Footer />
    </div>
  )
}
