import React from 'react';

const NewsBanner: React.FC = () => {
  const bannerStyle = {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: 'blue',
    padding: '12px',
  };

  const marqueeStyle = {
    whiteSpace: 'nowrap' as const,
    animation: 'marquee 10s linear infinite',
    fontFamily: "'Tektur', sans-serif",
    height: "14px",
    paddingLeft: '1rem',
    // padding: "1rem 0 1rem 1rem",
  };

  return (
    <div style={bannerStyle}>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>

      {Array(15)
        .fill('')
        .map((_, key) => (
          <img key={key} style={marqueeStyle} className="marquee" src="/rival-↗-↘.svg"/>
        ))}
      {Array(15)
        .fill('')
        .map((_, key) => (
          <img key={key} style={marqueeStyle} className="marquee" src="/rival-↗-↘.svg"/>
        ))}
    </div>
  );
};

export default NewsBanner;
