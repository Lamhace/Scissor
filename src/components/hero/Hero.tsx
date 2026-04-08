import React from "react";
import NavBar from "../NavBar/NavBar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../Redux/LoginReducer";
import { FiScissors, FiArrowRight, FiZap, FiLogOut } from "react-icons/fi";
import { Link } from "react-scroll";

export default function Hero() {
  const { isLoggedIn } = useSelector((state: any) => state.loginAuthenticator);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logOut());
    navigate("/login", { replace: true });
  }

  return (
    <div style={{
      position:"relative",
      minHeight:"100vh",
      background:"linear-gradient(135deg,#0a0a0f 0%,#1a1a2e 40%,#16213e 70%,#0f3460 100%)",
      overflow:"hidden",
    }} className="grid-bg">

      {/* ambient orbs */}
      <div style={{position:"absolute",top:80,left:40,width:380,height:380,
        background:"#6c63ff",opacity:.09,borderRadius:"50%",filter:"blur(80px)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",bottom:80,right:40,width:300,height:300,
        background:"#00f5ff",opacity:.05,borderRadius:"50%",filter:"blur(80px)",pointerEvents:"none"}}/>

      {/* floating dots */}
      {[
        {top:130,right:80,size:12,color:"#6c63ff",delay:0},
        {top:240,right:190,size:8,color:"#00f5ff",delay:1.5},
        {bottom:160,left:80,size:16,color:"#ff6b6b",delay:3},
        {top:200,left:"33%",size:8,color:"#00f5ff",delay:2},
      ].map((d,i) => (
        <div key={i} className="animate-float" style={{
          position:"absolute",...(d.top!==undefined?{top:d.top}:{}),
          ...(d.bottom!==undefined?{bottom:d.bottom}:{}),
          ...(d.right!==undefined?{right:d.right}:{}),
          ...(d.left!==undefined?{left:d.left}:{}),
          width:d.size,height:d.size,background:d.color,
          borderRadius:"50%",opacity:.5,
          animationDelay:`${d.delay}s`,pointerEvents:"none"
        }}/>
      ))}

      {/* ── top bar: logo left + logout right (when logged in) ─────────── */}
      <div style={{
        position:"absolute",top:0,left:0,right:0,zIndex:40,
        display:"flex",alignItems:"center",justifyContent:"space-between",
        padding:"16px 24px",
        /* only show on mobile; desktop uses NavBar */
      }} className="md:hidden">
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <div style={{width:32,height:32,borderRadius:8,background:"rgba(108,99,255,.15)",
            border:"1px solid rgba(108,99,255,.35)",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <FiScissors style={{color:"#6c63ff",fontSize:14}}/>
          </div>
          <span style={{fontFamily:"Space Grotesk,sans-serif",fontWeight:700,fontSize:17,color:"#fff"}}>
            scissor
          </span>
        </div>
        {isLoggedIn && (
          <button onClick={handleLogout} style={{
            display:"flex",alignItems:"center",gap:6,
            background:"rgba(255,107,107,.12)",border:"1px solid rgba(255,107,107,.3)",
            color:"#ff6b6b",padding:"7px 14px",borderRadius:999,fontSize:13,
            fontFamily:"Space Grotesk,sans-serif",fontWeight:600,cursor:"pointer"
          }}>
            <FiLogOut style={{fontSize:14}}/>
            Log Out
          </button>
        )}
      </div>

      {/* ── desktop NavBar (already has logo + logout) ───────────────────── */}
      <NavBar />

      {/* ── hero content ─────────────────────────────────────────────────── */}
      <div style={{
        position:"relative",zIndex:10,
        display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
        padding:"clamp(100px,14vw,160px) 16px 80px",
        textAlign:"center",
      }}>

        {/* badge */}
        <div className="glass" style={{
          display:"inline-flex",alignItems:"center",gap:8,
          borderRadius:999,padding:"6px 16px",marginBottom:28,
          border:"1px solid rgba(108,99,255,0.3)"
        }}>
          <FiZap style={{color:"#6c63ff",fontSize:13}}/>
          <span style={{fontSize:11,fontFamily:"JetBrains Mono,monospace",
            color:"#a0aec0",textTransform:"uppercase",letterSpacing:"0.12em"}}>
            Lightning Fast URL Shortening
          </span>
        </div>

        {/* headline */}
        <h1 style={{
          fontFamily:"Space Grotesk,sans-serif",fontWeight:700,lineHeight:1.1,
          marginBottom:20,maxWidth:840,
          fontSize:"clamp(2rem,7vw,4.5rem)",
          color:"#fff"
        }}>
          Shorten. Share.{" "}
          <span style={{
            background:"linear-gradient(135deg,#6c63ff,#00f5ff)",
            WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"
          }}>
            Track Everything.
          </span>
        </h1>

        {/* sub */}
        <p style={{
          color:"#a0aec0",maxWidth:600,marginBottom:36,lineHeight:1.7,
          fontSize:"clamp(0.875rem,2vw,1.1rem)"
        }}>
          Scissor transforms long, unwieldy URLs into sharp branded links — complete with
          QR codes, custom slugs, and powerful analytics.
        </p>

        {/* CTAs */}
        <div style={{display:"flex",flexWrap:"wrap",gap:14,justifyContent:"center",marginBottom:56}}>
          <Link to="trim" smooth duration={800}>
            <button className="btn-primary" style={{
              display:"flex",alignItems:"center",gap:8,
              padding:"14px 28px",fontSize:"clamp(0.85rem,2vw,1rem)"
            }}>
              <FiScissors/>Trim Your First URL<FiArrowRight/>
            </button>
          </Link>
          <Link to="analytics" smooth duration={800}>
            <button className="glass" style={{
              display:"flex",alignItems:"center",
              border:"1px solid rgba(255,255,255,0.12)",color:"#fff",
              padding:"14px 28px",borderRadius:999,
              fontFamily:"Space Grotesk,sans-serif",fontWeight:600,
              fontSize:"clamp(0.85rem,2vw,1rem)",cursor:"pointer",
              transition:"border-color .3s",background:"rgba(255,255,255,0.04)"
            }}>
              See How It Works
            </button>
          </Link>
        </div>

        {/* stats bar */}
        <div className="glass" style={{
          borderRadius:20,padding:"18px 28px",
          display:"flex",flexWrap:"wrap",gap:16,
          justifyContent:"center",alignItems:"center",maxWidth:640,
          border:"1px solid rgba(255,255,255,0.08)"
        }}>
          {[
            {n:"3M+",l:"Active Users"},
            {n:"60M+",l:"Links Created"},
            {n:"1B+",l:"Connections"},
            {n:"300K+",l:"Integrations"},
          ].map((s,i) => (
            <div key={i} style={{textAlign:"center",padding:"0 16px",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none"}}>
              <div className="stat-number" style={{fontSize:"clamp(1.25rem,3vw,1.6rem)",fontWeight:700}}>{s.n}</div>
              <div style={{color:"#a0aec0",fontSize:12,marginTop:2}}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* scroll hint */}
        <div style={{
          position:"absolute",bottom:24,left:"50%",transform:"translateX(-50%)",
          display:"flex",flexDirection:"column",alignItems:"center",gap:6,opacity:.35
        }}>
          <span style={{fontSize:10,color:"#a0aec0",fontFamily:"JetBrains Mono,monospace",
            textTransform:"uppercase",letterSpacing:"0.12em"}}>Scroll</span>
          <div style={{width:1,height:32,
            background:"linear-gradient(to bottom,#a0aec0,transparent)"}}/>
        </div>
      </div>
    </div>
  );
}
