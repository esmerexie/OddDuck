'use strict';


let imageEls = document.querySelectorAll('img');
const ctx = document.getElementById('myChart');

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
  'wine-glass.jpg',
];

let image = [];

function Image(images) {
  this.clicks = 0;
  this.views = 0;
  this.id = images;
  this.src = `img/${images}`;
}

Image.prototype.handleClick = function() {
  this.clicks++;
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
image[2].views++;

function handleClick(event) {
  clicks++;
  for (let i = 0; i < image.length; i++) {
    if (event.target.id === image[i].id) {
      image[i].clicks++;
    }
  }

  if (clicks >= 5) {
    // alert('You are done');
    renderChart();
  } else {
    renderImages();
  }
}

imageEls.forEach(function (img) {
  img.addEventListener('click', handleClick);
});

function renderImages() {

  let image1 = generateRandomImage();
  let image2 = generateRandomImage();
  let image3 = generateRandomImage();

  while (image1.id === image3.id || image1.id === image2.id) {
    image1 = generateRandomImage();
  }

  while (image2.id === image1.id || image2.id === image3.id) {
    image2 = generateRandomImage();
  }

  while (image3.id === image1.id || image3.id === image2.id) {
    image3 = generateRandomImage();
  }

  // while (image2.id === image1.id || image2.id === image3.id || image3.id === image1.id) {
  //   image2 = generateRandomImage();
  //   image3 = generateRandomImage();
  // }

  // while (image3.id === image1.id) {
  //   image3 = generateRandomImage();
  // }

  // console.log(read);

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

function renderChart() {
  let clicks = [];
  let views = [];

  for (let i = 0; i<image.length; i++) {
    clicks.push(image[i].clicks);
    views.push(image[i].views);
  }

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: images,
      datasets: [{
        label: '# of clicks',
        data: clicks,
        backgroundColor: ['green'],
      }, {
        label: '# of views',
        data: views,
        backgroundColor: ['orange'],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  localStorage.setItem('clicks', JSON.stringify(clicks));

  localStorage.setItem('views', JSON.stringify(views));

  JSON.parse(localStorage.getItem('clicks'));
  JSON.parse(localStorage.getItem('views'));

  console.log(localStorage);
// This is the code to Generate the Chart//
// const myChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: images,
//     datasets: [{
//       label: '# of Votes',
//       backgroundColor: ['Blue'],
//       data: [12, 19, 3, 5, 2, 3],
//       borderWidth: 1
//     },
//     {
//       backgroundColor: ['Red'],
//       data: [10, 2, 6, 7, 9, 21],
//       label: 'View Results',
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });
}
