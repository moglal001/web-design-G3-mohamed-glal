let images = [
    "img/card1.jpg",
    "img/card2.jpg",
    "img/card3.jpg",
    "img/card4.jpg",
    "img/card5.jpg",
    "img/card6.jpg"
];
let currentIndex = 0;

function image() {
    currentIndex++;
    if(currentIndex >= images.length) {
        currentIndex = 0;
    }
    
    let img = document.getElementById('img')
    img.src = images[currentIndex];
}