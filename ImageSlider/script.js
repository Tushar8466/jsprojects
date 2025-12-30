const images = [
  "https://picsum.photos/id/1015/800/500",
  "https://picsum.photos/id/1016/800/500",
  "https://picsum.photos/id/1025/800/500",
  "https://picsum.photos/id/1035/800/500"
];

let index = 0;
const slide = document.getElementById("slide");

// show first image
slide.src = images[index];

function nextSlide() {
  index = (index + 1) % images.length;
  slide.src = images[index];
}

function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  slide.src = images[index];
}
