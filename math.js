const categories = [
  {
    title: "How My D.O.B <8/17/1995> is My Cosmic Blueprint➗",
    image: "astrology.jpg",
    points: [
      "Astrology|Numerology:",
      "Astrology reveals the imprint of the sky at the moment of your first breath. A cosmic fingerprint that marks your soul's journey, tendencies, and timing.",
      "Numerology gives meaning to the numbers that show up in our lives. Each one carrying a frequency, a lesson, and a mirror."
    ]
  },
  {
    title: "Fun Math Facts about Myself ➗",
    image: "Mean girls.gif",
    points: [
      "Numbers were my first language: is something I would joke about but it's TRUE. I recognized that my soul reads the code, just as others read words. These different types of ways to see math aren't really separate. They're more so layers of the same divine pattern. Just as I breathe without learning, I resonate with numbers without explanation, because my soul already remembers the language. 'It is what it is' kind of thing lol"
    ]
  },
  {
    title: "The Concept of Quantum Physics➗",
    image: "quantum physics.jpg",
    points: [
      "Quantum physics is like using math magic to predict how tiny invisible things behave, because we can't see them-- we can only understand them through patterns and numbers.",
      "Quantum physics reveals the math behind matter, showing that at the smallest level, reality dances to the rhythm of probability, vibration, and unseen connection."
    ]
  }
];

function createCards() {
  const container = document.getElementById("card-container");

  categories.forEach((category) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Optional redirect logic (not needed here but kept for future expansion)
    if (category.title === "Math") {
      card.onclick = () => window.location.href = "math.html";
    }

    // Card structure
    const cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");

    const front = document.createElement("div");
    front.classList.add("card-front");

    const back = document.createElement("div");
    back.classList.add("card-back");

    // Card Front: Image or Video
    if (category.image) {
      const img = document.createElement("img");
      img.src = category.image;
      img.alt = category.title;
      img.classList.add("card-image");
      front.appendChild(img);
    } else if (category.video) {
      const video = document.createElement("video");
      video.src = category.video;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.classList.add("card-video");
      front.appendChild(video);
    }

    // Card Back: Title and Points
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

    cardInner.appendChild(front);
    cardInner.appendChild(back);
    card.appendChild(cardInner);
    container.appendChild(card);

    // Flip logic
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });
}

// Initialize
window.onload = function () {
  createCards();
};

   