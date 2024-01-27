import React from 'react';



const styles = {
  container: {
    margin: '8rem auto',
    padding: '1rem',
    
    
  },
  cardOverlay: {
    
    background: 'linear-gradient(rgba(100,10,10, 0.5), rgba(10,10,100, 0.1))',
     
    boxSizing: 'border-box', 
    borderRadius: '25px',
    display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
    
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#fff',
    textAlign: 'center',
  },

heading2:{
  textAlign: 'center',
},

  paragraph: {
    color: '#fff',
    fontSize :'0.8rem',
    textAlign: 'center',
  },
  paragraph2: {
    color: '#fff',
    fontSize :'1rem',
    textAlign: 'center',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
  },
  card: {
    width: '100%',
    height: '100%',
    marginBottom: '2rem',
    padding: '1rem',
    borderRadius: '50px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'linear-gradient(rgba(5,5,5, 0.8), rgba(5,5,5, 0.1))',
    boxSizing: 'border-box',
    
    color: '#FFFFFF',
    
  },
};


const AboutUs = () => {
  return (
    <div style={styles.container}>
      <h1 className="bg-gradient-to-r from-red to-yellow text-transparent bg-clip-text text-[10vh] text-center">About Us</h1>
      <p style={styles.paragraph2}>
        Welcome to Phoenix, the thriving hub of technical excellence at our esteemed college. Phoenix Technical Association is a dynamic and student-driven organization that stands as a testament to the vibrant spirit of innovation and collaboration within our academic community.
      </p>

      <div style={styles.cardContainer}>
        <div className="card-overlay" style={styles.cardOverlay}>
          <div style={styles.card}>
          <i className="fas fa-bullseye fa-5x" style={{ color: '#fff', marginBottom: '1rem', marginTop: '1rem', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></i>

            <h1 style={{ ...styles.heading, marginBottom: '0.5rem' }}>Mission</h1>
            <h5 style={{ ...styles.heading2, marginBottom: '0.5rem' }}>Igniting Passion</h5>
            <p style={styles.paragraph}>Our mission is to provide a platform where students passionate about technology can come together, share ideas, and embark on a journey of exploration and skill development. Phoenix Technical Association is committed to organizing events, workshops, and activities that promote hands-on learning, industry exposure, and the development of a holistic technical skill set.</p>
          </div>

          <div style={styles.card}>
            <i className="fas fa-eye fa-5x" style={{ color: '#fff', marginBottom: '1rem', marginTop: '1rem', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></i>
            <h1 style={{ ...styles.heading, marginBottom: '0.5rem' }}>Vision</h1>
            <h5 style={{ ...styles.heading2, marginBottom: '0.5rem' }}>Empowering Future Innovators</h5>
            <p style={styles.paragraph}>Our vision is to foster a culture of innovation, collaboration, and continuous learning. Phoenix Technical Association aspires to be the catalyst for nurturing a generation of forward-thinking and technically adept individuals who will make impactful contributions to the ever-evolving world of technology.</p>
          </div>

          <div style={styles.card}>
            <i className="fas fa-thumbs-up fa-5x" style={{ color: '#fff', marginBottom: '1rem', marginTop: '1rem', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}></i>
            <h1 style={{ ...styles.heading, marginBottom: '0.5rem' }}>Goals</h1>
            <h5 style={{ ...styles.heading2, marginBottom: '0.5rem' }}>Fostering Excellence</h5>
            <p style={styles.paragraph}>Our overarching goal at Phoenix Technical Association is to cultivate a community of tech enthusiasts who not only excel in their academic pursuits but also actively contribute to the technological landscape. We aim to empower our members with a comprehensive skill set that extends beyond theoretical knowledge, emphasizing practical application and problem-solving.</p>
          </div>
        </div>
      </div>

      <p style={styles.paragraph2}>
        Join Phoenix Technical Association as we embark on a journey of exploration, learning, and innovation. Together, let's build a community that not only adapts to technological advancements but also shapes the future of technology. Phoenix - where ideas take flight, and innovation knows no bounds.
      </p>
    </div>
  );
};

export default AboutUs;