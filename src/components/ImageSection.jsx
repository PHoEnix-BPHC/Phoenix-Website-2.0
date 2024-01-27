import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/330px-HONDA_ASIMO.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/330px-HONDA_ASIMO.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/330px-HONDA_ASIMO.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/330px-HONDA_ASIMO.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/330px-HONDA_ASIMO.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/330px-HONDA_ASIMO.jpg',
  
];

const ImageCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 5,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="carousel-item">
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

const ImageSection = () => {
  return (
    <div className="image-section-container">
      <h1 className="bg-gradient-to-r from-red to-yellow text-transparent bg-clip-text text-[10vh] text-center mb-5">
        Some of Our Activities
      </h1>

      <div className="carousel-container">
        <ImageCarousel />
      </div>
    </div>
  );
};

export default ImageSection;
