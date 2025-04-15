const categories = [
  {
    title: "My Love for Film 📼🎬",
    video: "tv.mp4",
    points: [
      "I grew up between nature and the rise of tech, with cassette tapes, DVDs, and the rule of being home before the streetlights came on. As a child of two brilliant engineers, expectations were high. With APD (auditory processing disorder), film became my translator — helping me process, feel, and find my voice. Now, people would never guess I once struggled to speak clearly. I no longer conform — I create a world where I'm fully seen."
    ]
  },
  {
    title: "Fun Movie Facts about Myself 🎬",
    image: "imagine.jpg",
    points: [
      "I was in an ITT Technical Institute commercial when I was a little girl. I wanted to be so many things, but battled my own internal insecurities. Now I embrace my struggles through challenging myself to live in authenticity and have gone viral through TikTok and Snapchat by posting movie/show clips that make people think, laugh, cry, smile, and feel inspired. :)"
    ]
  },
  {
    title: "Top 5 Movies 🎬🍿",
    video: "film recorder.mp4",
    points: [
      "1. Inception",  
      "2. The Matrix Franchise",
      "3. Spirited Away",
      "4. Back to the Future Franchise",
      "5. Star Wars Franchise",
      "In all honesty, this was tough lol. I have a roster of movies that are mind-boggling. Even TV shows are hard to pin down — but I will always choose ATLA as my all-time favorite TV series. That's what's so beautiful about the art of film; it really can expand your mind, body, and spirit to endless possibilities."
    ]
  }
];

function createCards() {
  const container = document.getElementById("card-container");

  categories.forEach((category) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // ✨ Add click-to-navigate logic
    if (category.title.includes("Film Redirect")) {
      card.onclick = () => window.location.href = "movie.html";
    } else if (category.title.includes("Music")) {
      card.onclick = () => window.location.href = "music.html";
    } else if (category.title === "Math") {
      card.onclick = () => window.location.href = "math.html";
    }

    // Create front (media) and back (text) faces
    const cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");

    const front = document.createElement("div");
    front.classList.add("card-front"); // Media shown first

    const back = document.createElement("div");
    back.classList.add("card-back"); // Text shown after flip

    // Card Front: image/video
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

    // Card Back: title + points
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

    // Append faces and card
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

// Initialize the card creation on page load
window.onload = function () {
  createCards();
};
