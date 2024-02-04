console.log("Hello World");
// Menu Hamburger

const menuHamburger = document.querySelector(".menuhamburger")
const navLinks = document.querySelector(".navbar")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})

// carousel photo

const photo1 = document.getElementById("photo1bis");
const bigImg = document.getElementById("photo1");
const photo2 = document.getElementById("photo2");
const photo3 = document.getElementById("photo3");
const photo4 = document.getElementById("photo4");

photo1.addEventListener("mouseover", function(event) {
    bigImg.src = "assets/img/img1.svg";
    photo1.style.filter = "grayscale(10%) blur(1px)";
    photo1.style.border = "2px solid #ff7e1b";
    photo1.style.borderRadius = "5%";
    photo2.style.filter = "";
    photo2.style.border = "none";
    photo3.style.filter = "";
    photo4.style.filter = "";
    photo4.style.border = "none";
});

photo2.addEventListener("mouseover", function(event) {
    bigImg.src = "assets/img/img2.svg";
    photo1.style.filter = "";
    photo1.style.border = "none";
    photo2.style.filter = "grayscale(10%) blur(1px)";
    photo2.style.border = "2px solid #ff7e1b";
    photo2.style.borderRadius = "5%";
    photo3.style.filter = "";
    photo4.style.filter = "";
});

photo3.addEventListener("mouseover", function(event) {
    bigImg.src = "assets/img/img3.svg";
    photo1.style.filter = "";
    photo2.style.filter = "";
    photo2.style.border = "none";
    photo3.style.filter = "grayscale(10%) blur(1px)";
    photo3.style.filter = "grayscale(10%) blur(1px)";
    photo3.style.border = "2px solid #ff7e1b";
    photo3.style.borderRadius = "5%";
    photo4.style.filter = "";
});

photo4.addEventListener("mouseover", function(event) {
    bigImg.src = "assets/img/img4.svg";
    photo1.style.filter = "";
    photo2.style.filter = "";
    photo3.style.filter = "";
    photo3.style.border = "none";
    photo4.style.filter = "grayscale(10%) blur(1px)";
    photo4.style.filter = "grayscale(10%) blur(1px)";
    photo4.style.border = "2px solid #ff7e1b";
    photo4.style.borderRadius = "5%";
});

// carousel photo telephone

const leftArrow = document.getElementById("btnflecheGauche");
const rightArrow = document.getElementById("btnflecheDroite");

let currentPhotoIndex = 1; 

leftArrow.addEventListener("click", function(event) {
    changePhoto(-1);
});

rightArrow.addEventListener("click", function(event) {
    changePhoto(1);
});

function changePhoto(direction) {
    currentPhotoIndex += direction;

    if (currentPhotoIndex < 1) {
        currentPhotoIndex = 4;
    } else if (currentPhotoIndex > 4) {
        currentPhotoIndex = 1;
    }

    switch (currentPhotoIndex) {
        case 1:
            bigImg.src = "assets/img/img1.svg";
            break;
        case 2:
            bigImg.src = "assets/img/img2.svg";
            break;
        case 3:
            bigImg.src = "assets/img/img3.svg";
            break;
        case 4:
            bigImg.src = "assets/img/img4.svg";
            break;
    }
}
// btn nombre de produits
const minusButton = document.querySelector('.minus');
const plusButton = document.querySelector('.plus');
const numberDisplay = document.querySelector('.nombre p');


let currentValue = 0;

minusButton.addEventListener('click', function() {
    currentValue = Math.max(0, currentValue - 1);
    updateDisplay();
});

plusButton.addEventListener('click', function() {
    currentValue += 1;
    updateDisplay();
});

function updateDisplay() {
    numberDisplay.textContent = currentValue;
}

// btn paniers
document.addEventListener('DOMContentLoaded', function() {
    const addToCartBtn = document.getElementById('addToCartBtn');
    
    addToCartBtn.addEventListener('click', function() {

        alert('Article ajouté au panier !');

        addToCartBtn.style.backgroundColor = '#FFAB6A';

        setTimeout(function() {
            addToCartBtn.style.backgroundColor = '#FF7E1B';
        }, 1000);
    });
});


// footer date 

document.getElementById("annee").textContent = new Date().getFullYear();


// newsletter

document.addEventListener('DOMContentLoaded', function() {
    const newsletterPopup = document.getElementById('newsletterPopup');
    const closeButton = document.getElementById('closeButton');

    
    setTimeout(() => {
        showPopup();
    }, 10000);

    function showPopup() {
        newsletterPopup.style.display = 'block';
    }

    function closePopup() {
        newsletterPopup.style.display = 'none';
    }

    // Ferme avec la croix
    closeButton.addEventListener('click', function() {
        closePopup();
    });

    // Fermer avec ECHAP
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closePopup();
        }
    });

});


