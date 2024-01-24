import React from 'react';
import { NavLink } from 'react-router-dom';

const WhatWeDoCard = ({ imageUrl, title, description, linkTo }) => {
  return (
    <NavLink to={linkTo} className="what-we-do-card" style={cardStyle}>
      <div className="card-overlay" />
      <img src={imageUrl} alt={title} style={imageStyle} />
      <div className="card-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </NavLink>
  );
};

const cardStyle = {
  position: 'relative',
  borderRadius: '15px', // Adjust the corner radius as needed
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adjust the shadow as needed
  textDecoration: 'none',
  color: 'inherit',
  height: '450px'
};

const imageStyle = {
  width: '100%',
  maxHeight: '250px',
  objectFit: 'cover',
  borderRadius: '15px', // Apply the same corner radius as the card
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '200%',
  background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))', // Adjust the gradient as needed
  filter: 'blur(10px)', // Adjust the blur effect as needed
  borderRadius: '15px', // Apply the same corner radius as the card
};

export default WhatWeDoCard;
