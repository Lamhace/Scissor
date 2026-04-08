import React, { useState } from "react";
import GoogleApple from "../../googleApple/GoogleApple";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from "../../footer/Footer";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { logIn } from "../../../Redux/LoginReducer";
import { useSelector, useDispatch } from "react-redux";
import { FiScissors, FiArrowRight } from "react-icons/fi";

/* ── tiny inline SVG icons so Tailwind sizing never fights react-icons ── */
const MailSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)",
             color:"#a0aec0", pointerEvents:"none", zIndex:10, flexShrink:0 }}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const LockSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)",
             color:"#a0aec0", pointerEvents:"none", zIndex:10, flexShrink:0 }}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

export default function Loginpage() {
  const navigate   = useNavigate();
  const dispatch   = useDispatch();
  const [loginData, setLoginData]       = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading]           = useState(false);

  function loginChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    setErrorMessage("");
  }

  async function submitLoginData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { password, email } = loginData;
    const hasUpper  = /[A-Z]/.test(password);
    const hasLower  = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    if (password.length < 6 || !hasUpper || !hasLower || !hasNumber) {
      setErrorMessage("Password needs 6+ chars, uppercase, lowercase & a number.");
      return;
    }
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(logIn());
      navigate("/", { replace: true }); // replace keeps back-button from returning here
    } catch {
      setErrorMessage("Incorrect email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-primary grid-bg flex flex-col">
      {/* orbs */}
      <div style={{position:"fixed",top:0,left:0,width:384,height:384,
        background:"#6c63ff",opacity:.08,borderRadius:"50%",filter:"blur(80px)",pointerEvents:"none"}}/>
      <div style={{position:"fixed",bottom:0,right:0,width:320,height:320,
        background:"#00f5ff",opacity:.04,borderRadius:"50%",filter:"blur(80px)",pointerEvents:"none"}}/>

      {/* top bar */}
      <header style={{
        position:"relative",zIndex:10,display:"flex",alignItems:"center",
        justifyContent:"space-between",padding:"18px 24px",
        borderBottom:"1px solid rgba(255,255,255,0.06)"
      }}>
        <Link to="/" style={{display:"flex",alignItems:"center",gap:8,textDecoration:"none"}}>
          <div style={{width:32,height:32,borderRadius:8,background:"rgba(108,99,255,.15)",
            border:"1px solid rgba(108,99,255,.35)",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <FiScissors style={{color:"#6c63ff",fontSize:14}}/>
          </div>
          <span style={{fontFamily:"Space Grotesk,sans-serif",fontWeight:700,fontSize:18,color:"#fff"}}>scissor</span>
        </Link>
        <Link to="/signup" style={{color:"#a0aec0",fontSize:14,textDecoration:"none"}}>
          No account?&nbsp;<span style={{color:"#6c63ff",fontWeight:600}}>Sign up</span>
        </Link>
      </header>

      {/* main */}
      <main style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:"48px 16px"}}>
        <div style={{width:"100%",maxWidth:440}}>
          <div className="glass-dark" style={{borderRadius:24,padding:"36px 32px"}}>
            <div style={{marginBottom:28}}>
              <h1 style={{fontFamily:"Space Grotesk,sans-serif",fontWeight:700,fontSize:"1.75rem",color:"#fff",margin:"0 0 6px"}}>
                Welcome back
              </h1>
              <p style={{color:"#a0aec0",fontSize:14,margin:0}}>Sign in to your Scissor account</p>
            </div>

            <div data-testid="continueWithGoogle"><GoogleApple /></div>

            <form data-testid="form" onSubmit={submitLoginData}>

              {/* Email field */}
              <div style={{marginBottom:16}}>
                <label style={{display:"block",fontSize:11,fontFamily:"JetBrains Mono,monospace",
                  color:"#a0aec0",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:8}}>
                  Email
                </label>
                <div style={{position:"relative",display:"flex",alignItems:"center"}}>
                  <MailSVG />
                  <input
                    className="input-with-icon"
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={loginChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              {/* Password field */}
              <div style={{marginBottom:16}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                  <label style={{fontSize:11,fontFamily:"JetBrains Mono,monospace",
                    color:"#a0aec0",textTransform:"uppercase",letterSpacing:"0.1em"}}>
                    Password
                  </label>
                  <span style={{fontSize:12,color:"#6c63ff",cursor:"pointer"}}>Forgot password?</span>
                </div>
                <div style={{position:"relative",display:"flex",alignItems:"center"}}>
                  <LockSVG />
                  <input
                    className="input-with-icon has-right-btn"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={loginData.password}
                    onChange={loginChange}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{position:"absolute",right:14,background:"none",border:"none",
                      color:"#a0aec0",cursor:"pointer",padding:0,zIndex:10,
                      display:"flex",alignItems:"center"}}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Error */}
              {errorMessage && (
                <div style={{margin:"12px 0",padding:"12px 16px",borderRadius:10,
                  background:"rgba(255,107,107,.1)",border:"1px solid rgba(255,107,107,.3)",
                  color:"#ff6b6b",fontSize:13,textAlign:"center"}}>
                  {errorMessage}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",
                  gap:8,padding:"14px 24px",borderRadius:12,marginTop:8,fontSize:15}}
              >
                {loading
                  ? <div style={{width:20,height:20,border:"2px solid rgba(255,255,255,.3)",
                      borderTopColor:"#fff",borderRadius:"50%",animation:"spin .7s linear infinite"}}/>
                  : <><span>Sign In</span><FiArrowRight /></>
                }
              </button>
            </form>

            <p style={{textAlign:"center",color:"#a0aec0",fontSize:14,marginTop:20}}>
              New to Scissor?&nbsp;
              <Link to="/signup" style={{color:"#6c63ff",fontWeight:600,textDecoration:"none"}}>
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
