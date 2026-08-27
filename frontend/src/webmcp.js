export function registerHopeSongTools() {
  if (!("modelContext" in document)) {
    console.log("WebMCP is not available in this browser.");
    return;
  }

  document.modelContext.registerTool({
    name: "findBibleVerse",
    title: "Find a Bible Verse",
    description:
      "Find a Bible verse from HopeSong.ai that is relevant to a user's topic, emotion, or spiritual need.",

    inputSchema: {
      type: "object",
      properties: {
        topic: {
          type: "string",
          description:
            "The user's topic, emotion, or spiritual need, such as fear, hope, peace, strength, prayer, or sadness."
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
          description: "The language in which the Bible verse should be returned."
        }
      },
      required: ["topic", "language"]
    },

    execute: async ({ topic, language }) => {
      const verses = {
        "Bahasa Indonesia": {
          hope: "Roma 15:13 — Semoga Allah, sumber pengharapan, memenuhi kamu dengan segala sukacita dan damai sejahtera dalam iman.",
          fear: "Yesaya 41:10 — Janganlah takut, sebab Aku menyertai engkau; janganlah bimbang, sebab Aku ini Allahmu.",
          peace: "Yohanes 14:27 — Damai sejahtera Kutinggalkan bagimu. Damai sejahtera-Ku Kuberikan kepadamu."
        },

        "English": {
          hope: "Romans 15:13 — May the God of hope fill you with all joy and peace as you trust in him.",
          fear: "Isaiah 41:10 — So do not fear, for I am with you; do not be dismayed, for I am your God.",
          peace: "John 14:27 — Peace I leave with you; my peace I give you."
        },

        "中文": {
          hope: "罗马书 15:13 — 但愿使人有盼望的神，因信将诸般的喜乐平安充满你们的心。",
          fear: "以赛亚书 41:10 — 你不要害怕，因为我与你同在；不要惊惶，因为我是你的神。",
          peace: "约翰福音 14:27 — 我留下平安给你们；我将我的平安赐给你们。"
        },

        "한국어": {
          hope: "로마서 15:13 — 소망의 하나님이 모든 기쁨과 평강을 믿음 안에서 너희에게 충만하게 하시기를 원하노라.",
          fear: "이사야 41:10 — 두려워하지 말라 내가 너와 함께 함이라. 놀라지 말라 나는 네 하나님이 됨이라.",
          peace: "요한복음 14:27 — 평안을 너희에게 끼치노니 곧 나의 평안을 너희에게 주노라."
        },

        "Español": {
          hope: "Romanos 15:13 — Que el Dios de la esperanza los llene de toda alegría y paz a medida que confían en él.",
          fear: "Isaías 41:10 — No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios.",
          peace: "Juan 14:27 — La paz les dejo; mi paz les doy."
        }
      };

      const text = topic.toLowerCase();

      let category = "hope";

      if (
        text.includes("fear") ||
        text.includes("takut") ||
        text.includes("cemas") ||
        text.includes("anxious") ||
        text.includes("khawatir")
      ) {
        category = "fear";
      } else if (
        text.includes("peace") ||
        text.includes("damai") ||
        text.includes("tenang") ||
        text.includes("paix")
      ) {
        category = "peace";
      }

      const verse = verses[language]?.[category];

      if (!verse) {
        return `HopeSong.ai could not find a verse for "${topic}" in ${language}.`;
      }

      return verse;
    }
  });

  console.log("HopeSong.ai WebMCP tool registered: findBibleVerse");
  const status = document.createElement("div");
status.textContent = "✓ WebMCP aktif — findBibleVerse terdaftar";
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
`;

document.body.appendChild(status);
}