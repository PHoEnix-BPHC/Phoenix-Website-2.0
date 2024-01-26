import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const messages = [
  {
    title: 'President\'s Message',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Ujjwal',
    role: 'President',
  },
  {
    title: 'HOD\'s Message',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    author: 'Dr Subhendu Kumar Sahoo',
    role: 'Head of Department',
  },
  {
    title: 'FIC\'s Message',
    content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Dr. Subhradeep Pal',
    role: 'Faculty in Charge',
  },
];

const MessageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {messages.map((message, index) => (
        <div key={index} style={messageCardStyle}>
          <h2 style={messageTitleStyle}>{message.title}</h2>
          <p style={messageContentStyle}>{message.content}</p>
          <div style={messageAuthorStyle}>
            <p style={messageAuthorNameStyle}>{message.author}</p>
            <p>{message.role}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

const messageCardStyle = {
  flex: '0 0 70%',
  padding: '1rem',
  borderRadius: '15px',
  backgroundColor: 'linear-gradient(rgba(5, 5, 5, 0.8), rgba(5, 5, 5, 0.1))',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  boxSizing: 'border-box',
  color: '#ffffff',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

const messageTitleStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  textAlign: 'center',
};

const messageContentStyle = {
  marginBottom: '1rem',
  textAlign: 'center',
};

const messageAuthorStyle = {
  textAlign: 'center',
};

const messageAuthorNameStyle = {
  fontWeight: 'bold',
  margin: '0.5rem 0',
};

const MessageSection = () => {
  return (
    <div>
    <h1 className="bg-gradient-to-r from-red to-yellow text-transparent bg-clip-text text-[5vh]">Messages from Leadership</h1>
    <div style={{ margin: '4rem auto', padding: '1rem', background: 'linear-gradient(rgba(240,240,240, 0.5), rgba(240,240,240, 0.1))', borderRadius: '25px', color: '#fff' }}>

      <div style={{ margin: '2rem auto', padding: '1rem' }}>
        <MessageCarousel />
      </div>
    </div>
    </div>
  );
};

export default MessageSection;
