// Wait until the page loads
document.addEventListener("DOMContentLoaded", () => {
  // Select all feature cards
  const cards = document.querySelectorAll(".feature-card");

  // Add click event to each card
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const title = card.querySelector("h3").textContent;
      alert(`You clicked on: ${title}`);
    });
  });
});
// Wait until the page loads
document.addEventListener("DOMContentLoaded", () => {
  // Select all feature cards
  const cards = document.querySelectorAll(".feature-card");

  // Add click event to each card
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const title = card.querySelector("h3").textContent;
      alert(`You clicked on: ${title}`);
    });
  });
});
