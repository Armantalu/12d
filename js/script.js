const cards = document.querySelectorAll(".number-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            cards.forEach((card, index) => {

                setTimeout(() => {

                    card.classList.add("show");

                    const counter = card.querySelector(".counter");

                    const target = Number(counter.dataset.target);

                    let count = 0;

                    const updateCounter = () => {

                        if (count < target) {

                            count++;

                            counter.textContent = count;

                            setTimeout(updateCounter, 100);

                        } else {

                            counter.textContent = target;

                        }

                    };

                    updateCounter();

                }, index * 450);

            });

            observer.disconnect();

        }

    });

}, {
    threshold: 0.4
});

observer.observe(document.querySelector(".numbers"));

const messages = [
    "SANA MODEL SCHOOL",
    "Presents",
    "CLASS XII-D",
    "One Class. Countless Dreams.",
    "Welcome."
];

let current = 0;

const messageElement = document.getElementById("loaderMessage");

const messageInterval = setInterval(() => {

    current++;

    if (current < messages.length) {
        messageElement.style.opacity = 0;

        setTimeout(() => {
            messageElement.textContent = messages[current];
            messageElement.style.opacity = 1;
        }, 300);
    }

}, 450);

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        clearInterval(messageInterval);
        loader.classList.add("hide");

    }, 2500);

});window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        clearInterval(messageInterval);
        loader.classList.add("hide");

    }, 2500);

});

function openGallery(img){

    document.getElementById("galleryLightbox").classList.add("show");

    document.getElementById("lightboxImage").src = img.src;

}

function closeGallery(){

    document.getElementById("galleryLightbox").classList.remove("show");

}

document.getElementById("galleryLightbox").addEventListener("click",function(e){

    if(e.target.id==="galleryLightbox"){

        closeGallery();

    }

});

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

    if(document.body.scrollTop>300||document.documentElement.scrollTop>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

};

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};