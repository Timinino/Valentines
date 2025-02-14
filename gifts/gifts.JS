function createHeart() {
    const heart = document.createElement("img");
    heart.src = "../images/Heart.png"; // Replace with your heart image URL
    heart.classList.add("hearts");
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.querySelector(".hearts-container").appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  
  setInterval(createHeart, 300);
  