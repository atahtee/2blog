import React from 'react';
import './Loader.css'; // Create a CSS file for your loader styles

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="star star1"></div>
        <div className="star star2"></div>
        <div className="star star3"></div>
        <div className="star star4"></div>
        <div className="star star5"></div>
      </div>
      <p className="loader-text">Render initial load takes some time, just a minute</p>
    </div>
  );
};

export default Loader;
