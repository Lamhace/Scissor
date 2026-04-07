import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logIn } from "../../Redux/LoginReducer";
import { useDispatch } from "react-redux";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../firebaseConfig';
import { FcGoogle } from 'react-icons/fc';

export default function GoogleApple() {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function continueWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        dispatch(logIn());
        navigate("/");
      }).catch((error) => {
        console.error("Google sign-in error:", error);
      });
  }

  return (
    <div className="w-full mb-8">
      <button
        onClick={continueWithGoogle}
        className="w-full flex items-center justify-center gap-3 glass border border-white border-opacity-10 hover:border-secondary hover:border-opacity-40 text-white py-3.5 px-6 rounded-xl transition-all duration-300 font-display font-medium text-sm hover:bg-white hover:bg-opacity-5"
      >
        <FcGoogle className="text-xl" />
        Continue with Google
      </button>
      <div className="flex items-center gap-3 mt-6 mb-6">
        <div className="flex-1 h-px bg-white bg-opacity-10" />
        <span className="text-muted text-xs font-mono uppercase tracking-widest">or</span>
        <div className="flex-1 h-px bg-white bg-opacity-10" />
      </div>
    </div>
  );
}
