```javascript
// 🌿 TouchGrass AI
// Outdoor mission generator with local open-weight AI

const durationInput = document.getElementById("duration");
const interestInput = document.getElementById("interest");
const generateButton = document.getElementById("generate");
const completeButton = document.getElementById("complete");
const result = document.getElementById("result");
const progress = document.getElementById("progress");

let completedMissions = 0;
let currentMission = null;

// Built-in outdoor activities
const activities = {
  "nature walk": [
    "Take a walk and notice five things in nature.",
    "Explore a nearby park and observe different plants.",
    "Enjoy a short walk and listen to the sounds around you."
  ],
  gardening: [
    "Water your plants and check the soil.",
    "Plant a seed or care for a small garden.",
    "Observe a plant and learn what it needs to grow."
  ],
  birdwatching: [
    "Observe birds from a quiet, safe place.",
    "Listen to bird calls without disturbing wildlife.",
    "Look for birds in nearby trees from a distance."
  ],
  "outdoor games": [
    "Play badminton or another outdoor game.",
    "Invite a friend to play a short outdoor game.",
    "Practice throwing and catching a ball in a safe area."
  ]
};

// Display a mission safely
function showMission(title, description, source) {
  currentMission = { title, description };

  result.replaceChildren();

  const heading = document.createElement("h3");
  heading.textContent = title;

  const paragraph = document.createElement("p");
  paragraph.textContent = description;

  const note = document.createElement("p");
  note.textContent = source;

  result.append(heading, paragraph, note);
}

// Generate a built-in mission
function createFallbackMission() {
  const interest = interestInput.value;
  const minutes = Number(durationInput.value);
  const options = activities[interest] || activities["nature walk"];

  const activity =
    options[Math.floor(Math.random() * options.length)];

  return {
    title: `Your ${minutes}-minute outdoor mission 🌱`,
    description: activity,
    source: "Built-in activity suggestion"
  };
}

// Generate a mission using local Ollama AI
async function generateMission() {
  const interest = interestInput.value;
  const minutes = Number(durationInput.value);

  generateButton.disabled = true;
  generateButton.textContent = "Generating...";

  try {
    const response = await fetch(
      "http://localhost:11434/api/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama3.2:1b",
          stream: false,
          messages: [
            {
              role: "system",
              content:
                "You are TouchGrass AI, an outdoor activity planner. " +
                "Suggest one fun, safe, practical outdoor mission. " +
                "Respect the user's available time. Keep the response " +
                "short and beginner-friendly. Do not suggest trespassing " +
                "or disturbing wildlife."
            },
            {
              role: "user",
              content:
                `Suggest an outdoor activity for ${minutes} minutes. ` +
                `My interest is ${interest}. Include a short title ` +
                "and simple instructions."
            }
          ]
        })
      }
    );

    if (!response.ok) {
      throw new Error("Ollama could not generate a mission.");
    }

    const data = await response.json();
    const aiMessage = data.message?.content?.trim();

    if (!aiMessage) {
      throw new Error("Empty AI response.");
    }

    showMission(
      `Your AI Outdoor Mission 🌿`,
      aiMessage,
      "Powered by your local Ollama model"
    );
  } catch (error) {
    console.warn("Local AI unavailable:", error.message);

    const mission = createFallbackMission();

    showMission(
      mission.title,
      mission.description,
      "Offline fallback mode — start Ollama to use AI."
    );
  } finally {
    generateButton.disabled = false;
    generateButton.textContent = "Generate my mission";
  }
}

// Complete a mission
function completeMission() {
  if (!currentMission) {
    showMission(
      "Choose a mission first!",
      "Generate an outdoor mission before completing it.",
      "Your adventure starts here."
    );
    return;
  }

  completedMissions++;

  progress.textContent =
    `Missions completed: ${completedMissions}`;

  showMission(
    "Amazing work! 🎉",
    "You completed your outdoor mission. Enjoy the world beyond your screen!",
    "Ready for your next adventure?"
  );

  currentMission = null;
}

// Connect buttons
generateButton.addEventListener("click", generateMission);
completeButton.addEventListener("click", completeMission);

// Initial screen
showMission(
  "Your next adventure awaits!",
  "Choose your available time and favorite outdoor activity.",
  "Click Generate my mission to begin."
);
```