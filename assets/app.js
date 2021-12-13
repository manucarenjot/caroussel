let photo = document.getElementById('photo');
let arrowLeft = document.getElementById('arrowLeft');
let arrowRight = document.getElementById('arrowRight');

let lesPhotos = ["url(assets/img/20456790.jpg)", "url(assets/img/tree-736885__480.jpg)", "url(assets/img/20494859.jpg)", "url(assets/img/20456790.jpg)"]

let nombrePhoto = 0;

function right() {
        if (nombrePhoto === 0) {
            photo.style.backgroundImage = lesPhotos[1];
            nombrePhoto++
        }
        else if (nombrePhoto === 1) {
            photo.style.backgroundImage = lesPhotos[2];
            nombrePhoto++
        }
        console.log(nombrePhoto);

}


arrowRight.addEventListener("click", () => {
    right();

})