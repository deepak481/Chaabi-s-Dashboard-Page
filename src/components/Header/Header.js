import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="header_shade" />
      <div style={{ position: 'absolute', zIndex: 3, top: 10, left: 25 }}>
        <h1 style={{ color: 'white', fontWeight: 'bold' }}>Hello, Puneet Dhiman</h1>
        <h5 style={{ color: 'white', fontSize: '16px' }}>
          Following is Your Organization's Performance Summary
        </h5>
      </div>
    </div>
  );
}

export default Header;
