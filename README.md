# HopeSong.ai

## Your Hopeful Moment

**Find Hope. Find Your Song.**

HopeSong.ai is a WebMCP-powered spiritual companion created by Elshopeful.

It explores how AI agents can recognize a person's emotional or spiritual need and connect them with meaningful Christian encouragement at the moment they need it.

HopeSong.ai is built around a simple journey:

**Fear → Peace → Hope**

---

## What HopeSong.ai Does

HopeSong.ai helps people and AI agents discover Christian encouragement based on what someone is experiencing in the moment.

The current WebMCP implementation provides two working capabilities:

- Find a relevant Bible verse
- Create a short personalized Hope Journey

A Hope Journey combines:

**Scripture → Reflection → Prayer → Next Step → Hope**

This allows an AI agent to move beyond simply finding information and help guide a person through a meaningful moment of encouragement.

---

## Why WebMCP?

Traditional websites require users to navigate pages, search menus, and understand how a website is structured.

With WebMCP, HopeSong.ai can expose meaningful capabilities directly to AI agents.

Instead of an agent guessing how to interact with the website, it can discover structured HopeSong.ai tools, understand their inputs, and use them on behalf of the user.

This creates a more natural experience:

**The user expresses what they are feeling → the AI agent understands the need → HopeSong.ai provides a relevant journey toward encouragement.**

---

## WebMCP Implementation

HopeSong.ai currently exposes two WebMCP tools through `document.modelContext.registerTool()`.

### 1. `findBibleVerse`

**Title:** Find a Bible Verse

Finds a relevant Bible verse based on the user's topic, emotion, or spiritual need and returns it in the requested language.

#### Inputs

**`topic`**

Examples include:

- fear
- anxiety
- stress
- peace
- calm
- hope
- encouragement

The tool also recognizes several equivalent terms in supported languages.

**`language`**

Supported values:

- `Bahasa Indonesia`
- `English`
- `中文`
- `한국어`
- `Español`

The language value should use one of these exact names rather than language codes such as `id`, `en`, `zh`, `ko`, or `es`.

---

### 2. `findHopeJourney`

**Title:** Find a Hope Journey

Creates a short HopeSong.ai journey based on the user's emotional or spiritual need.

The journey contains:

1. Scripture
2. Reflection
3. Prayer
4. A simple next step
5. A message of hope

#### Inputs

**`topic`**

Examples include:

- fear
- anxiety
- stress
- uncertainty
- tiredness
- peace
- hope
- encouragement

**`language`**

Currently supported values:

- `Bahasa Indonesia`
- `English`

Both WebMCP tools are read-only and do not modify the website.

---

## Example Journey

A user might say:

> I'm feeling afraid and uncertain about my future.

An AI agent can discover HopeSong.ai's `findHopeJourney` WebMCP tool and call it with:

```json
{
  "topic": "I am afraid and uncertain about my future",
  "language": "English"
}
```

HopeSong.ai can then return a structured journey:

```text
HOPE JOURNEY — FEAR

SCRIPTURE
Isaiah 41:10

REFLECTION
A short reflection for the user's current situation.

PRAYER
A short prayer related to the user's need.

NEXT STEP
One simple action the person can take.

HOPE
A final message of encouragement.
```

Instead of requiring the user to search through different sections of a website, an AI agent can discover and use HopeSong.ai's structured capability directly.

The simpler `findBibleVerse` tool can also be used when only Scripture is needed.

For example:

```json
{
  "topic": "peace",
  "language": "English"
}
```

HopeSong.ai can return a relevant Bible verse such as **John 14:27**.

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

Two registered tools should be returned:

```text
findBibleVerse
findHopeJourney
```

### 3. Test `findBibleVerse`

Run:

```javascript
const tools = await document.modelContext.getTools();

const bibleTool = tools.find(
  tool => tool.name === "findBibleVerse"
);

const result = await document.modelContext.executeTool(
  bibleTool,
  JSON.stringify({
    topic: "fear",
    language: "Bahasa Indonesia"
  })
);

console.log(result);
```

The tool should return a relevant Bible verse for fear in Bahasa Indonesia.

### 4. Test `findHopeJourney`

Run:

```javascript
const tools = await document.modelContext.getTools();

const journeyTool = tools.find(
  tool => tool.name === "findHopeJourney"
);

const result = await document.modelContext.executeTool(
  journeyTool,
  JSON.stringify({
    topic: "I am afraid and uncertain about my future",
    language: "English"
  })
);

console.log(result);
```

The result should contain:

```text
HOPE JOURNEY — FEAR

SCRIPTURE
REFLECTION
PRAYER
NEXT STEP
HOPE
```

### 5. Test the Hope Journey in Bahasa Indonesia

Run:

```javascript
const tools = await document.modelContext.getTools();

const journeyTool = tools.find(
  tool => tool.name === "findHopeJourney"
);

const result = await document.modelContext.executeTool(
  journeyTool,
  JSON.stringify({
    topic: "Aku merasa lelah, cemas, dan tidak tahu harus bagaimana",
    language: "Bahasa Indonesia"
  })
);

console.log(result);
```

The tool should return a Bahasa Indonesia Hope Journey based on the user's expressed need.

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

> Note: the application can run locally, but WebMCP availability depends on the browser environment and origin configuration. The production deployment is the recommended environment for testing the registered WebMCP tools.

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

The broader vision is to create a connected journey where an AI agent can help someone move from a moment of fear, weariness, or uncertainty toward:

**Scripture → Prayer → Reflection → Worship → Hope**

Rather than requiring users to understand the structure of a website first, WebMCP allows HopeSong.ai's capabilities to become understandable and usable directly by AI agents.

The goal is not simply to help AI navigate a website.

**The goal is to help people find meaningful encouragement at the moment they need it.**

---

## Journey to Hope

HopeSong.ai is designed around a broader emotional journey:

### Fear

A person may arrive feeling afraid, anxious, overwhelmed, or uncertain.

↓

### Peace

Scripture, prayer, reflection, and a simple next step can help guide the person toward rest and peace.

↓

### Hope

The journey ends with encouragement and a renewed sense of hope.

**Fear → Peace → Hope**

WebMCP enables an AI agent to connect a user's expressed need directly with these HopeSong.ai capabilities.

---

## WebMCP Challenge 2026

HopeSong.ai was developed for the **WebMCP Challenge 2026**.

The WebMCP implementation, including the `findBibleVerse` and `findHopeJourney` tools and their production integration, was developed during the challenge period.

The project demonstrates how a website can expose meaningful structured capabilities to AI agents through WebMCP instead of relying only on traditional human navigation.

---

## Future Direction

The current submission focuses on two working WebMCP capabilities:

- `findBibleVerse`
- `findHopeJourney`

Future HopeSong.ai capabilities may expand the experience with:

- Worship song discovery
- Additional languages
- More emotional and spiritual journey categories
- Deeper personalized devotional journeys

The long-term vision is for these capabilities to work together so an AI agent can guide a user from an expressed emotional or spiritual need toward meaningful encouragement.

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