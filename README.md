# HopeSong.ai

## Your Hopeful Moment

**Find Hope. Find Your Song.**

HopeSong.ai is a WebMCP-powered spiritual companion created by Elshopeful.

It explores how AI agents can recognize a person's emotional or spiritual need and connect them with meaningful Christian encouragement at the moment they need it.

HopeSong.ai is built around a simple journey:

**Fear → Peace → Hope**

---

## What HopeSong.ai Does

HopeSong.ai helps people and AI agents discover Christian encouragement through experiences such as:

- Bible verses
- Prayer
- Reflection
- Worship songs
- Hopeful devotional journeys

The current WebMCP implementation introduces the first working capability of this journey: finding a relevant Bible verse based on a user's emotional or spiritual need.

---

## Why WebMCP?

Traditional websites require users to navigate pages, search menus, and understand how a website is structured.

With WebMCP, HopeSong.ai can expose meaningful capabilities directly to AI agents.

Instead of an agent guessing how to interact with the website, it can discover a structured HopeSong.ai tool, understand its inputs, and use it on behalf of the user.

This creates a more natural experience:

**The user expresses what they are feeling → the AI agent understands the need → HopeSong.ai provides a relevant resource.**

---

## WebMCP Implementation

HopeSong.ai currently exposes the following WebMCP tool:

### `findBibleVerse`

**Title:** Find a Bible Verse

The tool finds a relevant Bible verse based on the user's topic, emotion, or spiritual need and returns it in the requested language.

### Inputs

#### `topic`

A topic, emotion, or spiritual need such as:

- fear
- anxiety
- stress
- peace
- calm
- hope
- encouragement

The tool also recognizes several equivalent terms in supported languages.

#### `language`

Supported values:

- `Bahasa Indonesia`
- `English`
- `中文`
- `한국어`
- `Español`

The language value should use one of these exact names rather than language codes such as `id`, `en`, `zh`, `ko`, or `es`.

---

## Example Journey

A user might say:

> I'm feeling afraid and uncertain about what comes next. Find me a Bible verse in Bahasa Indonesia.

An AI agent can discover HopeSong.ai's `findBibleVerse` WebMCP tool and call it with:

```json
{
  "topic": "fear",
  "language": "Bahasa Indonesia"
}
```

HopeSong.ai then returns a relevant Bible verse such as **Yesaya 41:10** in Bahasa Indonesia.

Another user might ask for peace in English:

```json
{
  "topic": "peace",
  "language": "English"
}
```

HopeSong.ai can return a relevant verse such as **John 14:27**.

A user looking for hope might use:

```json
{
  "topic": "hope",
  "language": "Bahasa Indonesia"
}
```

HopeSong.ai can return a relevant verse such as **Roma 15:13**.

These examples demonstrate the core idea behind HopeSong.ai: transforming a human emotional or spiritual need into a structured, agent-accessible journey toward encouragement.

---

## Live Demo

HopeSong.ai is deployed and publicly accessible at:

**https://hopesong-ai.netlify.app**

---

## How to Test WebMCP

HopeSong.ai currently uses the WebMCP Origin Trial.

Open the production website in a supported Chrome environment with WebMCP available:

**https://hopesong-ai.netlify.app**

Then open **Chrome DevTools → Console**.

### 1. Check WebMCP Availability

Run:

```javascript
document.modelContext
```

When WebMCP is available, a `ModelContext` object should be returned.

### 2. Discover HopeSong.ai Tools

Run:

```javascript
await document.modelContext.getTools()
```

The registered HopeSong.ai WebMCP tool should include:

```text
findBibleVerse
```

### 3. Execute the Tool

Run:

```javascript
const [tool] = await document.modelContext.getTools();

const result = await document.modelContext.executeTool(
  tool,
  JSON.stringify({
    topic: "fear",
    language: "Bahasa Indonesia"
  })
);

console.log(result);
```

The tool should return a relevant Bible verse for fear in Bahasa Indonesia.

### Additional Test: Peace

Try:

```javascript
const [tool] = await document.modelContext.getTools();

const result = await document.modelContext.executeTool(
  tool,
  JSON.stringify({
    topic: "peace",
    language: "English"
  })
);

console.log(result);
```

The tool should return a relevant Bible verse about peace in English.

### Additional Test: Hope

Try:

```javascript
const [tool] = await document.modelContext.getTools();

const result = await document.modelContext.executeTool(
  tool,
  JSON.stringify({
    topic: "hope",
    language: "Bahasa Indonesia"
  })
);

console.log(result);
```

The tool should return a relevant Bible verse about hope in Bahasa Indonesia.

---

## Running HopeSong.ai Locally

### 1. Clone the Repository

```bash
git clone https://github.com/elshopeful/hopesong.ai.git
```

### 2. Enter the Frontend Directory

```bash
cd hopesong.ai/frontend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev -- --host 0.0.0.0
```

Vite will provide the local development URL.

---

## Project Structure

```text
hopesong.ai/
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── webmcp.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
├── LICENSE
└── README.md
```

The main WebMCP implementation can be found in:

```text
frontend/src/webmcp.js
```

---

## Tech Stack

HopeSong.ai currently uses:

- React
- Vite
- JavaScript
- WebMCP
- Chrome WebMCP Origin Trial
- Netlify
- GitHub

---

## Vision

HopeSong.ai explores how people and AI agents can work together to discover meaningful spiritual resources based on what someone is experiencing in the moment.

The long-term vision is to create a connected journey where an AI agent can help someone move from a moment of fear, weariness, or uncertainty toward:

**Scripture → Prayer → Reflection → Worship → Hope**

Rather than requiring users to understand the structure of a website first, WebMCP allows HopeSong.ai's capabilities to become understandable and usable directly by AI agents.

The goal is not simply to help AI navigate a website.

**The goal is to help people find meaningful encouragement at the moment they need it.**

---

## Journey to Hope

HopeSong.ai is designed around a broader journey:

### Fear

A person may arrive feeling afraid, anxious, overwhelmed, or uncertain.

↓

### Peace

Scripture, prayer, and reflection can help guide the person toward rest and peace.

↓

### Hope

HopeSong.ai aims to connect that moment with encouragement, worship, and a renewed sense of hope.

**Fear → Peace → Hope**

This is the foundation for the future HopeSong.ai agent experience.

---

## WebMCP Challenge 2026

HopeSong.ai was developed for the **WebMCP Challenge 2026**.

The WebMCP implementation, including the `findBibleVerse` tool and its production integration, was developed during the challenge period.

The project demonstrates how a website can expose meaningful structured capabilities to AI agents through WebMCP instead of relying only on traditional human navigation.

---

## Future Direction

The current submission focuses on a working `findBibleVerse` WebMCP capability.

Future HopeSong.ai capabilities may expand the journey with tools for:

- Prayer
- Reflection
- Worship song discovery
- Personalized devotional journeys

The vision is for these capabilities to work together so an AI agent can guide a user through a meaningful journey from an expressed emotional need toward hope.

**Fear → Peace → Hope**

---

## Creator

Created by **Veni Veronika / Elshopeful**

Elshopeful creates Christian music, Scripture-based reflections, prayer, and hopeful digital experiences.

HopeSong.ai explores how those experiences can become accessible to both people and AI agents through WebMCP.

---

## License

This project is open source under the **MIT License**.

Copyright © 2026 Veni Veronika.
