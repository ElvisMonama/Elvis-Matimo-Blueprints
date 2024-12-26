// ============================
// Word of the Day Section
// ============================

// Select DOM elements for Word of the Day
const wordElement = document.querySelector('#word-of-the-day h3');
const definitionElement = document.querySelector('#word-of-the-day p:nth-of-type(1)');
const contextElement = document.querySelector('#word-of-the-day p:nth-of-type(2)');

// Example word data
const wordData = {
  word: "Innovation",
  pronunciation: "/ˌɪnəˈveɪʃən/",
  definition: "The process of creating new ideas, methods, or products.",
  context: "Innovation drives progress and shapes the future."
};

// Dynamically update Word of the Day section
if (wordElement && definitionElement && contextElement) {
  wordElement.textContent = `"${wordData.word}"`;
  definitionElement.textContent = `${wordData.pronunciation}: ${wordData.definition}`;
  contextElement.textContent = `In context: "${wordData.context}"`;
} else {
  console.error("One or more Word of the Day elements are missing.");
}

// ============================
// Mobile Menu Toggle Section
// ============================

// Select DOM elements for mobile menu
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

// Toggle visibility of navigation menu
if (menuBtn && navMenu) {
  menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
  });
} else {
  console.error("Menu button or navigation menu not found.");
}
