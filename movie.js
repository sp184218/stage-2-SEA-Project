const categories = [
    {
      title: "My Love for Film",
      points: [
        "Astrology/Numerology:",
        "Astrology reveals the imprint of the sky at the moment of your first breath. A cosmic fingerprint that marks your soul's journey, tendencies, and timing.",
        "Numerology gives meaning to the numbers that show up in our lives. Each one carrying a frequency, a lesson, and a mirror."
      ],
      image: "astrology.jpg"
    },
    {
      title: "Fun Movie Facts about Myself ➗",
      points: [
        " I was in an ITT technical Institute commercial when I was a little girl. I wanted to be so many things, but battled my own internal insecurities. Now I embrace my struggles through challenging myself to live in authenticity and have gone viral through Tiktok and Snapchat when posting mainly movie/show clips that have people think, laugh, cry, smile, and express all kinds of emotions that help grow and uplift. :) "   ],
      image: "Mean girls.gif"
    },
    {
      title: "Top 5 Movies ",
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
      if (category.title.includes("Film Redirect")) {
        card.onclick = () => window.location.href = "movies.html";
      } else if (category.title.includes("Music")) {
        card.onclick = () => window.location.href = "music.html";
      }else if (category.title === "Math") {
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
  
  }
