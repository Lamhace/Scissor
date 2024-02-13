import React, { useState } from 'react'
import GoogleApple from '../../googleApple/GoogleApple'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Footer from '../../footer/Footer'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebaseConfig'
import {  login } from "../../../Redux/LoginReducer";
import { useDispatch } from 'react-redux'



export default function Loginpage() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

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
          dispatch(login(loginData));
          navigate("/homepage", { replace: true });
        })
        .catch((error) => {
          // An error occurred during sign-in
          setErrorMessage('Incorrect Email address or Password')
        });
    }

  }


  const [showPassword, setShowPassword] =useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };



  return (
    <div>
      <div className=" flex flex-col items-center justify-center py-24">
        <div className="flex">
          <GoogleApple />
        </div>

        <form className="" onSubmit={submitLoginData}>
          <div className="flex items-center justify-center">
            <input
              className=" xs:pl-3 ls:pl-4 sm:pl-5 xs:w-72 ls:w-80 sm:w-96 border-2 xs:py-1 ls:py-2 sm:py-3  border-secondary rounded-xl mb-5"
              type="text"
              value={loginData.email}
              onChange={loginChange}
              placeholder="Email address"
              id="username email"
              name="email"
              required
            />
          </div>

          <div className="flex items-center justify-center">
            <span className="relative">
              <input
                className=" xs:pl-3 ls:pl-4 sm:pl-5 xs:w-72 ls:w-80 sm:w-96 border-2 border-secondary rounded-xl xs:py-1 ls:py-2 sm:py-3"
                type={showPassword ? loginData.password : "password"}
                value={loginData.password}
                onChange={loginChange}
                placeholder="Password"
                id="password"
                name="password"
                autoComplete="new-password"
                required
              />

              <span
                className="absolute sm:top-4 ls:top-4 xs:top-3 right-4 sm:text-xl xs:text-base"
                onClick={handleShowPassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </span>
          </div>
          <div className="flex justify-end xs:py-1 sm:py-2 xs:mb-1 sm:mb-2 text-secondary xs:px-12 ls:px-8 sm:px-0 xs:text-sm sm:text-base ">
            Forgot your password?
          </div>
          <div className=" flex item-center justify-center">
            <button className=" xs:py-1 ls:py-2 sm:py-3 text-tertiary xs:font-normal sm:font-medium bg-secondary xs:w-72 ls:w-80 sm:w-96 xs:rounded-2xl sm:rounded-3xl xs:text-sm sm:text-base">
              Log in
            </button>
          </div>

          <div className="flex item-center justify-center text-red-600 lg:w-96 ls:w-80 xs:w-72 text-center">
            {errorMessage}
          </div>
          <div className="flex item-center justify-center mt-5 text-gray-500 xs:font-normal sm:font-medium xs:text-sm sm:text-base">
            Don't have an account?
            <Link to="/signup">
              <span className="text-secondary xs:text-sm sm:text-base">
                &nbsp; Sign up
              </span>
            </Link>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
