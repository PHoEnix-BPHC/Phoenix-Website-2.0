import React from 'react';
import { NavLink } from 'react-router-dom';

const WhatWeDoCard = ({ imageUrl, title, description, linkTo }) => {
  return (
    <NavLink to={linkTo} className="what-we-do-card" style={cardStyle}>
      <div className="card-overlay "  style = {overlayStyle} />
      <img src={imageUrl} alt={title} style={imageStyle} />
      <div className="card-details " style={cardDetailsStyle} >
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </NavLink>
  );
};

const cardStyle = {
  position: 'relative',
  borderRadius: '15px', 
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textDecoration: 'none',
  color: '#fff',
  height: '100%',
  margin: '20px 0',
  
};

const imageStyle = {
  width: '100%',
  maxHeight: '250px',
  objectFit: 'cover',
  borderRadius: '15px', 
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(rgba(240,240,240, 0.5), rgba(240,240,240, 0.1))', 
  borderRadius: '25px', 
  color: '#fff',
  padding: '20px', 
  boxSizing: 'border-box', 
  filter: 'blur(600px)',
};

const cardDetailsStyle = {
  
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  padding:'20px'
};


export default WhatWeDoCard;
