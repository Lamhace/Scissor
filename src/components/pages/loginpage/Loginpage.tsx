import React from 'react'
import GoogleApple from '../../googleApple/GoogleApple'
import Footer from '../../footer/Footer'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebaseConfig'



export default function Loginpage() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = React.useState({
    email: '',
    password: ''
  })
  const [errorMessage, setErrorMessage] = React.useState('')

  function loginChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLoginData((prevLoginData) => {
      return {
        ...prevLoginData,
        [event.target.name]: event.target.value
      }
    })
  }

  function submitLoginData(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const hasUppercase = /[A-Z]/.test(loginData.password);
    const hasLowercase = /[a-z]/.test(loginData.password);
    const hasNumber = /[0-9]/.test(loginData.password);


    if (loginData.password.length < 6 || !hasUppercase || !hasLowercase || !hasNumber) {
      setErrorMessage('Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number.');
      return;
    }

    else {
      signInWithEmailAndPassword(auth, loginData.email, loginData.password)
        .then((userCredential) => {
          // User successfully signed in
          const user = userCredential.user;
          console.log("Authenticated user:", user);
          navigate("/homepage");
        })
        .catch((error) => {
          // An error occurred during sign-in
          setErrorMessage('Incorrect Email address or Password')
        });
    }

  }



  return (
    <div >
      <div className=' flex flex-col items-center justify-center py-24'>
        <div className='flex'> <GoogleApple /> </div>

        <form className="" onSubmit={submitLoginData}>
          <div className='flex items-center justify-center' >
            <input className=" pl-5 w-96 border-2 py-3  border-secondary rounded-xl mb-5" type="text" value={loginData.email} onChange={loginChange} placeholder='Email address' id="username email" name="email" required />
          </div>

          <div className='flex items-center justify-center' >
            <input className="pl-5 w-96 border-2 border-secondary rounded-xl py-3" type="password" value={loginData.password} onChange={loginChange} placeholder='Password' id="password" name="password" required />
          </div>
          <div className='flex justify-end py-2 text-secondary'>Forgot your password?</div>
          <div className=' flex item-center justify-center'>
            <button className='py-3 text-tertiary font-medium bg-secondary w-96 rounded-3xl' >Log in</button>
          </div>

          <div className='flex item-center justify-center text-red-600'>{errorMessage}</div>
          <div className='flex item-center justify-center mt-5 text-gray-500 font-medium'>Don't have an account? <Link to='/signup'><span className='text-secondary'> &nbsp; Sign up</span></Link></div>
        </form>
      </div>

      <Footer />

    </div>
  )
}
