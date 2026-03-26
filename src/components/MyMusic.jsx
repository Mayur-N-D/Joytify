import React from 'react';
import './MyMusic.css';

function MyMusic() {
  const myTracks = [
    { id: 1, title: "Midnight City", artist: "Neon Dreams", duration: "3:42", color: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)" },
    { id: 2, title: "Golden Hour", artist: "Sunsets", duration: "2:55", color: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)" },
    { id: 3, title: "Ocean Waves", artist: "Chill Vibes", duration: "4:10", color: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)" },
    { id: 4, title: "Cyberpunk Drift", artist: "Synthwave", duration: "3:15", color: "linear-gradient(to right, #434343 0%, black 100%)" },
    { id: 5, title: "Acoustic Sunrise", artist: "The Woods", duration: "2:48", color: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)" },
    { id: 6, title: "Neon Nights", artist: "City Lights", duration: "4:05", color: "linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)" },
    { id: 7, title: "Lo-Fi Beats", artist: "Study Cafe", duration: "2:30", color: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)" },
    { id: 8, title: "Electric Feel", artist: "Retro Pop", duration: "3:50", color: "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)" },
  ];

  return (
    <main className="music-page-container">
      <div className="music-header">
        <h1 className="page-title">My <span className="highlight">Library</span></h1>
        <p className="page-subtitle">Your personal collection of favorite tracks.</p>
      </div>

      <div className="music-grid">
        {myTracks.map((track) => (
          <div className="music-card" key={track.id}>
            {}
            <div className="album-art" style={{ background: track.color }}>
              <button className="play-button">▶</button>
            </div>
            
            <div className="track-info">
              <h3 className="track-title">{track.title}</h3>
              <p className="track-artist">{track.artist}</p>
              <span className="track-duration">{track.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MyMusic;