const chatBox = document.getElementById("chatBox");
const messageForm = document.getElementById("messageForm");
const userInput = document.getElementById("userInput");
const santaAudio = document.getElementById("santaAudio");
const emojiPanel = document.getElementById("emojiPanel");
const emojiToggle = document.getElementById("emojiToggle");

const santaReplies = [
    "Ho ho ho! Merry Christmas!",
    "Have you been a good child this year?",
    "What would you like for Christmas?",
    "Santa loves cookies and milk! Do you?",
    "Stay kind and jolly, my dear friend!",
    "Rudolph says hi! 🦌",
    "Are you ready for the holiday season?",
    "The elves are working hard at the workshop!",
    "I’ve been checking the naughty and nice list... where do you fall?",
    "Santa's sleigh is packed and ready to go!",
    "It's so cold here at the North Pole! How's the weather where you are?",
    "Do you leave cookies and milk out for me? 🎅🍪🥛",
    "What’s your favorite Christmas movie? I love ‘Elf’!",
    "I’m busy making toys for good children like you!",
    "The North Pole is full of magic this time of year!",
    "Have you written your letter to Santa yet?",
    "Do you have a Christmas tree at home? 🎄",
    "I hope you’ve been good... remember, kindness is always the best gift!",
    "Jingle bells, jingle bells, jingle all the way! 🎶",
    "Are you looking forward to the snow? ❄️",
    "Santa’s elves are always crafting something special just for you!",
    "Keep spreading holiday cheer wherever you go!",
    "I’ll be flying around the world in my sleigh tonight!",
    "Wishing you a holly jolly Christmas filled with love and joy!",
    "The Christmas lights are twinkling bright at the North Pole! ✨",
    "I’m so excited for Christmas Eve! It’s my favorite time of the year!",
    "Santa’s workshop is bustling with excitement as we prepare for the big night!",
    "Don’t forget to leave out some carrots for the reindeer too! 🦌🦌",
    "Merry Christmas to all, and to all a good night! 🎅🎁"
  ];
  

// Add message with avatar
function appendMessage(sender, message) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;

  const avatar = document.createElement("img");
  avatar.src = sender === "santa" ? "santa-avatar.png" : "user-avatar.png";
  avatar.alt = `${sender} avatar`;

  const text = document.createElement("div");
  text.textContent = message;

  messageDiv.appendChild(avatar);
  messageDiv.appendChild(text);
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Handle form submission
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userMessage = userInput.value.trim();
  if (!userMessage) return;

  // User's message
  appendMessage("user", userMessage);
  userInput.value = "";

  // Santa's response
  setTimeout(() => {
    const santaMessage = santaReplies[Math.floor(Math.random() * santaReplies.length)];
    appendMessage("santa", santaMessage);

    // Play Santa's audio greeting
    santaAudio.play();
  }, 1000);
});

// Toggle emoji panel
emojiToggle.addEventListener("click", () => {
  emojiPanel.style.display = emojiPanel.style.display === "none" ? "block" : "none";
});

// Add emoji to input
emojiPanel.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    userInput.value += e.target.textContent;
    userInput.focus();
  }
});
const snowfallContainer = document.querySelector(".snowfall-container");

// Festive emojis for snowfall
const festiveEmojis = ["❄️", "🎄", "🎁", "⭐", "🔔"];

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";

  // Randomly pick an emoji
  snowflake.textContent = festiveEmojis[Math.floor(Math.random() * festiveEmojis.length)];

  // Randomize position, size, and animation duration
  snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
  snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // 2-5 seconds
  snowflake.style.fontSize = `${Math.random() * 20 + 15}px`; // 15px-35px

  snowfallContainer.appendChild(snowflake);

  // Remove the snowflake after animation ends
  setTimeout(() => {
    snowflake.remove();
  }, 5000); // Match max animation duration
}

// Control the density of snowfall (lower interval = more snowflakes)
setInterval(createSnowflake, 150);
snowflake.addEventListener("click", () => {
    snowflake.style.transform = "scale(0)";
    setTimeout(() => snowflake.remove(), 300); // Remove after animation
  });
  