import React, { useState } from 'react';
import GoogleApple from '../../googleApple/GoogleApple';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from '../../footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import { logIn } from "../../../Redux/LoginReducer";
import { useDispatch } from "react-redux";
import { FiScissors, FiUser, FiMail, FiLock, FiArrowRight } from 'react-icons/fi';

export default function Signuppage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signUpData, setSignUpData] = useState({
    username: '', password: '', email: '', confirmPassword: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  function signUpChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSignUpData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    setErrorMessage('');
    setPasswordErrorMessage('');
  }

  async function submitSignInData(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const hasUppercase = /[A-Z]/.test(signUpData.password);
    const hasLowercase = /[a-z]/.test(signUpData.password);
    const hasNumber = /[0-9]/.test(signUpData.password);

    if (signUpData.password.length < 6 || !hasUppercase || !hasLowercase || !hasNumber) {
      setErrorMessage('Password must be at least 6 characters with uppercase, lowercase, and a number.');
      return;
    }
    if (signUpData.password !== signUpData.confirmPassword) {
      setPasswordErrorMessage("Passwords don't match. Please try again.");
      return;
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, signUpData.email, signUpData.password);
      dispatch(logIn());
      navigate("/", { replace: true });
    } catch (error) {
      setErrorMessage('This email is already registered. Try signing in instead.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-primary grid-bg flex flex-col">
      {/* Background orbs */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-80 h-80 bg-neon opacity-5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white border-opacity-5">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-secondary bg-opacity-20 border border-secondary border-opacity-30 flex items-center justify-center">
            <FiScissors className="text-secondary text-sm" />
          </div>
          <span className="font-display font-bold text-lg text-white">scissor</span>
        </Link>
        <Link to="/login" className="text-muted text-sm hover:text-white transition-colors">
          Already have an account? <span className="text-secondary">Sign in</span>
        </Link>
      </div>

      {/* Main */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="glass-dark rounded-3xl p-8 border border-white border-opacity-5">
            <div className="mb-8">
              <h1 className="font-display font-bold text-3xl text-white mb-2">Create your account</h1>
              <p className="text-muted text-sm">Start shortening links for free. No credit card needed.</p>
            </div>

            <GoogleApple />

            <form onSubmit={submitSignInData} className="space-y-4">
              {/* Username */}
              <div>
                <label className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">Username</label>
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                  <input
                    className="scissor-input pl-11"
                    type="text"
                    placeholder="johndoe"
                    value={signUpData.username}
                    onChange={signUpChange}
                    name="username"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">Email</label>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                  <input
                    className="scissor-input pl-11"
                    type="email"
                    placeholder="you@example.com"
                    value={signUpData.email}
                    onChange={signUpChange}
                    name="email"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">Password</label>
                <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                  <input
                    className="scissor-input pl-11 pr-12"
                    type={showPassword ? "text" : "password"}
                    placeholder="Min 6 chars, upper, lower, number"
                    value={signUpData.password}
                    onChange={signUpChange}
                    name="password"
                    autoComplete="new-password"
                    required
                  />
                  <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-white transition-colors" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">Confirm Password</label>
                <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                  <input
                    className="scissor-input pl-11 pr-12"
                    type={showPassword ? "text" : "password"}
                    placeholder="Repeat your password"
                    value={signUpData.confirmPassword}
                    onChange={signUpChange}
                    name="confirmPassword"
                    autoComplete="new-password"
                    required
                  />
                </div>
              </div>

              {/* Hint */}
              <p className="text-muted text-xs">
                Use 6+ characters with at least one uppercase, one lowercase, and one number.
              </p>

              {/* Errors */}
              {errorMessage && (
                <div className="p-3 rounded-xl bg-accent bg-opacity-10 border border-accent border-opacity-30 text-accent text-sm text-center">
                  {errorMessage}
                </div>
              )}
              {passwordErrorMessage && (
                <div className="p-3 rounded-xl bg-accent bg-opacity-10 border border-accent border-opacity-30 text-accent text-sm text-center">
                  {passwordErrorMessage}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary flex items-center justify-center gap-2 py-4 rounded-xl mt-2"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Create Account
                    <FiArrowRight />
                  </>
                )}
              </button>
            </form>

            <p className="text-center text-muted text-xs mt-6 leading-relaxed">
              By signing up, you agree to our{" "}
              <span className="text-secondary hover:underline cursor-pointer">Terms of Service</span> and{" "}
              <span className="text-secondary hover:underline cursor-pointer">Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
