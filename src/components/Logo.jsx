import React from 'react';

export default function Logo({ className = "", lightText = false, size = "md" }) {
  const iconSize = size === "sm" ? 28 : size === "lg" ? 44 : 34;
  const fontSize = size === "sm" ? "1.25rem" : size === "lg" ? "2rem" : "1.5rem";
  
  return (
    <a href="#" className={`logo-container ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <svg 
        width={iconSize} 
        height={iconSize} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        {/* Left angle bracket < */}
        <path 
          d="M 38 28 L 18 50 L 38 72" 
          stroke="#5084e6" 
          strokeWidth="12" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Forward slash / */}
        <path 
          d="M 58 20 L 42 80" 
          stroke="#5084e6" 
          strokeWidth="12" 
          strokeLinecap="round" 
        />
        {/* Right angle bracket > */}
        <path 
          d="M 62 28 L 82 50 L 62 72" 
          stroke="#5084e6" 
          strokeWidth="12" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      <span style={{ 
        fontFamily: "'Plus Jakarta Sans', sans-serif", 
        fontWeight: '800', 
        fontSize: fontSize, 
        color: lightText ? '#ffffff' : '#5084e6',
        letterSpacing: '-0.5px'
      }}>
        lghweb
      </span>
    </a>
  );
}
