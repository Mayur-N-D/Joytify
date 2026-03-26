import React from 'react';
import './Home.css'; 

function Home() {
  return (
    <main className="home-container">
      <section className="hero-card">
        <h1 className="hero-title">
          Discover the Sound of <span className="highlight">Joy</span>
        </h1>
        
        <p className="hero-subtitle">
          Stream your favorite tracks, discover new artists, and curate the perfect soundtrack for your life with Joytify.
        </p>
        
        <div className="cta-buttons">
          <button className="btn btn-primary">Start Listening</button>
          <button className="btn btn-secondary">Explore Premium</button>
        </div>
      </section>
    </main>
  );
}

export default Home;