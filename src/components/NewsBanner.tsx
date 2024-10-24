import React from 'react';

const NewsBanner: React.FC = () => {
  const bannerStyle = {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: 'blue',
    padding: '.5rem',
  };

  const marqueeStyle = {
    whiteSpace: 'nowrap' as const,
    animation: 'marquee 10s linear infinite',
    fontFamily: "'Tektur', sans-serif",
    fontSize: '1rem',
    // textTransform: 'uppercase',
    color: 'white',
    paddingLeft: '1rem',
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
          <p key={key} style={marqueeStyle} className="marquee">
            rival ↗&#xFE0E; ↘&#xFE0E;
          </p>
        ))}
      {Array(15)
        .fill('')
        .map((_, key) => (
          <p key={key} style={marqueeStyle} className="marquee">
            rival ↗&#xFE0E; ↘&#xFE0E;
          </p>
        ))}
    </div>
  );
};

export default NewsBanner;
