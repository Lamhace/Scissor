import React, { useState } from "react";
import GoogleApple from "../../googleApple/GoogleApple";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from "../../footer/Footer";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { logIn } from "../../../Redux/LoginReducer";
import { useSelector, useDispatch } from "react-redux";
import { FiScissors, FiMail, FiLock, FiArrowRight } from "react-icons/fi";

export default function Loginpage() {
  const { _isLoggedIn } = useSelector((state: any) => state.loginAuthenticator);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  function loginChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
    setErrorMessage("");
  }

  async function submitLoginData(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const hasUppercase = /[A-Z]/.test(loginData.password);
    const hasLowercase = /[a-z]/.test(loginData.password);
    const hasNumber = /[0-9]/.test(loginData.password);

    if (loginData.password.length < 6 || !hasUppercase || !hasLowercase || !hasNumber) {
      setErrorMessage("Password must be at least 6 characters with uppercase, lowercase, and a number.");
      return;
    }

    setLoading(true);
    try {
      const _userCredential = await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
      dispatch(logIn());
      navigate("/", { replace: true });
    } catch (error) {
      setErrorMessage("Incorrect email address or password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-primary grid-bg flex flex-col">
      {/* Background orbs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-80 h-80 bg-neon opacity-5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white border-opacity-5">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-secondary bg-opacity-20 border border-secondary border-opacity-30 flex items-center justify-center">
            <FiScissors className="text-secondary text-sm" />
          </div>
          <span className="font-display font-bold text-lg text-white">scissor</span>
        </Link>
        <Link to="/signup" className="text-muted text-sm hover:text-white transition-colors">
          Don't have an account? <span className="text-secondary">Sign up</span>
        </Link>
      </div>

      {/* Main */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="glass-dark rounded-3xl p-8 border border-white border-opacity-5">
            <div className="mb-8">
              <h1 className="font-display font-bold text-3xl text-white mb-2">Welcome back</h1>
              <p className="text-muted text-sm">Sign in to your Scissor account</p>
            </div>

            {/* Google */}
            <div data-testid="continueWithGoogle">
              <GoogleApple />
            </div>

            {/* Form */}
            <form data-testid="form" onSubmit={submitLoginData} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">Email</label>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                  <input
                    className="scissor-input pl-11"
                    type="email"
                    value={loginData.email}
                    onChange={loginChange}
                    placeholder="you@example.com"
                    name="email"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono text-muted uppercase tracking-widest">Password</label>
                  <span className="text-secondary text-xs hover:underline cursor-pointer">Forgot password?</span>
                </div>
                <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                  <input
                    className="scissor-input pl-11 pr-12"
                    type={showPassword ? "text" : "password"}
                    value={loginData.password}
                    onChange={loginChange}
                    placeholder="••••••••"
                    name="password"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-white transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Error */}
              {errorMessage && (
                <div className="p-3 rounded-xl bg-accent bg-opacity-10 border border-accent border-opacity-30 text-accent text-sm text-center">
                  {errorMessage}
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
                    Sign In
                    <FiArrowRight />
                  </>
                )}
              </button>
            </form>

            <p className="text-center text-muted text-sm mt-6">
              New to Scissor?{" "}
              <Link to="/signup" className="text-secondary hover:underline font-medium">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
