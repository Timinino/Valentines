const envelope = document.querySelector('.envelope-wrapper');
const closeButton = document.querySelector('.modal button');
const modal = document.getElementById('modal');

envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
    setTimeout(() => {
        modal.style.display = "block"; // Show the modal
        setTimeout(() => {
            modal.classList.add('show'); // Add the class to trigger transition
        }, 50); // Small delay before applying the transition
    }, 2000); // Delay for modal pop-up (2 seconds after the animation starts)
});

// Close the modal and envelope when the button is clicked
closeButton.addEventListener('click', () => {
    modal.classList.remove('show'); // Remove the transition class
    setTimeout(() => {
        modal.style.display = "none"; // Hide the modal
        envelope.classList.remove('flap'); // Close the envelope (remove the flap class)
    }, 500); // Delay the envelope closing to match the modal fade-out
});


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
  