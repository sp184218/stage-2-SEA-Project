// Sample data array for the Big 3 M’s
const categories = [
  {
    title: "Movies I Love 🎬",
    image: "inception 2.jpg",
    points: ["Inception", "The Matrix", "Spirited Away"]
  },
  {
    title: "Music I Love 🎵",
    image: "lauryn hill.jpg",
    points: ["Lauryn Hill", "Kehlani", "Flawed Mangoes & Lofi"]
  },
  {
    title: "Math I Love ➕➗",
    image: "binary code.jpg",
    points: ["Astrology/Numerology", "Quantum Physics", "Coding DUH lol"]
  }
];
// Function to create cards for each category
function createCards() {
  const container = document.getElementById("card-container");

  categories.forEach((category) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // ✨ Add click-to-navigate logic
    if (category.title.includes("Movies")) {
      card.onclick = () => window.location.href = "movies.html";
    } else if (category.title.includes("Music")) {
      card.onclick = () => window.location.href = "music.html";
    } else if (category.title.includes("Math")) {
      card.onclick = () => window.location.href = "math.html";
    }

    const content = document.createElement("div");
    content.classList.add("card-content");

    const title = document.createElement("h2");
    title.textContent = category.title;

    const img = document.createElement("img");
    img.src = category.image;
    img.alt = category.title;

    const ul = document.createElement("ul");
    category.points.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      ul.appendChild(li);
    });

    content.appendChild(title);
    content.appendChild(img);
    content.appendChild(ul);
    card.appendChild(content);
    container.appendChild(card);
  });
}


// Example feature functions
function quoteAlert() {
  alert("Sydematic’s Big 3 M’s are iconic. Be inspired!");
}

function removeLastCard() {
  const container = document.getElementById("card-container");
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
}

// Initialize on page load
window.onload = () => {
  createCards();
};
