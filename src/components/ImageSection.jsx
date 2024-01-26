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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // You can adjust the number of images shown at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
        <div key={index}>
          <img src={image} alt={`Image ${index + 1}`} style={{ heigth: '100%' }} />
        </div>
      ))}
    </Slider>
  );
};

const ImageSection = () => {
  return (
    <div>
      <h1 className="bg-gradient-to-r from-red to-yellow text-transparent bg-clip-text text-[5vh]">
        Images Section - Scroll left or right
      </h1>

      <div style={{ margin: '5px auto' }}>
        <ImageCarousel />
      </div>
    </div>
  );
};

export default ImageSection;
