import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { GiBoxCutter } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FiLink, FiCopy, FiCheck, FiChevronDown } from "react-icons/fi";

export default function Trim() {
  const { isLoggedIn } = useSelector((state: any) => state.loginAuthenticator);
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLongUrl(event.target.value);
    setError("");
  };

  const validateUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  const shortenUrl = async (url: string) => {
    const token = "ef34b9d1902be678f3877b8471f60e0cca477adb";
    const apiUrl = "https://api-ssl.bitly.com/v4/shorten";
    const response = await axios.post(
      apiUrl,
      { long_url: url },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.link;
  };

  const handleShortenUrl = async () => {
    if (!longUrl) return;
    if (!validateUrl(longUrl)) {
      setError("Invalid URL format. Please enter a valid URL including https://");
      return;
    }
    if (isLoggedIn) {
      setLoading(true);
      try {
        const result = await shortenUrl(longUrl);
        setShortUrl(result);
        setCopied(false);
        setError("");
      } catch (error) {
        setError("Failed to shorten URL. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      navigate("/login");
    }
    setLongUrl("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const clearShortUrl = () => {
    setShortUrl("");
    setCopied(false);
  };

  return (
    <section
      id="trim"
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)' }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary opacity-10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 border border-secondary border-opacity-20">
            <GiBoxCutter className="text-secondary" />
            <span className="text-xs font-mono text-secondary tracking-widest uppercase">URL Trimmer</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">
            Trim Your <span className="gradient-text">Long URLs</span>
          </h2>
          <p className="text-muted text-sm">Paste your link, choose a domain, set a custom alias and trim.</p>
        </div>

        {/* Main trim card */}
        <div className="glass-dark rounded-3xl p-8 border border-secondary border-opacity-20">
          {/* URL Input */}
          <div className="mb-4">
            <label className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">Paste Your URL</label>
            <div className="relative">
              <FiLink className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted text-lg" />
              <input
                className="scissor-input pl-11"
                type="text"
                value={longUrl}
                onChange={handleUrlChange}
                placeholder="https://your-very-long-url.com/goes/here..."
              />
            </div>
          </div>

          {/* Domain + Alias Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">Domain</label>
              <div className="relative">
                <select className="scissor-input appearance-none pr-10">
                  <option value="1">Choose Domain</option>
                  <option value="2">scissor.com</option>
                  <option value="3">+ Add Domain</option>
                </select>
                <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono text-muted uppercase tracking-widest mb-2">Custom Alias</label>
              <input
                className="scissor-input"
                type="text"
                placeholder="my-custom-link"
              />
            </div>
          </div>

          {/* Trim Button */}
          <button
            className="w-full btn-primary flex items-center justify-center gap-3 text-base py-4 rounded-xl"
            onClick={handleShortenUrl}
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Trimming...
              </>
            ) : (
              <>
                <GiBoxCutter className="text-xl" />
                Trim URL
              </>
            )}
          </button>

          <p className="text-center text-muted text-xs mt-4 leading-relaxed">
            By clicking Trim URL, you agree to our{" "}
            <span className="text-secondary hover:underline cursor-pointer">Terms of Service</span>,{" "}
            <span className="text-secondary hover:underline cursor-pointer">Privacy Policy</span> and Cookie Usage.
          </p>
        </div>

        {/* Error state */}
        {error && (
          <div className="mt-4 p-4 rounded-xl border border-accent border-opacity-30 bg-accent bg-opacity-10 text-accent text-sm text-center">
            {error}
          </div>
        )}

        {/* Result card */}
        {shortUrl && (
          <div className="mt-6 glass-dark rounded-2xl p-6 border border-secondary border-opacity-30 relative" data-aos="fade-up">
            <button
              onClick={clearShortUrl}
              className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 text-muted hover:text-white transition-all"
            >
              <AiOutlineClose className="text-sm" />
            </button>
            <div className="mb-3">
              <span className="text-xs font-mono text-secondary uppercase tracking-widest">Your Shortened URL</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 font-mono text-base text-white bg-white bg-opacity-5 rounded-xl px-4 py-3 truncate border border-white border-opacity-5">
                {shortUrl}
              </div>
              <button
                onClick={handleCopy}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  copied
                    ? "bg-green-500 bg-opacity-20 text-green-400 border border-green-500 border-opacity-30"
                    : "bg-secondary bg-opacity-20 text-secondary border border-secondary border-opacity-30 hover:bg-opacity-30"
                }`}
              >
                {copied ? <FiCheck /> : <FiCopy />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
