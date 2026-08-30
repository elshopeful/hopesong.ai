import { useEffect, useMemo, useState } from "react";
import { registerHopeSongTools } from "./webmcp";
import "./App.css";

// ============================================================
// HOPE SONG DATA
// ============================================================

const songs = [
  {
    id: 1,
    title: "You Are The One, My God",
    artist: "Doa Malam Pujian Syukur",
    category: "Hope",
    description:
      "Lagu penyembahan tentang Tuhan sebagai sumber pengharapan dan kekuatan.",
  },
  {
    id: 2,
    title: "Amazing Grace",
    artist: "Traditional",
    category: "Grace",
    description:
      "Lagu rohani klasik tentang kasih karunia dan keselamatan.",
  },
  {
    id: 3,
    title: "What A Beautiful Name",
    artist: "Worship",
    category: "Worship",
    description:
      "Pujian yang mengagungkan nama Tuhan dan karya-Nya.",
  },
  {
    id: 4,
    title: "Oceans",
    artist: "Worship",
    category: "Faith",
    description:
      "Lagu tentang mempercayai Tuhan ketika menghadapi ketidakpastian.",
  },
  {
    id: 5,
    title: "Way Maker",
    artist: "Worship",
    category: "Hope",
    description:
      "Pengingat bahwa Tuhan tetap bekerja bahkan ketika kita belum melihat jawabannya.",
  },
  {
    id: 6,
    title: "10,000 Reasons",
    artist: "Worship",
    category: "Praise",
    description:
      "Lagu pujian untuk mengingat berbagai alasan untuk memuji Tuhan.",
  },

];

// ============================================================
// BIBLE VERSES FOR THE MAIN WEBSITE
// ============================================================

const bibleVerses = [
  {
    reference: "Roma 15:13",
    text: "Semoga Allah, sumber pengharapan, memenuhi kamu dengan segala sukacita dan damai sejahtera dalam iman, supaya kamu berlimpah-limpah dalam pengharapan oleh kuasa Roh Kudus.",
    category: "Hope",
  },
  {
    reference: "Yesaya 41:10",
    text: "Janganlah takut, sebab Aku menyertai engkau; janganlah bimbang, sebab Aku ini Allahmu. Aku akan meneguhkan, bahkan akan menolong engkau.",
    category: "Fear",
  },
  {
    reference: "Yohanes 14:27",
    text: "Damai sejahtera Kutinggalkan bagimu. Damai sejahtera-Ku Kuberikan kepadamu. Janganlah gelisah dan gentar hatimu.",
    category: "Peace",
  },
];

// ============================================================
// HELPER
// ============================================================

function getCategoryIcon(category) {
  switch (category) {
    case "Hope":
      return "♡";
    case "Grace":
      return "✦";
    case "Worship":
      return "♩";
    case "Faith":
      return "◌";
    case "Praise":
      return "✧";
    default:
      return "♪";
  }
}

// ============================================================
// APP
// ============================================================

function App() {
  const [playingSong, setPlayingSong] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [prayer, setPrayer] = useState("");
  const [prayerSubmitted, setPrayerSubmitted] = useState(false);

  // ----------------------------------------------------------
  // REGISTER WEBMCP
  // ----------------------------------------------------------

  useEffect(() => {
    registerHopeSongTools();
  }, []);

  // ----------------------------------------------------------
  // SONG CATEGORIES
  // ----------------------------------------------------------

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(songs.map((song) => song.category)),
    ];
  }, []);

  // ----------------------------------------------------------
  // FILTER SONGS
  // ----------------------------------------------------------

  const filteredSongs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return songs.filter((song) => {
      const matchesSearch =
        !query ||
        song.title.toLowerCase().includes(query) ||
        song.artist.toLowerCase().includes(query) ||
        song.category.toLowerCase().includes(query);

      const matchesCategory =
        selectedCategory === "All" ||
        song.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  // ----------------------------------------------------------
  // PRAYER SUBMIT
  // ----------------------------------------------------------

  function handlePrayerSubmit(event) {
    event.preventDefault();

    if (!prayer.trim()) {
      return;
    }

    setPrayerSubmitted(true);
  }

  // ----------------------------------------------------------
  // MAIN UI
  // ----------------------------------------------------------

  return (
    <div className="app">

      {/* ======================================================
          NAVIGATION
      ====================================================== */}

      <header className="navbar">
        <div className="logo">
          <span className="heart">♡</span>
          <span>HopeSong.ai</span>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#songs">Songs</a>
          <a href="#prayer">Prayer</a>
          <a href="#bible">Bible</a>
        </nav>

        <button
          className="sign-in"
          type="button"
          onClick={() => {
            alert("Fitur Sign In akan segera tersedia.");
          }}
        >
          Sign In
        </button>
      </header>

      {/* ======================================================
          HERO
      ====================================================== */}

      <main>

        <section id="home" className="hero">
          <div className="hero-content">

            <div className="hero-badge">
              <span>♡</span>
              Music • Prayer • Hope
            </div>

            <h1>
              Find Hope.
              <br />
              <span>Find Your Song.</span>
            </h1>

            <p className="hero-text">
              HopeSong.ai membantu kamu menemukan lagu rohani,
              doa, dan ayat Alkitab yang relevan dengan keadaan
              hati dan kebutuhan spiritualmu.
            </p>

            <div className="hero-buttons">
              <a href="#songs" className="primary-button">
                Explore Songs
              </a>

              <a href="#bible" className="secondary-button">
                Find Bible Verse
              </a>
            </div>

          </div>

          <div className="hero-card">

            <div className="hero-card-icon">
              ♡
            </div>

            <p className="hero-card-label">
              TODAY'S HOPE
            </p>

            <h3>
              "Semoga Allah, sumber pengharapan,
              memenuhi kamu dengan segala sukacita
              dan damai sejahtera."
            </h3>

            <span>
              Roma 15:13
            </span>

          </div>
        </section>

        {/* ====================================================
            SONGS
        ==================================================== */}

        <section id="songs" className="section songs-section">

          <div className="section-heading">
            <div>
              <span className="section-label">
                MUSIC FOR YOUR SOUL
              </span>

              <h2>
                Songs that meet you where you are.
              </h2>
            </div>

            <p>
              Temukan lagu yang sesuai dengan suasana hati,
              iman, dan perjalanan spiritualmu.
            </p>
          </div>

          {/* Search */}

          <div className="song-controls">

            <div className="search-box">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search songs..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />
            </div>

            <div className="category-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    selectedCategory === category
                      ? "category-button active"
                      : "category-button"
                  }
                  onClick={() =>
                    setSelectedCategory(category)
                  }
                >
                  {category}
                </button>
              ))}
            </div>

          </div>

          {/* Song Grid */}

          <div className="song-grid">

            {filteredSongs.length > 0 ? (
              filteredSongs.map((song) => (
                <article
                  className={
                    playingSong === song.id
                      ? "song-card playing"
                      : "song-card"
                  }
                  key={song.id}
                >

                  <div className="song-cover">
                    <span>
                      {getCategoryIcon(song.category)}
                    </span>
                  </div>

                  <div className="song-info">

                    <span className="song-category">
                      {song.category}
                    </span>

                    <h3>
                      {song.title}
                    </h3>

                    <p className="song-artist">
                      {song.artist}
                    </p>

                    <p className="song-description">
                      {song.description}
                    </p>

                    <button
                      type="button"
                      className="play-button"
                      onClick={() =>
                        setPlayingSong(
                          playingSong === song.id
                            ? null
                            : song.id
                        )
                      }
                    >
                      {playingSong === song.id
                        ? "❚❚ Playing"
                        : "▶️ Play"}
                    </button>

                  </div>

                </article>
              ))
            ) : (
              <div className="empty-state">
                <div>♡</div>

                <h3>
                  Song tidak ditemukan
                </h3>

                <p>
                  Coba gunakan kata pencarian lain.
                </p>
              </div>
            )}

          </div>

        </section>

        {/* ====================================================
            PRAYER
        ==================================================== */}

        <section id="prayer" className="section prayer-section">

          <div className="prayer-container">

            <div className="prayer-intro">

              <span className="section-label">
                TALK TO GOD
              </span>

              <h2>
                You don't have to carry it alone.
              </h2>

              <p>
                Tuliskan isi hatimu. Gunakan ruang ini
                sebagai pengingat untuk berhenti sejenak,
                berdoa, dan menyerahkan semuanya kepada Tuhan.
              </p>

              <div className="prayer-quote">
                <span>“</span>

                <p>
                  Serahkanlah segala kekuatiranmu kepada-Nya,
                  sebab Ia yang memelihara kamu.
                </p>

                <small>
                  1 Petrus 5:7
                </small>
              </div>

            </div>

            <div className="prayer-card">

              {!prayerSubmitted ? (
                <form onSubmit={handlePrayerSubmit}>

                  <label htmlFor="prayer">
                    What is on your heart?
                  </label>

                  <textarea
                    id="prayer"
                    value={prayer}
                    onChange={(event) =>
                      setPrayer(event.target.value)
                    }
                    placeholder="Tuliskan doamu di sini..."
                    rows="7"
                  />

                  <button
                    type="submit"
                    className="primary-button full"
                  >
                    Send Prayer ♡
                  </button>

                </form>
              ) : (
                <div className="prayer-success">

                  <div className="success-icon">
                    ♡
                  </div>

                  <h3>
                    Your prayer is heard.
                  </h3>

                  <p>
                    Semoga Tuhan memberikan damai,
                    kekuatan, dan pengharapan dalam
                    setiap langkahmu.
                  </p>

                  <button
                    type="button"
                    className="secondary-button"
                    onClick={() => {
                      setPrayer("");
                      setPrayerSubmitted(false);
                    }}
                  >
                    Write Another Prayer
                  </button>

                </div>
              )}

            </div>

          </div>

        </section>

        {/* ====================================================
            BIBLE
        ==================================================== */}

        <section id="bible" className="section bible-section">

          <div className="section-heading centered">

            <span className="section-label">
              WORD OF GOD
            </span>

            <h2>
              A verse for your heart.
            </h2>

            <p>
              Ayat Alkitab yang dapat menjadi pengingat
              ketika kamu membutuhkan harapan, keberanian,
              dan damai.
            </p>

          </div>

          <div className="verse-grid">

            {bibleVerses.map((verse) => (
              <article
                className="verse-card"
                key={verse.reference}
              >

                <span className="verse-category">
                  {verse.category}
                </span>

                <div className="verse-mark">
                  “
                </div>

                <p>
                  {verse.text}
                </p>

                <strong>
                  {verse.reference}
                </strong>

              </article>
            ))}

          </div>

        </section>

        {/* ====================================================
            WEBMCP EXPLANATION
        ==================================================== */}

        <section className="webmcp-section">

          <div className="webmcp-content">

            <div className="webmcp-icon">
              ✦
            </div>

            <div>

              <span className="section-label">
                AI READY
              </span>

              <h2>
                HopeSong.ai works with AI agents.
              </h2>

              <p>
                Dengan WebMCP, AI agent dapat meminta
                HopeSong.ai menemukan ayat Alkitab yang
                relevan berdasarkan topik atau kebutuhan
                spiritual pengguna.
              </p>

            </div>

           <div className="webmcp-tool">

  <span>
    AVAILABLE WEBMCP TOOLS
  </span>

  <code>
    findBibleVerse
  </code>

  <small>
    Bible verse • topic + language
  </small>

  <code>
    findHopeJourney
  </code>

  <small>
    Scripture • Reflection • Prayer • Next Step • Hope
  </small>

</div>

          </div>

        </section>

      </main>

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <footer className="footer">

        <div className="footer-logo">
          <span className="heart">♡</span>
          HopeSong.ai
        </div>

        <p>
          Music, prayer, and hope for every season.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#songs">Songs</a>
          <a href="#prayer">Prayer</a>
          <a href="#bible">Bible</a>
        </div>

        <div className="copyright">
          ©️ 2026 HopeSong.ai
        </div>

      </footer>

    </div>
  );
}

export default App;