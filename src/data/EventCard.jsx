import React, { useState } from 'react';
import { Card, Button, Modal, Carousel } from 'react-bootstrap';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const EventCard = ({ title, thumbnail, videos, images, description }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={thumbnail} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button variant="primary" onClick={handleModalShow}>
            View Details
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ResponsiveCarousel>
            {videos.map((video, index) => (
              <div key={index}>
                <iframe
                  title={`video-${index}`}
                  width="100%"
                  height="315"
                  src={video}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            ))}
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`image-${index}`} style={{ width: '100%' }} />
              </div>
            ))}
          </ResponsiveCarousel>
          <p>{description}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EventCard;
