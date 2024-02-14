import React, { useState } from 'react'
import GoogleApple from '../../googleApple/GoogleApple'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebaseConfig'
import { login } from "../../../Redux/LoginReducer";
import { useDispatch } from "react-redux";



export default function Signuppage() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

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
      setPasswordErrorMessage(
        ''
      );
      setErrorMessage('Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number.');
      return;
    }
    if (signUpData.password !== signUpData.confirmPassword) {
      setErrorMessage(
        ""
      );
      setPasswordErrorMessage(`Password doesn't match. Kindly check and try again.`);
      return
    }

    else {
      createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password)
        .then((userCredential) => {
          // User successfully signed in
          const user = userCredential.user;
           dispatch(login(true));
          // dispatch(login());
          navigate("/homepage", { replace: true });
        })
        .catch((error) => {
          // An error occurred during sign-in
          setErrorMessage("");
          setPasswordErrorMessage("");
          setErrorMessage('Email is already taken')
        });
    }

  }


const [showPassword, setShowPassword] = useState(false);
const handleShowPassword = () => {
  setShowPassword(!showPassword);
};

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-24">
        <GoogleApple />
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={submitSignInData}
        >
          <div className="">
            <input
              className="xs:pl-3 ls:pl-4 sm:pl-5 sm:w-96 xs:w-72 ls:w-80  border-2 xs:py-1 ls:py-2 sm:py-3  border-secondary rounded-xl mb-5"
              type="text"
              placeholder="Username"
              value={signUpData.username}
              onChange={signUpChange}
              id="username"
              name="username"
              required
            />
          </div>

          <div className="">
            <input
              className="xs:pl-3 ls:pl-4 sm:pl-5 sm:w-96 xs:w-72 ls:w-80 border-2 xs:py-1 ls:py-2 sm:py-3  border-secondary rounded-xl mb-5"
              type="email"
              placeholder="Email"
              value={signUpData.email}
              onChange={signUpChange}
              id="email"
              name="email"
              required
            />
          </div>

          <div className="relative">
            <input
              className="xs:pl-3 ls:pl-4 sm:pl-5 sm:w-96 xs:w-72 ls:w-80 border-2 xs:py-1 ls:py-2 sm:py-3  border-secondary rounded-xl mb-5"
              type={showPassword ? signUpData.password : "password"}
              placeholder="Password"
              value={signUpData.password}
              onChange={signUpChange}
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
          </div>

          <div className="relative">
            <input
              className="xs:pl-3 ls:pl-4 sm:pl-5 sm:w-96 xs:w-72 ls:w-80 border-2 xs:py-1 ls:py-2 sm:py-3  border-secondary rounded-xl mb-5"
              type={showPassword ? signUpData.confirmPassword : "password"}
              placeholder="Confirm Password"
              value={signUpData.confirmPassword}
              onChange={signUpChange}
              id="confirm-password"
              name="confirmPassword"
              autoComplete="new-password"
              required
            />
            <span
              className="absolute sm:top-4 ls:top-4 xs:top-3 right-4 sm:text-xl xs:text-base"
              onClick={handleShowPassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className=" xs:text-xs sm:font-semibold xs:font-medium xs:px-14 sm:px-0 justify-start">
            6 or more characters, one number, one uppercase & one lowercase
          </div>
          <div className="text-red-600 flex justify-center text-center lg:w-96 ls:w-80 xs:w-72">
            {errorMessage}
          </div>
          <div className="flex justify-center text-center text-red-600 lg:w-96 ls:w-80 xs:w-72">
            {passwordErrorMessage}
          </div>

          <button className="xs:py-1 ls:py-2 sm:py-3 text-tertiary sm:font-medium xs:font-normal xs:text-sm sm:text-base bg-secondary sm:w-96 xs:w-72 ls:w-80 rounded-3xl mt-10">
            Sign up with Email
          </button>
          <div className="text-gray-500 sm:text-base xs:text-sm font-medium mt-4">
            Already have an account?{" "}
            <Link to="/">
              <span className="text-secondary">Log in</span>
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
