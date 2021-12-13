let photo = document.getElementById('photo');
let arrowLeft = document.getElementById('arrowLeft');
let arrowRight = document.getElementById('arrowRight');

let lesPhotos = ["url(img/20494859.jpg)", "url(assets/img/tree-736885__480.jpg)", "url(img/20494859.jpg)"]

function right() {
    for (let i = 0; i<lesPhotos.length; i++) {
        if (lesPhotos[1]) {
            photo.style.backgroundImage = lesPhotos[1];
        }
    }
}


arrowRight.addEventListener("click", () => {
    right();
})