import React from 'react'
import GoogleLogo from '../../../src/images/GoogleLogo.svg'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../firebaseConfig'


export default function GoogleApple() {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();


  function continueWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        navigate("/homepage");
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }



  return (
    <div className="">
      <div className=" xs:font-light ls:font-normal sm:font-medium text-gray-500 mb-3">
        Proceed with:
      </div>
      <div
        className="flex gap-2 items-center justify-center text-tertiary bg-secondary xs:py-1 sm:py-2 xs:px-4 ls:px-5 sm:px-6 rounded-lg hover:cursor-pointer mb-12"
        onClick={continueWithGoogle}
      >
        <span>
          <img src={GoogleLogo} alt="Logo" />
        </span>
        <span>Google</span>
      </div>
    </div>
  );
}

