import React, {useState} 
from "react";
import "./App.css";

const songs = [
  {
    icon: "🎵",
    title: "Come To Me, My Child (El's Hopeful)",
    artist: "El's Hopeful",
  },
  {
    icon: "🙏",
    title: "O, Heal My Heart With Your Love",
    artist: "El's Hopeful",
  },
  {
    icon: "🌙",
    title: "My Perfect Rest in You",
    artist: "El's Hopeful",
  },
  {
    icon: "🌱",
    title: "You Formed Me",
    artist: "El's Hopeful",
  },
  {
    icon: "✨",
    title: "Nyatakanlah Lagi, Mukjizat-Mu",
    artist: "El's Hopeful",
  },
  {
    icon: "🕊️",
    title: "Rancangan-Mu Terjadi Bagiku",
    artist: "El's Hopeful",
  },
  {
    icon: "🌿",
    title: "Kau B'ri Kehidupan Baru",
    artist: "El's Hopeful",
  },
  {
    icon: "🙏",
    title: "Bapa, Ku Mau Bert'rima Kasih",
    artist: "El's Hopeful",
  },
  {
    icon: "👣",
    title: "Every Day I'll Follow You",
    artist: "El's Hopeful",
  },
  {
    icon: "🌳",
    title: "Abide in The Tree of Life",
    artist: "El's Hopeful",
  },
  {
    icon: "🎶",
    title: "Pujian Syukur",
    artist: "Doa Malam Pujian Syukur",
  },
  {
    icon: "👑",
    title: "Menghadap Tahta-Mu",
    artist: "Doa Malam Pujian Syukur",
  },
  {
    icon: "🕊️",
    title: "Rohku, Rindu Hadirat-Mu",
    artist: "Doa Malam Pujian Syukur",
  },
  {
    icon: "🔥",
    title: "Bimbing Aku, Roh Kudus",
    artist: "Doa Malam Pujian Syukur",
  },
  {
    icon: "🧭",
    title: "Arahkanlah, Hatiku",
    artist: "Doa Malam Pujian Syukur",
  },
  {
    icon: "🛡️",
    title: "Jika Allah Besertaku",
    artist: "Doa Malam Pujian Syukur",
  },
  {
    icon: "💛",
    title: "Percayalah Kembali, Hai Jiwaku",
    artist: "Doa Malam Pujian Syukur",
  },
  {
    icon: "🙌",
    title: "Haleluya, Kemenangan Kau Berikan",
    artist: "Doa Malam Pujian Syukur",
  },
  {
    icon: "❤️",
    title: "You Are The One, My God",
    artist: "Doa Malam Pujian Syukur",
  },
];

function App() {
  const [playingSong, 
  setPlayingSong] = useState(null);
  return (
    <div className="app">

      {/* NAVIGATION */}
      <header className="navbar">
        <div className="logo">
          <span className="heart">♡</span>
          <span>HopeSong.ai</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#songs">Songs</a>
          <a href="#prayer">Prayer</a>
          <a href="#bible">Bible</a>
        </nav>

        <button className="sign-in">Sign In</button>
      </header>


      {/* HERO */}
      <main id="home">

        <section className="hero">
          <div className="hero-label">
            MUSIC • PRAYER • HOPE
          </div>

          <h1>
            Let your heart
            <br />
            sing with hope.
          </h1>

          <p>
            Create songs, prayers, and moments of worship that lead
            <br className="desktop" />
            your heart closer to God's love.
          </p>

          <div className="search-box">
            <span className="search-icon">⌕</span>

            <input
              type="text"
              placeholder="What is on your heart today?"
            />

            <button>Explore</button>
          </div>

          <div className="quick-actions">
            <button>
              🎵 &nbsp; Create a Song
            </button>

            <button>
              🙏 &nbsp; Write a Prayer
            </button>

            <button>
              📖 &nbsp; Find a Verse
            </button>
          </div>
        </section>


        {/* TODAY'S HOPE */}
        <section className="todays-hope">
          <div className="music-symbol">♫</div>

          <h3>Today's Hope</h3>

          <blockquote>
            "Come to me, all you who are weary
            and burdened,
            <br />
            and I will give you rest."
          </blockquote>

          <p className="verse">Matthew 11:28</p>
        </section>


        {/* DAILY HOPE */}
        <section className="daily-hope">
          <div className="section-label">
            DAILY HOPE
          </div>

          <h2>A little hope for today.</h2>

          <div className="star">✦</div>

          <p className="daily-verse">
            "Those who hope in the Lord will renew their strength."
          </p>

          <p className="daily-reference">
            Isaiah 40:31
          </p>
        </section>


        {/* YOUR MUSIC */}
        <section id="songs" className="music-section">

          <div className="music-intro">
            <div className="section-label">
              YOUR MUSIC
            </div>

            <h2>Songs that carry hope.</h2>

            <button className="view-all">
              View all →
            </button>
          </div>


          <div className="song-list">
            {songs.map((song, index) => (
              <div className="song-card" key={index}>

                <div className="song-icon">
                  {song.icon}
                </div>

                <div className="song-info">
                  <h3>{song.title}</h3>
                  <p>{song.artist}</p>
                </div>

                <button
                  className="play-button"
                  onClick={() => 
                  setPlayingSong(song.title)}
                  aria-label={`Play $
                  {song.title}`}
                >
                  ▶️
                </button>

              </div>
            ))}
          </div>
          
          {playingSong && (
           <div 
          className="now-playing">
             🎵 Now Playing:
          {playingSong}
            </div>
           )}

        </section>


        {/* MOMENT WITH GOD */}
        <section id="prayer" className="moment">

          <div className="section-label">
            A MOMENT WITH GOD
          </div>

          <h2>
            You don't have to
            <br />
            carry it alone.
          </h2>

          <p>
            Tell HopeSong what is in your heart. Turn your thoughts
            into a prayer, a song, or simply a moment of peace.
          </p>

          <button className="prayer-button">
            Start a Prayer →
          </button>

          <div className="hashtags">
            🙏
            <br />
            HopeFaithPeace
          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer>

        <div className="footer-logo">
          <span className="heart">♡</span>
          <strong>HopeSong.ai</strong>
        </div>

        <div className="footer-text">
          Bringing hearts closer to His Love, Hope & Peace.
        </div>

        <div className="copyright">
          ©️ 2026 HopeSong.ai
        </div>

      </footer>

    </div>
  );
}

export default App;