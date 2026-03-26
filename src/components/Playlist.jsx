import React from 'react';
import './Playlist.css';

function Playlist() {

  const playlistInfo = {
    title: "Deep Focus & Flow",
    description: "The perfect ambient and lo-fi backdrop for intense coding and studying sessions.",
    creator: "Joytify Curators",
    songCount: 24,
    totalDuration: "1 hr 15 min",
    coverColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  };

  const tracks = [
    { id: 1, title: "Syntax Error", artist: "The Debuggers", album: "Code & Coffee", time: "3:45" },
    { id: 2, title: "Midnight Terminal", artist: "Neon Dreams", album: "Dark Mode", time: "4:12" },
    { id: 3, title: "Refactoring Life", artist: "Chill Vibes", album: "Clean Code", time: "2:58" },
    { id: 4, title: "Infinite Loop", artist: "Synthwave", album: "Cyberpunk Drift", time: "5:05" },
    { id: 5, title: "Compiling Thoughts", artist: "Study Cafe", album: "Lo-Fi Beats", time: "3:30" },
  ];

  return (
    <main className="playlist-page-container">
      
  
      <header className="playlist-header">
        <div className="playlist-cover" style={{ background: playlistInfo.coverColor }}>
          <span className="cover-icon">🎵</span>
        </div>
        
        <div className="playlist-details">
          <span className="playlist-label">Public Playlist</span>
          <h1 className="playlist-title">{playlistInfo.title}</h1>
          <p className="playlist-description">{playlistInfo.description}</p>
          <div className="playlist-meta">
            <span className="creator">{playlistInfo.creator}</span>
            <span className="dot">•</span>
            <span>{playlistInfo.songCount} songs, {playlistInfo.totalDuration}</span>
          </div>
          
          <div className="playlist-actions">
            <button className="btn-play-large">▶ Play</button>
            <button className="btn-icon">❤️</button>
            <button className="btn-icon">•••</button>
          </div>
        </div>
      </header>

      <section className="track-list-section">
        <div className="track-list-header">
          <div className="col-num">#</div>
          <div className="col-title">Title</div>
          <div className="col-album">Album</div>
          <div className="col-time">⏱</div>
        </div>

        <div className="track-list-body">
          {tracks.map((track, index) => (
            <div className="track-row" key={track.id}>
              <div className="col-num">{index + 1}</div>
              <div className="col-title">
                <span className="track-name">{track.title}</span>
                <span className="track-artist">{track.artist}</span>
              </div>
              <div className="col-album">{track.album}</div>
              <div className="col-time">{track.time}</div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}

export default Playlist;