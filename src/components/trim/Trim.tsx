import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { GiBoxCutter } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FiLink, FiCopy, FiCheck, FiChevronDown } from "react-icons/fi";

export default function Trim() {
  const { isLoggedIn } = useSelector((s: any) => s.loginAuthenticator);
  const [longUrl,  setLongUrl]  = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied,   setCopied]   = useState(false);
  const [error,    setError]    = useState("");
  const [loading,  setLoading]  = useState(false);
  const navigate    = useNavigate();
  const errorTimer  = useRef<NodeJS.Timeout | null>(null);

  // auto-clear error after 8 s
  useEffect(() => {
    if (!error) return;
    if (errorTimer.current) clearTimeout(errorTimer.current);
    errorTimer.current = setTimeout(() => setError(""), 8000);
    return () => { if (errorTimer.current) clearTimeout(errorTimer.current); };
  }, [error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLongUrl(e.target.value); setError("");
  };

  const isValidUrl = (url: string) => { try { new URL(url); return true; } catch { return false; } };

  const shortenUrl = async (url: string) => {
    const res = await axios.post(
      "https://api-ssl.bitly.com/v4/shorten",
      { long_url: url },
      { headers: { Authorization: "Bearer ef34b9d1902be678f3877b8471f60e0cca477adb",
          "Content-Type": "application/json" } }
    );
    return res.data.link;
  };

  const handleTrim = async () => {
    if (!longUrl) return;
    if (!isValidUrl(longUrl)) { setError("Invalid URL. Include https:// and try again."); return; }
    if (!isLoggedIn) { navigate("/login"); return; }
    setLoading(true);
    try {
      const result = await shortenUrl(longUrl);
      setShortUrl(result); setCopied(false); setError("");
    } catch { setError("Failed to shorten URL. Please try again."); }
    finally { setLoading(false); setLongUrl(""); }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl); setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const iconSt: React.CSSProperties = {
    position:"absolute",left:14,top:"50%",transform:"translateY(-50%)",
    color:"#a0aec0",pointerEvents:"none",zIndex:10
  };

  return (
    <section id="trim" style={{
      padding:"80px 16px",position:"relative",overflow:"hidden",
      background:"linear-gradient(180deg,#0a0a0f 0%,#1a1a2e 50%,#0a0a0f 100%)"
    }}>
      <div style={{position:"absolute",inset:0,pointerEvents:"none"}} className="grid-bg"/>
      <div style={{position:"absolute",top:"50%",left:"50%",
        transform:"translate(-50%,-50%)",width:480,height:480,
        background:"#6c63ff",opacity:.08,borderRadius:"50%",filter:"blur(90px)",pointerEvents:"none"}}/>

      <div style={{maxWidth:640,margin:"0 auto",position:"relative",zIndex:1}}>

        {/* heading */}
        <div style={{textAlign:"center",marginBottom:40}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:8,
            background:"rgba(255,255,255,0.04)",border:"1px solid rgba(108,99,255,0.2)",
            borderRadius:999,padding:"6px 16px",marginBottom:14}}>
            <GiBoxCutter style={{color:"#6c63ff"}}/>
            <span style={{fontSize:11,fontFamily:"JetBrains Mono,monospace",color:"#6c63ff",
              textTransform:"uppercase",letterSpacing:"0.12em"}}>URL Trimmer</span>
          </div>
          <h2 style={{fontFamily:"Space Grotesk,sans-serif",fontWeight:700,
            fontSize:"clamp(1.6rem,4vw,2.2rem)",color:"#fff",margin:"0 0 10px"}}>
            Trim Your{" "}
            <span style={{background:"linear-gradient(135deg,#6c63ff,#00f5ff)",
              WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
              Long URLs
            </span>
          </h2>
          <p style={{color:"#a0aec0",fontSize:14,margin:0}}>Paste your link, choose a domain and trim.</p>
        </div>

        {/* card */}
        <div className="glass-dark" style={{borderRadius:24,padding:"clamp(20px,4vw,36px)"}}>

          {/* URL input */}
          <div style={{marginBottom:16}}>
            <label style={{display:"block",fontSize:11,fontFamily:"JetBrains Mono,monospace",
              color:"#a0aec0",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:8}}>
              Paste Your URL
            </label>
            <div style={{position:"relative",display:"flex",alignItems:"center"}}>
              <FiLink style={iconSt}/>
              <input
                className="input-with-icon"
                type="text"
                value={longUrl}
                onChange={handleChange}
                placeholder="https://your-very-long-url.com/goes/here..."
              />
            </div>
          </div>

          {/* domain + alias */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",
            gap:12,marginBottom:20}}>
            <div>
              <label style={{display:"block",fontSize:11,fontFamily:"JetBrains Mono,monospace",
                color:"#a0aec0",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:8}}>
                Domain
              </label>
              <div style={{position:"relative",display:"flex",alignItems:"center"}}>
                <select className="scissor-input" style={{paddingRight:40}}>
                  <option>Choose Domain</option>
                  <option>scissor.com</option>
                  <option>+ Add Domain</option>
                </select>
                <FiChevronDown style={{position:"absolute",right:14,color:"#a0aec0",pointerEvents:"none"}}/>
              </div>
            </div>
            <div>
              <label style={{display:"block",fontSize:11,fontFamily:"JetBrains Mono,monospace",
                color:"#a0aec0",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:8}}>
                Custom Alias
              </label>
              <input className="scissor-input" type="text" placeholder="my-custom-link"/>
            </div>
          </div>

          {/* button */}
          <button
            onClick={handleTrim}
            disabled={loading}
            className="btn-primary"
            style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",
              gap:10,padding:"14px 24px",borderRadius:14,fontSize:15}}
          >
            {loading
              ? <div style={{width:20,height:20,border:"2px solid rgba(255,255,255,.3)",
                  borderTopColor:"#fff",borderRadius:"50%",animation:"spin .7s linear infinite"}}/>
              : <><GiBoxCutter style={{fontSize:18}}/> Trim URL</>
            }
          </button>

          <p style={{textAlign:"center",color:"#a0aec0",fontSize:12,marginTop:14,lineHeight:1.6}}>
            By clicking Trim URL, you agree to our{" "}
            <span style={{color:"#6c63ff",cursor:"pointer"}}>Terms of Service</span>,{" "}
            <span style={{color:"#6c63ff",cursor:"pointer"}}>Privacy Policy</span> and Cookie Usage.
          </p>
        </div>

        {/* error */}
        {error && (
          <div style={{marginTop:14,padding:"12px 16px",borderRadius:12,
            background:"rgba(255,107,107,.1)",border:"1px solid rgba(255,107,107,.3)",
            color:"#ff6b6b",fontSize:13,textAlign:"center"}}>
            {error}
          </div>
        )}

        {/* result */}
        {shortUrl && (
          <div className="glass-dark" style={{marginTop:20,borderRadius:20,padding:"22px",
            border:"1px solid rgba(108,99,255,0.3)",position:"relative"}}>
            <button onClick={() => { setShortUrl(""); setCopied(false); }} style={{
              position:"absolute",top:14,right:14,width:28,height:28,
              background:"rgba(255,255,255,.08)",border:"none",borderRadius:"50%",
              color:"#a0aec0",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"
            }}>
              <AiOutlineClose style={{fontSize:13}}/>
            </button>
            <div style={{fontSize:11,fontFamily:"JetBrains Mono,monospace",color:"#6c63ff",
              textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:12}}>
              Your Shortened URL
            </div>
            <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
              <div style={{flex:1,minWidth:160,fontFamily:"JetBrains Mono,monospace",fontSize:14,
                color:"#fff",background:"rgba(255,255,255,.05)",borderRadius:10,
                padding:"12px 14px",border:"1px solid rgba(255,255,255,.06)",
                overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                {shortUrl}
              </div>
              <button onClick={handleCopy} style={{
                display:"flex",alignItems:"center",gap:6,padding:"12px 18px",
                borderRadius:10,fontFamily:"Space Grotesk,sans-serif",fontWeight:600,fontSize:13,
                cursor:"pointer",transition:"all .3s",border:"1px solid",
                background: copied ? "rgba(72,187,120,.15)" : "rgba(108,99,255,.15)",
                color:       copied ? "#48bb78"              : "#6c63ff",
                borderColor: copied ? "rgba(72,187,120,.35)"  : "rgba(108,99,255,.35)",
              }}>
                {copied ? <FiCheck/> : <FiCopy/>}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        )}
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </section>
  );
}
