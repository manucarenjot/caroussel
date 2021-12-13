let photo = document.getElementById('photo');
let arrowLeft = document.getElementById('arrowLeft');
let arrowRight = document.getElementById('arrowRight');

let lesPhotos = ["url(assets/img/20456790.jpg)", "url(assets/img/tree-736885__480.jpg)", "url(assets/img/20494859.jpg)",
    "url(assets/img/centre-img-1-950x500.jpg)", "url(assets/img/libellule-feuille-l760-h550.jpg)", "url(assets/img/jocelyn-armel-10.15-2015-1.jpg)"]

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
        else if (nombrePhoto === 2) {
            photo.style.backgroundImage = lesPhotos[3];
            nombrePhoto++
        }
        else if (nombrePhoto === 3) {
            photo.style.backgroundImage = lesPhotos[4];
            nombrePhoto++
        }
        else if (nombrePhoto === 4) {
            photo.style.backgroundImage = lesPhotos[5];
            nombrePhoto++
        }
        console.log(nombrePhoto);

}

function left() {
    if (nombrePhoto === 1) {
        photo.style.backgroundImage = lesPhotos[0];
        nombrePhoto--
    }
    else if (nombrePhoto === 2) {
        photo.style.backgroundImage = lesPhotos[1];
        nombrePhoto--
    }
    else if (nombrePhoto === 3) {
        photo.style.backgroundImage = lesPhotos[2];
        nombrePhoto--
    }
    else if (nombrePhoto === 4) {
        photo.style.backgroundImage = lesPhotos[3];
        nombrePhoto--
    }
    else if (nombrePhoto === 5) {
        photo.style.backgroundImage = lesPhotos[4];
        nombrePhoto--
    }
    console.log(nombrePhoto);
}

arrowLeft.addEventListener("click", () => {
    left()
})


arrowRight.addEventListener("click", () => {
    right();

})