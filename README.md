# 🌿 TouchGrass AI

### Less Scrolling. More Exploring.

**TouchGrass AI** is an AI-powered outdoor activity recommendation website that encourages people to take a break from their screens and reconnect with the natural world.

Built using HTML, CSS, JavaScript, and an open-weight AI model running locally through Ollama, the project generates personalized outdoor missions based on users' available time and interests.

The goal is simple: **use AI to help people spend more time living offline.**

---

## 🌎 The Problem

People increasingly spend large amounts of time on digital devices for studying, working, entertainment, and social media.

Although technology is useful, spending all our free time on screens can reduce opportunities to explore nature, enjoy outdoor activities, and connect with our surroundings.

TouchGrass AI addresses this problem by turning a user's intention to take a break into a simple, actionable outdoor mission.

## 💡 Our Solution

TouchGrass AI recommends practical outdoor activities based on the user's preferences.

Instead of encouraging users to stay in an app for longer, it helps them choose an activity, leave the screen, and enjoy the real world.

### ✨ Features

- 🌿 **AI-Powered Missions:** Generate personalized outdoor activity suggestions using a local AI model.
- ⏱️ **Flexible Duration:** Choose activities lasting 15, 30, or 60 minutes.
- 🌱 **Multiple Interests:** Explore nature walks, gardening, birdwatching, and outdoor games.
- ✅ **Mission Completion:** Mark activities as completed and track your progress during the current session.
- 🔌 **Fallback Mode:** Built-in activity suggestions remain available when the local AI service is unavailable.
- 🔒 **Privacy-Conscious Design:** Local AI inference can keep prompts on the user's computer instead of sending them to a third-party AI API.
- 📱 **Responsive Interface:** Use the website on desktop and mobile-sized screens.
- 🌍 **Real-World Impact:** Encourage users to spend less unnecessary time on screens and more time outdoors.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling, layout, and responsive design |
| JavaScript | Interactivity and application logic |
| Ollama | Runs the AI model locally |
| Llama 3.2 1B | Open-weight model for generating missions |
| Git and GitHub | Version control and project hosting |

### 🤖 Why Open-Source AI?

Open innovation matters because developers should have the freedom to experiment with AI, inspect available model documentation, change models, and adapt applications to their needs.

TouchGrass AI uses an open-weight model through Ollama rather than depending on a paid, closed AI API.

**Benefits of this approach:**

- **Privacy:** Prompts can remain on the local machine when inference is performed locally.
- **Cost control:** Local inference avoids per-request charges from a hosted AI API, although hardware and electricity still have costs.
- **Customization:** Developers can modify prompts and experiment with compatible models.
- **Independence:** The AI feature does not require a third-party hosted inference API once the model has been downloaded.
- **Accessibility:** Students and beginner developers can experiment with AI without needing paid API credits.

**Important distinction:** Llama 3.2 is an open-weight model, not necessarily open-source software under every definition. Review the applicable model license before redistributing or using it commercially.

---

## 🧠 How It Works

1. The user opens TouchGrass AI.
2. The user chooses an activity duration.
3. The user selects an interest, such as gardening or nature walks.
4. JavaScript sends a prompt to the locally running Ollama API.
5. The AI generates an outdoor mission.
6. If the AI service is unavailable, the website provides a built-in suggestion.
7. The user completes the outdoor activity and records the completion.

The intended experience is to choose a mission quickly, put the device away, and enjoy the outdoors.

---

## 📂 Project Structure

```text
touchgrass-ai/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

- `index.html` — Defines the website structure and interface.
- `style.css` — Controls the visual design and responsive layout.
- `script.js` — Handles mission generation, local AI requests, and progress tracking.
- `README.md` — Documents the project and explains how to run it.

---

## 🚀 Getting Started

### Prerequisites

Install the following:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Ollama](https://ollama.com/)
- The Live Server extension for VS Code
- A modern web browser

### Step 1: Clone the Repository

After uploading your project to GitHub, run:

```bash
git clone https://github.com/YOUR-USERNAME/touchgrass-ai.git
cd touchgrass-ai
```

Replace `YOUR-USERNAME` with your GitHub username.

Alternatively, download the repository as a ZIP and extract it.

### Step 2: Download the AI Model

Open the terminal and run:

```bash
ollama pull llama3.2:1b
```

This downloads the model to your computer. The first download requires an internet connection.

### Step 3: Start Ollama

If Ollama is not already running, execute:

```bash
ollama serve
```

If Ollama is already running as a background service, leave it running.

### Step 4: Launch the Website

1. Open the project folder in VS Code.
2. Open `index.html`.
3. Right-click and select **Open with Live Server**.
4. Choose your duration and activity interest.
5. Click **Generate my mission**.

If the browser blocks requests to the local Ollama API, configure Ollama's allowed origins for your local development address.

### Step 5: Test the AI

You can test the model directly in your terminal:

```bash
ollama run llama3.2:1b
```

Ask it to suggest an outdoor activity. If it responds, the model is installed and available through Ollama.

---

## 🔐 Privacy and Offline Support

TouchGrass AI is designed to support local AI inference.

When the model runs locally, prompts sent to Ollama can be processed on the user's computer rather than sent to an external AI inference provider.

However:

- The model must be downloaded before first use.
- The website's AI connection requires the local Ollama service to be running.
- The browser may require local-origin permissions.
- Built-in activity suggestions can work without the AI service.
- Local AI inference does not automatically guarantee that every part of a website is offline or that no data is transmitted by other features.

The current prototype tracks mission completions in memory during the session. Persistent progress storage can be added in a future version.

---

## 🎯 Target Audience

- Students who want healthier breaks from studying.
- People who enjoy gardening and nature.
- Beginners looking for easy outdoor activities.
- Developers interested in practical open-weight AI applications.
- Anyone who wants to make free time more active and meaningful.

---

## 🌳 Future Improvements

- [ ] Save progress across browser sessions.
- [ ] Add daily and weekly outdoor challenges.
- [ ] Introduce a streak and achievement system.
- [ ] Add location-aware suggestions with user permission.
- [ ] Include local weather-aware recommendations.
- [ ] Add a garden planner and seasonal planting guidance.
- [ ] Explore bird identification using suitable open models.
- [ ] Add multilingual support.
- [ ] Improve the fully offline experience.
- [ ] Conduct outdoor user testing and document the results.

---

## 🧪 Testing and Limitations

This project is a prototype. Before presenting it as a finished product:

1. Verify that all buttons work.
2. Test built-in suggestions with Ollama stopped.
3. Test AI-generated missions with Ollama running.
4. Check the website on mobile and desktop.
5. Confirm that mission completion is counted correctly.
6. Check the browser console for connection errors.
7. Try the application outdoors and record real feedback.

AI-generated activities should be reviewed for practicality and safety. The application should not assume that every user has access to a garden, park, or safe outdoor space.

---

## 🌟 Why TouchGrass AI?

Many AI applications are designed to increase digital engagement. TouchGrass AI explores a different possibility: **AI that helps people step away from technology.**

By using open-weight AI, the project gives developers greater control over the model and provides a path toward private, locally processed activity recommendations.

Technology should not only make us more productive online. It can also help us enjoy life beyond the screen.

---

## 👩‍💻 Author

**Your Name:** Add your name here.

**Project:** TouchGrass AI

**Built with:** HTML, CSS, JavaScript, and local open-weight AI.

---

## 📜 License

This project can be released under the MIT License for your original