import React from 'react';
import './Help.css';

function Help() {

  const helpCategories = [
    { id: 1, icon: "👤", title: "Account & Profile", description: "Manage your settings, password, and profile." },
    { id: 2, icon: "💳", title: "Plans & Billing", description: "Update payment methods and subscription plans." },
    { id: 3, icon: "🎵", title: "Playlists & Library", description: "Learn how to create, share, and organize music." },
    { id: 4, icon: "🎧", title: "Audio & Streaming", description: "Troubleshoot playback issues and audio quality." },
    { id: 5, icon: "📱", title: "App & Devices", description: "Connecting Joytify to offline devices and speakers." },
    { id: 6, icon: "🛡️", title: "Safety & Privacy", description: "Control your data and report inappropriate content." },
  ];

  return (
    <main className="help-page-container">
      
     
      <section className="help-hero">
        <h1 className="help-title">How can we <span className="highlight">help?</span></h1>
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            className="help-search-bar" 
            placeholder="Search for articles, topics, or issues..." 
          />
        </div>
      </section>


      <section className="help-categories-section">
        <h2 className="section-title">Browse Topics</h2>
        <div className="categories-grid">
          {helpCategories.map((category) => (
            <div className="category-card" key={category.id}>
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-title">{category.title}</h3>
              <p className="category-desc">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="help-contact">
        <h2>Still need help?</h2>
        <p>Our support team is always here to keep your music playing smoothly.</p>
        <button className="btn-contact">Contact Support</button>
      </section>

    </main>
  );
}

export default Help;