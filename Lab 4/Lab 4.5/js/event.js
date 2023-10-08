
let currentRotation = 0; // Góc xoay hiện tại
const rotationIncrement = 15; // Góc xoay mỗi lần
function rotateImg() {
  const videoContainer = document.querySelector(".img-container");
  currentRotation += rotationIncrement;
  videoContainer.style.transform = `translate(-50%, -50%) rotate(${currentRotation}deg)`;
}

setInterval(rotateImg, 2000);
