const categories = [
  {
    title: "How My D.O.B <8/17/1995> is My Cosmic Blueprint➗",
    points: [
      "Astrology/Numerology:",
      "Astrology reveals the imprint of the sky at the moment of your first breath. A cosmic fingerprint that marks your soul's journey, tendencies, and timing.",
      "Numerology gives meaning to the numbers that show up in our lives. Each one carrying a frequency, a lesson, and a mirror."
    ],
    image: "astrology.jpg"
  },
  {
    title: "Fun Math Facts about Myself ➗",
    points: [
      "Numbers were my first language: is something I would joke about but it's TRUE. I recognized that my soul reads the code, just as others read words. These different types of ways to see math aren't really separate. They're more so layers of the same divine pattern. Just as I breathe without learning, I resonate with numbers without explanation, because my soul already remembers the language. 'It is what it is' kind of thing lol"
    ],
    image: "Mean girls.gif"
  },
  {
    title: "The Concept of Quantum Physics➗",
    points: [
      "Quantum physics is like using math magic to predict how tiny invisible things behave, because we can't see them-- we can only understand them through patterns and numbers.",
      "Quantum physics reveals the math behind matter, showing that at the smallest level, reality dances to the rhythm of probability, vibration, and unseen connection."
    ],
    image: "quantum physics.jpg"
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
      }else if (category.title === "Math Section Redirect") {
        card.onclick = () => window.location.href = "math.html";
      }
      

      
          // Create front (content) and back (image) faces
          const cardInner = document.createElement("div");
          cardInner.classList.add("card-inner");
      
          const front = document.createElement("div");
          front.classList.add("card-front");
      
          const back = document.createElement("div");
          back.classList.add("card-back");
      
          // Card Front: title + points
          const title = document.createElement("h2");
          title.textContent = category.title;
      
          const ul = document.createElement("ul");
          category.points.forEach((point) => {
            const li = document.createElement("li");
            li.innerHTML = point;
            ul.appendChild(li);
          });
      
          front.appendChild(title);
          front.appendChild(ul);
      
          // Card Back: image
          const img = document.createElement("img");
          img.src = category.image;
          img.alt = category.title;
          img.classList.add("card-image");
          back.appendChild(img);
      
          // Append front and back to cardInner, then to card
          cardInner.appendChild(front);
          cardInner.appendChild(back);
          card.appendChild(cardInner);
          container.appendChild(card);
      
          // Add click toggle to flip card
          card.addEventListener("click", () => {
            card.classList.toggle("flipped");
          });
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

  window.onload = function () {
    createCards(); // your card function

    const video = document.querySelector("video");

    // Pause/play on click
    if (video) {
      video.addEventListener("click", () => {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });

    
      }
  
  }
