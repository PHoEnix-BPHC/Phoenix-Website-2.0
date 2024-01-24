import React from 'react';

const styles = {
  container: {
    margin: '8rem auto',
    padding: '1rem',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  paragraph: {
    color: '#4B5563',
    marginBottom: '2rem',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  card: {
    width: '100%',
    marginBottom: '2rem',
    padding: '1rem',
    borderRadius: '0.375rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#1F2937',
    color: '#FFFFFF',
  },
};

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>About Us</h2>
      <p style={styles.paragraph}>
        Welcome to our organization! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse varius enim in eros elementum tristique.
      </p>

      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h3 style={{ ...styles.heading, marginBottom: '0.5rem' }}>Mission</h3>
          <p>Our mission is to...</p>
        </div>

        <div style={styles.card}>
          <h3 style={{ ...styles.heading, marginBottom: '0.5rem' }}>Vision</h3>
          <p>Our vision is to...</p>
        </div>

        <div style={styles.card}>
          <h3 style={{ ...styles.heading, marginBottom: '0.5rem' }}>Goals</h3>
          <p>Our goals include...</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
