import React, { useState } from "react";
import GoogleApple from "../../googleApple/GoogleApple";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from "../../footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { logIn } from "../../../Redux/LoginReducer";
import { useDispatch } from "react-redux";
import { FiScissors, FiArrowRight } from "react-icons/fi";

/* reusable inline-SVG icons – immune to Tailwind/react-icons size conflicts */
const iconStyle: React.CSSProperties = {
  position:"absolute", left:14, top:"50%", transform:"translateY(-50%)",
  color:"#a0aec0", pointerEvents:"none", zIndex:10
};
const UserSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);
const MailSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const LockSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={iconStyle}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const LabelStyle: React.CSSProperties = {
  display:"block", fontSize:11, fontFamily:"JetBrains Mono,monospace",
  color:"#a0aec0", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:8
};

export default function Signuppage() {
  const navigate  = useNavigate();
  const dispatch  = useDispatch();
  const [data, setData] = useState({ username:"", email:"", password:"", confirmPassword:"" });
  const [err, setErr]   = useState("");
  const [pwErr, setPwErr] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData(p => ({ ...p, [e.target.name]: e.target.value }));
    setErr(""); setPwErr("");
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { password, confirmPassword, email } = data;
    if (password.length < 6 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
      setErr("Password needs 6+ chars, uppercase, lowercase & a number."); return;
    }
    if (password !== confirmPassword) { setPwErr("Passwords don't match."); return; }
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      dispatch(logIn());
      navigate("/", { replace: true }); // replace prevents back-swipe returning to signup
    } catch {
      setErr("This email is already registered. Try signing in instead.");
    } finally { setLoading(false); }
  }

  const fieldWrap: React.CSSProperties = { position:"relative", display:"flex", alignItems:"center" };

  return (
    <div className="min-h-screen bg-primary grid-bg flex flex-col">
      <div style={{position:"fixed",top:0,right:0,width:384,height:384,background:"#6c63ff",
        opacity:.08,borderRadius:"50%",filter:"blur(80px)",pointerEvents:"none"}}/>
      <div style={{position:"fixed",bottom:0,left:0,width:320,height:320,background:"#00f5ff",
        opacity:.04,borderRadius:"50%",filter:"blur(80px)",pointerEvents:"none"}}/>

      <header style={{position:"relative",zIndex:10,display:"flex",alignItems:"center",
        justifyContent:"space-between",padding:"18px 24px",
        borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
        <Link to="/" style={{display:"flex",alignItems:"center",gap:8,textDecoration:"none"}}>
          <div style={{width:32,height:32,borderRadius:8,background:"rgba(108,99,255,.15)",
            border:"1px solid rgba(108,99,255,.35)",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <FiScissors style={{color:"#6c63ff",fontSize:14}}/>
          </div>
          <span style={{fontFamily:"Space Grotesk,sans-serif",fontWeight:700,fontSize:18,color:"#fff"}}>scissor</span>
        </Link>
        <Link to="/login" style={{color:"#a0aec0",fontSize:14,textDecoration:"none"}}>
          Have an account?&nbsp;<span style={{color:"#6c63ff",fontWeight:600}}>Sign in</span>
        </Link>
      </header>

      <main style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:"40px 16px"}}>
        <div style={{width:"100%",maxWidth:440}}>
          <div className="glass-dark" style={{borderRadius:24,padding:"32px 28px"}}>
            <div style={{marginBottom:24}}>
              <h1 style={{fontFamily:"Space Grotesk,sans-serif",fontWeight:700,fontSize:"1.65rem",
                color:"#fff",margin:"0 0 6px"}}>Create your account</h1>
              <p style={{color:"#a0aec0",fontSize:14,margin:0}}>Start shortening links free. No card needed.</p>
            </div>

            <GoogleApple />

            <form onSubmit={onSubmit}>
              {/* Username */}
              <div style={{marginBottom:14}}>
                <label style={LabelStyle}>Username</label>
                <div style={fieldWrap}>
                  <UserSVG />
                  <input className="input-with-icon" type="text" name="username"
                    value={data.username} onChange={onChange} placeholder="johndoe" required/>
                </div>
              </div>

              {/* Email */}
              <div style={{marginBottom:14}}>
                <label style={LabelStyle}>Email</label>
                <div style={fieldWrap}>
                  <MailSVG />
                  <input className="input-with-icon" type="email" name="email"
                    value={data.email} onChange={onChange} placeholder="you@example.com" required/>
                </div>
              </div>

              {/* Password */}
              <div style={{marginBottom:14}}>
                <label style={LabelStyle}>Password</label>
                <div style={fieldWrap}>
                  <LockSVG />
                  <input className="input-with-icon has-right-btn"
                    type={showPw ? "text" : "password"} name="password"
                    value={data.password} onChange={onChange}
                    placeholder="Min 6 chars, upper, lower, number"
                    autoComplete="new-password" required/>
                  <button type="button" onClick={() => setShowPw(!showPw)}
                    style={{position:"absolute",right:14,background:"none",border:"none",
                      color:"#a0aec0",cursor:"pointer",padding:0,zIndex:10,display:"flex",alignItems:"center"}}>
                    {showPw ? <FaEyeSlash/> : <FaEye/>}
                  </button>
                </div>
              </div>

              {/* Confirm password */}
              <div style={{marginBottom:14}}>
                <label style={LabelStyle}>Confirm Password</label>
                <div style={fieldWrap}>
                  <LockSVG />
                  <input className="input-with-icon has-right-btn"
                    type={showPw ? "text" : "password"} name="confirmPassword"
                    value={data.confirmPassword} onChange={onChange}
                    placeholder="Repeat your password"
                    autoComplete="new-password" required/>
                  <button type="button" onClick={() => setShowPw(!showPw)}
                    style={{position:"absolute",right:14,background:"none",border:"none",
                      color:"#a0aec0",cursor:"pointer",padding:0,zIndex:10,display:"flex",alignItems:"center"}}>
                    {showPw ? <FaEyeSlash/> : <FaEye/>}
                  </button>
                </div>
              </div>

              <p style={{color:"#a0aec0",fontSize:12,marginBottom:12}}>
                6+ chars · one uppercase · one lowercase · one number
              </p>

              {err && (
                <div style={{padding:"10px 14px",borderRadius:10,marginBottom:10,
                  background:"rgba(255,107,107,.1)",border:"1px solid rgba(255,107,107,.3)",
                  color:"#ff6b6b",fontSize:13,textAlign:"center"}}>{err}</div>
              )}
              {pwErr && (
                <div style={{padding:"10px 14px",borderRadius:10,marginBottom:10,
                  background:"rgba(255,107,107,.1)",border:"1px solid rgba(255,107,107,.3)",
                  color:"#ff6b6b",fontSize:13,textAlign:"center"}}>{pwErr}</div>
              )}

              <button type="submit" disabled={loading} className="btn-primary"
                style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",
                  gap:8,padding:"14px 24px",borderRadius:12,marginTop:4,fontSize:15}}>
                {loading
                  ? <div style={{width:20,height:20,border:"2px solid rgba(255,255,255,.3)",
                      borderTopColor:"#fff",borderRadius:"50%",animation:"spin .7s linear infinite"}}/>
                  : <><span>Create Account</span><FiArrowRight/></>
                }
              </button>
            </form>

            <p style={{textAlign:"center",color:"#a0aec0",fontSize:12,marginTop:16,lineHeight:1.6}}>
              By signing up you agree to our&nbsp;
              <span style={{color:"#6c63ff",cursor:"pointer"}}>Terms</span>&nbsp;&amp;&nbsp;
              <span style={{color:"#6c63ff",cursor:"pointer"}}>Privacy Policy</span>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
