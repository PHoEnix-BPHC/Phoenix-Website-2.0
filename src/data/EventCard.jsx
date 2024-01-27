import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, Button, Modal, Carousel } from 'react-bootstrap';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const StyledCard = styled(Card)`
  width: 18rem;
  margin: 10px;
`;

const CardImage = styled(Card.Img)`
  object-fit: cover;
  height: 300px; // Adjust the height as needed
`;

const Title = styled(Card.Title)`
  margin-bottom: 10px;
`;

const StyledButton = styled(Button)`
  background-color: #000;
  border: none;
  &:hover {
    background-color: #f5010;
  }
`;

const EventCard = ({ title, thumbnail, videos, images, description }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  return (
    <div className="flex justify-center my-[3%]">
      <StyledCard>
        <CardImage variant="top" src={thumbnail} />
        <Card.Body>
          <Title>{title}</Title>
          <StyledButton variant="primary" onClick={handleModalShow}>
            View Details
          </StyledButton>
        </Card.Body>
      </StyledCard>

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
                  allowFullScreen
                />
              </div>
            ))}
            
          </ResponsiveCarousel>
          <p>{description}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EventCard;
