import React, {useEffect, useState } 
from "react";
import "./App.css";
import 
{ initializeWebMCPPolyfill } 
from "@mcp-b/webmcp-polyfill";
initializeWebMCPPolyfill();

import { registerHopeSongTools } from 
"./webmcp";

registerHopeSongTools();

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
  useEffect(() => {
  registerHopeSongTools();
}, []);
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
<button onClick={() => alert("Create a Song clicked!")}>
  🎵 &nbsp; Create a Song
</button>
            <button
  onClick={() => {
    const prayer = prompt("What would you like to pray about?");
    if (prayer) {
      alert("Your prayer has been received. 🙏");
    }
  }}
>
  🙏 &nbsp; Write a Prayer
</button>
<button
  onClick={() => {
    const language = prompt(
      "Choose your language by entering a number from 1–5:\n\n" +
      "1. 🇮🇩 Bahasa Indonesia\n" +
      "2. 🇬🇧 English\n" +
      "3. 🇨🇳 中文\n" +
      "4. 🇰🇷 한국어\n" +
      "5. 🇪🇸 Español\n\n" +
      "Enter your choice:"
    );

    const verses = {
      "1": "Mazmur 46:1 — Allah itu bagi kita tempat perlindungan dan kekuatan, sebagai penolong dalam kesesakan sangat terbukti. 🙏",
      "2": "Psalm 46:1 — God is our refuge and strength, an ever-present help in trouble. 🙏",
      "3": "诗篇 46:1 — 神是我们的避难所，是我们的力量，是我们在患难中随时的帮助。🙏",
      "4": "시편 46:1 — 하나님은 우리의 피난처시요 힘이시니 환난 중에 만날 큰 도움이시라. 🙏",
      "5": "Salmo 46:1 — Dios es nuestro refugio y nuestra fuerza, nuestra ayuda siempre presente en las dificultades. 🙏"
    };

    if (verses[language]) {
      alert(verses[language]);
    } else {
      alert("Please enter a number from 1 to 5.");
    }
  }}
>
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