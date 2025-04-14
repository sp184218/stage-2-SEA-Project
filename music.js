const categories = [
  {
    title: "Top 5 Songs 🎵",
    image: "Coldplay album cover.jpg", // ✅ FIXED: was incorrectly labeled as a video before
    points: [
      "1. To Zion - Lauryn Hill",
      "2. The Beginning - Flawed Mangoes",
      "3. Little Story - Kehlani",
      "4. The Lego House - Ed Sheeran",
      "5. Adventure of a Lifetime - Coldplay",
      "This list was a challenge! I love music that blends raw emotion, lyrical depth, and creative soundscapes. These songs stuck with me across different seasons of my life, lifting me up or grounding me when I needed it most."
    ]
  },
  {
    title: "Fun Music Facts 🎵",
    image: "Lauryn Hill album cover.jpg",
    points: [
      "In the song 'To Zion' the music industry wanted Lauryn to abort her child because they felt it would ruin her career, but she ignored them and brought new life into this world, made platinum records with her song dedicated to her son AND became an 8-time Grammy Award winner. She pushed the boundaries of what society expected and showed us the power of choosing your truth over fear."
    ]
  },
  {
    title: "Favorite Lyric Quotes 🎵",
    image: "Ed Sheeran album cover.jpg",
    points: [
      `"My three words have two meanings but there's one thing on my mind... It's all for you."`,
      "I loved how Ed Sheeran incorporated math to express love in his song *The Lego House*. Music and math — who would've thought it’d be such a poetic combo?"
    ]
  }
];

function createCards() {
  const container = document.getElementById("card-container");

  categories.forEach((category) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Navigation logic (if needed)
    if (category.title.includes("Music Facts Redirect")) {
      card.onclick = () => window.location.href = "music.html";
    } else if (category.title.includes("Movies")) {
      card.onclick = () => window.location.href = "movies.html";
    } else if (category.title === "Math") {
      card.onclick = () => window.location.href = "math.html";
    }

    // Create inner card structure
    const cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");

    const front = document.createElement("div");
    front.classList.add("card-front");

    const back = document.createElement("div");
    back.classList.add("card-back");

    // Card Front: use image
    if (category.image) {
      const img = document.createElement("img");
      img.src = category.image;
      img.alt = category.title;
      img.classList.add("card-image");
      front.appendChild(img);
    }

    // Card Back: title + list
    const title = document.createElement("h2");
    title.textContent = category.title;

    const ul = document.createElement("ul");
    category.points.forEach((point) => {
      const li = document.createElement("li");
      li.innerHTML = point;
      ul.appendChild(li);
    });

    back.appendChild(title);
    back.appendChild(ul);

    // Assemble the card
    cardInner.appendChild(front);
    cardInner.appendChild(back);
    card.appendChild(cardInner);
    container.appendChild(card);

    // Flip interaction
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
}

window.onload = function () {
  createCards();
};
