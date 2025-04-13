const categories = [
  {
    title: "Top 5 Songs 🎵",
    points: ["1. To Zion - Lauryn Hill",
      "2. The Beginning - Flawed Mangoes",
      "3. Little Story - Kehlani",
      "4. The Lego House - Ed Sheeran",
      "5. Adventure of a Lifetime - Coldplay" ]  },
  {
    title: "Fun Music Facts 🎵",
    points: [ "In the song 'To Zion' the music industry wanted Lauryn to abort her child because they felt it would ruin her career, but she ignored them and brought a new life into this world, made platinum records with her song dedicated to her son AND became 8 grammy award winner. She pushed the boundaries of what society wanted her to be and showed them that she can be whoever she wants."
      
    ]
  

    },
    {
      title: "Favorite Lyric Quotes 🎵",
      points: ["My three words have two meanings but there's one thing on my mind... It's all for you", "I loved how Ed Sheeran incorporated math to express love in his song The Lego House"]
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
  
     /*  const img = document.createElement("img");
      img.src = category.image;
      img.alt = category.title; */
  
      const ul = document.createElement("ul");
      category.points.forEach((point) => {
        const li = document.createElement("li");
        li.innerHTML = point;
        ul.appendChild(li);
      });
  
      content.appendChild(title);
      /* content.appendChild(img); */
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