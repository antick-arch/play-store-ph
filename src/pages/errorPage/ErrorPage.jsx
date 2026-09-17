import React, { useState } from 'react';

export default function FunnyErrorPage() {
  const [blame, setBlame] = useState('the developer');
  
  const funnyExcuses = {
    'the developer': "spilled coffee on the main server rack again. They've been forced to write vanilla JavaScript as punishment.",
    'a stray cat': "walked across the keyboard in the data center. It's now running the company's deployment pipeline.",
    'your internet': "is technically working, but it's tired. Have you tried asking it nicely or giving it a 5-minute coffee break?",
    'quantum instability': "shifted this specific webpage into a parallel universe where our website is actually a taco stand.",
  };

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0f172a', color: '#f8fafc', fontFamily: 'sans-serif', padding: '20px', textAlign: 'center' }}>
      <div style={{ maxWidth: '600px' }}>
        {/* Large Retro Glitch Text */}
        <h1 style={{ fontSize: '6rem', fontWeight: '900', margin: '0', color: '#ef4444', letterSpacing: '-0.05em' }}>
          404
        </h1>
        
        <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '10px', marginBottom: '20px' }}>
          Well, this is awkward.
        </h2>

        {/* Dynamic Joke Box */}
        <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: '1.6', minHeight: '80px' }}>
          The page you are looking for does not exist. We are officially placing the blame entirely on{' '}
          <strong style={{ color: '#38bdf8' }}>{blame}</strong>, who {' '}
          {funnyExcuses[blame]}
        </p>

        {/* Interactive Blame Selector */}
        <div style={{ margin: '30px 0' }}>
          <label htmlFor="blame-select" style={{ display: 'block', fontSize: '0.875rem', color: '#64748b', marginBottom: '8px', uppercase: 'true' }}>
            Shift the blame to someone else:
          </label>
          <select
            id="blame-select"
            value={blame}
            onChange={(e) => setBlame(e.target.value)}
            style={{ backgroundColor: '#1e293b', color: '#f8fafc', border: '1px solid #334155', padding: '10px 16px', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer', outline: 'none' }}
          >
            <option value="the developer">The Developer</option>
            <option value="a stray cat">A Stray Cat</option>
            <option value="your internet">Your Internet Router</option>
            <option value="quantum instability">Quantum Instability</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '20px' }}>
          <button
            onClick={handleGoHome}
            style={{ backgroundColor: '#3b82f6', color: '#ffffff', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: '1rem', transition: 'background-color 0.2s' }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
          >
            Take Me Home
          </button>
          
          <button
            onClick={() => alert("We tried to fix it, but the button broke too. Highly ironic.")}
            style={{ backgroundColor: 'transparent', color: '#94a3b8', border: '1px solid #334155', padding: '12px 24px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: '1rem' }}
          >
            Report Issue
          </button>
        </div>
      </div>
    </div>
  );
}