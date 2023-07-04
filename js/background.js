const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];
const todaysImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${todaysImage}`;

bgImage.id = "bgImage"
document.body.appendChild(bgImage);