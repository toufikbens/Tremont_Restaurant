const bgOne = document.getElementById("background-one");
const bgTwo = document.getElementById("background-two");

const images = {
  default: "Images/image1.jpeg",
  eat: "Images/image2.jpeg",
  drink: "Images/image3.jpeg",
  visit: "Images/image4.jpeg",
};

let activeBg = bgOne;
let inactiveBg = bgTwo;
let currentImage = images.default;

bgOne.style.backgroundImage = `url(${images.default})`;

function changeBackground(imageUrl) {
  if (imageUrl === currentImage) return;

  inactiveBg.style.backgroundImage = `url(${imageUrl})`;

  inactiveBg.classList.add("active");
  activeBg.classList.remove("active");

  [activeBg, inactiveBg] = [inactiveBg, activeBg];
  currentImage = imageUrl;
}

["eat", "drink", "visit"].forEach((id) => {
  const link = document.getElementById(id);

  link.addEventListener("mouseenter", () => {
    changeBackground(images[id]);
  });
});
const navbar = document.getElementById("navbar");
const logo = document.getElementById("logo");

function resetBackground() {
  changeBackground(images.default);
}

navbar.addEventListener("mouseenter", resetBackground);

logo.addEventListener("mouseenter", resetBackground);

logo.addEventListener("click", (e) => {
  e.preventDefault();
  resetBackground();
});