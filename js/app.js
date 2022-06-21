'use strict';

let imageEls = document.querySelectorAll('img');
let formResultsEl = document.getElementById('results');


console.log(imageEls);

let clicks = 0;
let views = 0;

let images = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'water-can.jpg',
  'wine-glass.jpg'
];

const image = [];

function Image(fileName) {
  this.clicks = 0;
  this.views = 0;
  this.id = fileName;
  this.src = `img/${fileName}`;
}

Image.prototype.handleClick = function() {

};

for (let i = 0; i < images.length; i++) {
  image.push(new Image(images[i]));
}

imageEls[0].id = image[0].id;
imageEls[0].src = image[0].src;
image[0].views++;
imageEls[1].id = image[1].id;
imageEls[1].src = image[1].src;
image[1].views++;
imageEls[2].id = image[2].id;
imageEls[2].src = image[2].src;

function handleClick(event) {

  for (let i = 0; i < image.length; i++) {
    console.log(event.target.id, image[i].id);
    if (event.target.id === images[i].id) {
      image[i].clicks++;
    }
  }

  renderImages();
  console.log(image);
}

imageEls.forEach(function (img) {
  img.addEventListener('click', handleClick);
});

function renderImages() {

  let image1 = generateRandomImage();
  let image2 = generateRandomImage();
  let image3 = generateRandomImage();

  while (image1.id === image2.id || image1.id === image3.id) {
    image1 = generateRandomImage();
  }

  while (image2.id === image3.id) {
    image2 = generateRandomImage();
  }

  while (image3.id === image1.id) {
    image3 = generateRandomImage();
  }

  imageEls[0].id = image1.id;
  imageEls[0].src = image1.src;
  imageEls[1].id =image2.id;
  imageEls[1].src = image2.src;
  imageEls[2].id =image3.id;
  imageEls[2].src = image3.src;
  image1.views++;
  image2.views++;
  image3.views++;
}

function generateRandomImage() {
  let index = Math.floor(Math.random() * image.length);
  return image[index];
}

console.log(clicks);
console.log(views);


