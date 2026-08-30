// ============================================================
// HopeSong.ai - WebMCP Tool
// Tool: findBibleVerse
// ============================================================

export async function registerHopeSongTools() {
  // ----------------------------------------------------------
  // 1. Ambil WebMCP ModelContext
  // ----------------------------------------------------------
  const showWebMCPStatus = (message, type = "info") => {
    let el = document.getElementById("webmcp-debug");

    if (!el) {
      el = document.createElement("div");
      el.id = "webmcp-debug";

      el.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 99999;
        padding: 14px 18px;
        border-radius: 12px;
        font-family: sans-serif;
        font-size: 14px;
      `;

      document.body.appendChild(el);
    }

    el.textContent = message;
  };

  const modelContext = document.modelContext;

  if (!modelContext) {
    showWebMCPStatus(
      "⚠️ WebMCP tidak tersedia di browser ini."
    );
    return false;
  }

  // lanjutkan kode verses dan registerTool() di bawah sini

if (typeof modelContext.registerTool !== "function") {
  showWebMCPStatus(
    "❌ ModelContext ada, tetapi registerTool() tidak tersedia."
  );
  return false;
}

showWebMCPStatus(
  "✅ WebMCP tersedia. Mencoba mendaftarkan tool..."
);

  // ----------------------------------------------------------
  // 2. Data ayat berdasarkan bahasa dan kategori
  // ----------------------------------------------------------
  const verses = {
    "Bahasa Indonesia": {
      hope:
        "Roma 15:13 — Semoga Allah, sumber pengharapan, memenuhi kamu dengan segala sukacita dan damai sejahtera dalam iman, supaya kamu berlimpah-limpah dalam pengharapan oleh kuasa Roh Kudus.",

      fear:
        "Yesaya 41:10 — Janganlah takut, sebab Aku menyertai engkau; janganlah bimbang, sebab Aku ini Allahmu. Aku akan meneguhkan, bahkan akan menolong engkau.",

      peace:
        "Yohanes 14:27 — Damai sejahtera Kutinggalkan bagimu. Damai sejahtera-Ku Kuberikan kepadamu. Janganlah gelisah dan gentar hatimu."
    },

    English: {
      hope:
        "Romans 15:13 — May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",

      fear:
        "Isaiah 41:10 — So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you.",

      peace:
        "John 14:27 — Peace I leave with you; my peace I give you. Do not let your hearts be troubled and do not be afraid."
    },

    "中文": {
      hope:
        "罗马书 15:13 — 但愿使人有盼望的神，因信将诸般的喜乐平安充满你们的心，使你们借着圣灵的能力大有盼望。",

      fear:
        "以赛亚书 41:10 — 你不要害怕，因为我与你同在；不要惊惶，因为我是你的神。我必坚固你，我必帮助你。",

      peace:
        "约翰福音 14:27 — 我留下平安给你们；我将我的平安赐给你们。你们心里不要忧愁，也不要胆怯。"
    },

    "한국어": {
      hope:
        "로마서 15:13 — 소망의 하나님이 모든 기쁨과 평강을 믿음 안에서 너희에게 충만하게 하사 성령의 능력으로 소망이 넘치게 하시기를 원하노라.",

      fear:
        "이사야 41:10 — 두려워하지 말라 내가 너와 함께 함이라. 놀라지 말라 나는 네 하나님이 됨이라. 내가 너를 굳세게 하리라 참으로 너를 도와주리라.",

      peace:
        "요한복음 14:27 — 평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라. 너희는 마음에 근심하지도 말고 두려워하지도 말라."
    },

    "Español": {
      hope:
        "Romanos 15:13 — Que el Dios de la esperanza los llene de toda alegría y paz a ustedes que creen en él, para que rebosen de esperanza por el poder del Espíritu Santo.",

      fear:
        "Isaías 41:10 — No temas, porque yo estoy contigo; no te angusties, porque yo soy tu Dios. Te fortaleceré y te ayudaré.",

      peace:
        "Juan 14:27 — La paz les dejo; mi paz les doy. No se angustien ni tengan miedo."
    }
  };

  // ----------------------------------------------------------
  // 3. Registrasi WebMCP Tool
  // ----------------------------------------------------------
  try {
    await modelContext.registerTool({
      name: "findBibleVerse",

      title: "Find a Bible Verse",

      description:
        "Find a relevant Bible verse from HopeSong.ai based on the user's topic, emotion, or spiritual need and return it in the requested language.",

      inputSchema: {
        type: "object",

        properties: {
          topic: {
            type: "string",
            description:
              "The user's topic, emotion, or spiritual need, such as fear, anxiety, stress, peace, calm, hope, sadness, or encouragement."
          },

          language: {
            type: "string",

            enum: [
              "Bahasa Indonesia",
              "English",
              "中文",
              "한국어",
              "Español"
            ],

            description:
              "The language in which the Bible verse should be returned."
          }
        },

        required: ["topic", "language"]
      },

      // Tool ini hanya membaca data dan tidak mengubah website.
      annotations: {
        readOnlyHint: true
      },

      // ------------------------------------------------------
      // 4. Fungsi yang dipanggil oleh AI Agent
      // ------------------------------------------------------
      execute: async ({ topic, language }) => {
        const text = String(topic || "").toLowerCase();

        // Default
        let category = "hope";

        // ----------------------------------------------------
        // FEAR / ANXIETY
        // ----------------------------------------------------
        if (
          text.includes("fear") ||
          text.includes("afraid") ||
          text.includes("scared") ||
          text.includes("worried") ||
          text.includes("anxious") ||
          text.includes("stress") ||
          text.includes("stres") ||
          text.includes("takut") ||
          text.includes("cemas") ||
          text.includes("khawatir") ||
          text.includes("gelisah") ||
          text.includes("걱정") ||
          text.includes("두려") ||
          text.includes("恐惧") ||
          text.includes("害怕")
        ) {
          category = "fear";
        }

        // ----------------------------------------------------
        // PEACE / CALM
        // ----------------------------------------------------
        else if (
          text.includes("peace") ||
          text.includes("calm") ||
          text.includes("rest") ||
          text.includes("damai") ||
          text.includes("tenang") ||
          text.includes("ketenangan") ||
          text.includes("paz") ||
          text.includes("平安") ||
          text.includes("和平") ||
          text.includes("평안") ||
          text.includes("calma")
        ) {
          category = "peace";
        }

        // ----------------------------------------------------
        // HOPE
        // ----------------------------------------------------
        else if (
          text.includes("hope") ||
          text.includes("harapan") ||
          text.includes("pengharapan") ||
          text.includes("semangat") ||
          text.includes("encouragement") ||
          text.includes("encourage") ||
          text.includes("희망") ||
          text.includes("希望") ||
          text.includes("esperanza")
        ) {
          category = "hope";
        }

        // ----------------------------------------------------
        // 5. Ambil ayat
        // ----------------------------------------------------
        const languageVerses = verses[language];

        if (!languageVerses) {
          return (
            `HopeSong.ai tidak memiliki data untuk bahasa "${language}". ` +
            `Bahasa yang tersedia: Bahasa Indonesia, English, 中文, 한국어, Español.`
          );
        }

        const verse = languageVerses[category];

        if (!verse) {
          return (
            `HopeSong.ai tidak menemukan ayat untuk topik "${topic}".`
          );
        }

        // ----------------------------------------------------
        // 6. Return hasil ke AI Agent
        // ----------------------------------------------------
        return verse;
      }
    });

    console.log(
      "HopeSong.ai WebMCP tool berhasil didaftarkan: findBibleVerse"
    );

    // --------------------------------------------------------
    // 7. Status visual di halaman
    // --------------------------------------------------------
    const existingStatus =
      document.getElementById("webmcp-status");

    if (!existingStatus) {
      const status = document.createElement("div");

      status.id = "webmcp-status";

      status.textContent =
        "✓ WebMCP aktif — findBibleVerse tersedia";

      status.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
        padding: 12px 18px;
        background: #e8fff8;
        color: #087f68;
        border: 1px solid #9de5d3;
        border-radius: 12px;
        font-family: sans-serif;
        font-size: 14px;
        font-weight: 600;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
      `;

      document.body.appendChild(status);
    }

    return true;
  }
catch (error) {
  console.error(
    "Gagal mendaftarkan WebMCP tool:",
    error
  );

  const message =
    error instanceof Error
      ? error.message
      : String(error);

  showWebMCPStatus(
    `❌ WebMCP gagal: ${message}`
  );

  return false;
}
}