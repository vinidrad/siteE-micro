
const cards = document.querySelectorAll(".card");
let activeIndex = 2;

function updateCarousel() {
  cards.forEach(card => {
    const wasExpanded = card.classList.contains("expanded");
    card.className = "card";

    if (wasExpanded) {
      card.classList.add("expanded");
    }
  });

  const positions = [
    "bsmall-left",
    "small-left",
    "medium-left",
    "active",
    "medium-right",
    "small-right",
    "bsmall-right"
  ];

  cards.forEach((card, i) => {
    let relative = (i - activeIndex + cards.length) % cards.length;
    relative = (relative + 3) % cards.length;

    if (positions[relative]) {
      card.classList.add(positions[relative]);
    }
  });

  const activeCard = document.querySelector(".card.active");

  if (activeCard && !activeCard.classList.contains("expanded")) {
    activeCard.classList.add("expanded");

    const info = activeCard.querySelector(".card-info");
    info.textContent = activeCard.dataset.info;
  }
}

function moveToIndex(targetIndex) {
  if (targetIndex === activeIndex) return;

  let diff = targetIndex - activeIndex;

  if (diff > cards.length / 2) diff -= cards.length;
  if (diff < -cards.length / 2) diff += cards.length;

  activeIndex += diff > 0 ? 1 : -1;

  if (activeIndex < 0) activeIndex = cards.length - 1;
  if (activeIndex >= cards.length) activeIndex = 0;

  updateCarousel();

  if (activeIndex !== targetIndex) {
    setTimeout(() => moveToIndex(targetIndex), 180);
  }
}

cards.forEach((card, index) => {
  card.addEventListener("click", () => {

    if (window.innerWidth <= 768) {
      cards.forEach(c => {
        if (c !== card) c.classList.remove("expanded");
      });

      card.classList.toggle("expanded");

      const info = card.querySelector(".card-info");
      info.textContent = card.dataset.info;
      return;
    }

    const isActive = card.classList.contains("active");

    if (isActive) {
      card.classList.toggle("expanded");

      const info = card.querySelector(".card-info");
      info.textContent = card.dataset.info;
      return;
    }

    cards.forEach(c => c.classList.remove("expanded"));
    moveToIndex(index);
  });
});

updateCarousel(); 

let startX = 0;
let endX = 0;

const carousel = document.getElementById("carousel");

carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  if (startX - endX > 50) {
    activeIndex = (activeIndex + 1) % cards.length;
    updateCarousel();
  }

  if (endX - startX > 50) {
    activeIndex = (activeIndex - 1 + cards.length) % cards.length;
    updateCarousel();
  }
}




const abrir = document.querySelector(".abrir-popup");
const popupDw = document.getElementById("popup");
const fechar = document.getElementById("fechar");

abrir.addEventListener("click", function(e) {
  e.preventDefault();
  popupDw.style.display = "block";
});

fechar.addEventListener("click", function() {
  popupDw.style.display = "none";
});

window.addEventListener("click", function(e) {
  if (e.target === popupDw) {
    popupDw.style.display = "none";
  }
});




