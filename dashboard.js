/* =========================================================
   RETURN TO ENVELOPE FROM NOTES
========================================================= */

function checkReturnToEnvelope() {

    if (
        window.location.hash !== "#sceneThree"
    ) {
        return;
    }


    const sceneOne =
        document.getElementById("sceneOne");

    const sceneThree =
        document.getElementById("sceneThree");


    if (
        !sceneOne ||
        !sceneThree
    ) {
        return;
    }


    /*
       Skip the Click Me scene
       and show the envelope directly.
    */

    sceneOne.style.display =
        "none";

    sceneOne.classList.add(
        "hide-scene"
    );


    sceneThree.classList.add(
        "show-scene"
    );


    /*
       Make sure the envelope
       is closed when returning.
    */

    const envelopeWrapper =
        document.getElementById(
            "envelopeWrapper"
        );

    const loveLetter =
        document.getElementById(
            "loveLetter"
        );


    if (envelopeWrapper) {

        envelopeWrapper.classList.remove(
            "opening"
        );

    }


    if (loveLetter) {

        loveLetter.classList.remove(
            "visible"
        );

    }


    /*
       Reset the 5-click system.
    */

    bigHeartClickCount =
        0;

    finalTransitionStarted =
        false;


    /*
       Scroll directly to the envelope.
    */

    setTimeout(
        function () {

            sceneThree.scrollIntoView({
                behavior: "auto",
                block: "start"
            });

        },
        50
    );

}


/* =========================================================
   5-CLICK BIG HEART SYSTEM
========================================================= */

let bigHeartClickCount = 0;

let finalTransitionStarted = false;


/* =========================================================
   RANDOM HEART POSITIONS
========================================================= */

function moveBigHeart() {

    const heartContainer =
        document.getElementById("heartContainer");

    if (!heartContainer) {
        return;
    }


    /*
       Safe area para hindi tuluyang mawala
       ang heart sa screen.
    */

    const positions = [

        {
            x: 18,
            y: 24
        },

        {
            x: 76,
            y: 22
        },

        {
            x: 23,
            y: 72
        },

        {
            x: 75,
            y: 70
        },

        {
            x: 50,
            y: 22
        },

        {
            x: 50,
            y: 75
        },

        {
            x: 28,
            y: 48
        },

        {
            x: 72,
            y: 48
        }

    ];


    /*
       Random position.
       Hindi natin ginagamit yung exact current
       position para laging may movement.
    */

    const currentX =
        parseFloat(
            heartContainer.dataset.x || "50"
        );

    const currentY =
        parseFloat(
            heartContainer.dataset.y || "50"
        );


    let selectedPosition;


    do {

        selectedPosition =
            positions[
                Math.floor(
                    Math.random() *
                    positions.length
                )
            ];

    } while (

        selectedPosition.x === currentX &&
        selectedPosition.y === currentY

    );


    heartContainer.dataset.x =
        selectedPosition.x;

    heartContainer.dataset.y =
        selectedPosition.y;


    heartContainer.style.left =
        selectedPosition.x + "%";

    heartContainer.style.top =
        selectedPosition.y + "%";


    /*
       Cute jump animation every time
       the heart changes location.
    */

    heartContainer.classList.remove(
        "heart-jump"
    );


    void heartContainer.offsetWidth;


    heartContainer.classList.add(
        "heart-jump"
    );

}


/* =========================================================
   SMALL CLICK SPARKLES
========================================================= */

function createSmallClickSparkles() {

    const sceneOne =
        document.getElementById("sceneOne");

    const heartContainer =
        document.getElementById("heartContainer");


    if (
        !sceneOne ||
        !heartContainer
    ) {
        return;
    }


    const rect =
        heartContainer.getBoundingClientRect();


    const symbols = [
        "♡",
        "♥",
        "✦",
        "✧"
    ];


    for (
        let i = 0;
        i < 5;
        i++
    ) {

        const sparkle =
            document.createElement("span");


        sparkle.className =
            "explosion-particle small";


        sparkle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        sparkle.style.left =
            (
                rect.left +
                rect.width / 2
            ) + "px";


        sparkle.style.top =
            (
                rect.top +
                rect.height / 2
            ) + "px";


        sparkle.style.setProperty(
            "--x",
            (
                Math.random() * 100 - 50
            ) + "px"
        );


        sparkle.style.setProperty(
            "--y",
            (
                Math.random() * 100 - 50
            ) + "px"
        );


        sparkle.style.setProperty(
            "--rotation",
            (
                Math.random() * 180 - 90
            ) + "deg"
        );


        sceneOne.appendChild(
            sparkle
        );


        setTimeout(
            function () {

                sparkle.remove();

            },
            1400
        );

    }

}


/* =========================================================
   FINAL HEART EXPLOSION
========================================================= */

function createHeartExplosion() {

    const explosion =
        document.getElementById(
            "heartExplosion"
        );

    const heartContainer =
        document.getElementById(
            "heartContainer"
        );


    if (
        !explosion ||
        !heartContainer
    ) {
        return;
    }


    explosion.innerHTML = "";


    /*
       Explosion ring
    */

    const ring =
        document.createElement("div");


    ring.className =
        "explosion-ring";


    explosion.appendChild(
        ring
    );


    /*
       Cute explosion symbols
    */

    const particles = [

        "♥",
        "♡",
        "❤",
        "💕",
        "💗",
        "💖",
        "🌸",
        "🌷",
        "🌼",
        "✿",
        "❀",
        "✦",
        "✧",
        "♡",
        "♥",
        "🌸",
        "💕",
        "✿",
        "❤",
        "🌷",
        "♡",
        "♥",
        "✦",
        "🌼",
        "💗",
        "❀",
        "💕",
        "♡",
        "🌸",
        "♥"

    ];


    /*
       Create particles around
       the center of the screen.
    */

    particles.forEach(
        function (symbol, index) {

            const particle =
                document.createElement("span");


            particle.className =
                "explosion-particle";


            /*
               Random size classes
            */

            const randomSize =
                Math.random();


            if (randomSize < 0.25) {

                particle.classList.add(
                    "small"
                );

            }

            else if (
                randomSize > 0.75
            ) {

                particle.classList.add(
                    "big"
                );

            }


            particle.textContent =
                symbol;


            /*
               Start exactly from
               center of the scene.
            */

            particle.style.left =
                "50%";

            particle.style.top =
                "50%";


            /*
               Circular-ish explosion.
            */

            const angle =
                (
                    index /
                    particles.length
                ) *
                Math.PI *
                2;


            const distance =
                150 +
                Math.random() * 260;


            const x =
                Math.cos(angle) *
                distance;


            const y =
                Math.sin(angle) *
                distance;


            particle.style.setProperty(
                "--x",
                x + "px"
            );


            particle.style.setProperty(
                "--y",
                y + "px"
            );


            particle.style.setProperty(
                "--rotation",
                (
                    Math.random() *
                    360 -
                    180
                ) + "deg"
            );


            /*
               Slightly different timing
               para mas natural ang explosion.
            */

            particle.style.animationDelay =
                (
                    Math.random() * 0.12
                ) + "s";


            explosion.appendChild(
                particle
            );

        }
    );

}


/* =========================================================
   FINAL TRANSITION TO DASHBOARD
========================================================= */

function finishBigHeartScene() {

    if (finalTransitionStarted) {
        return;
    }


    finalTransitionStarted = true;


    const sceneOne =
        document.getElementById("sceneOne");


    if (!sceneOne) {
        return;
    }


    /*
       Add final animation.
    */

    sceneOne.classList.add(
        "final-heart-click"
    );


    /*
       Start explosion.
    */

    createHeartExplosion();


    /*
       Wait for the heart explosion
       before going to dashboard.
    */

    setTimeout(
        function () {

            window.location.href =
                "dashboard.html";

        },
        1250
    );

}


/* =========================================================
   BIG HEART CLICK
========================================================= */

function handleBigHeartClick() {

    if (finalTransitionStarted) {
        return;
    }


    bigHeartClickCount++;


    /*
       First four clicks:
       move heart + sparkle.
    */

    if (
        bigHeartClickCount < 5
    ) {

        moveBigHeart();

        createSmallClickSparkles();

        return;

    }


    /*
       5TH CLICK
    */

    finishBigHeartScene();

}


/* =========================================================
   SCENE 1 → ENVELOPE
   KEPT FOR COMPATIBILITY
========================================================= */

function showLetterScene() {

    /*
       If another part of the page
       calls showLetterScene(), require
       the 5 clicks first.
    */

    if (
        bigHeartClickCount < 5
    ) {

        return;

    }


    finishBigHeartScene();

}


/* =========================================================
   OPEN ENVELOPE
========================================================= */

function openLetter() {

    const envelopeWrapper =
        document.getElementById(
            "envelopeWrapper"
        );

    const loveLetter =
        document.getElementById(
            "loveLetter"
        );


    if (
        !envelopeWrapper ||
        !loveLetter
    ) {
        return;
    }


    if (
        envelopeWrapper.classList.contains(
            "opening"
        )
    ) {
        return;
    }


    envelopeWrapper.classList.add(
        "opening"
    );


    setTimeout(
        function () {

            loveLetter.classList.add(
                "visible"
            );

        },
        650
    );

}


/* =========================================================
   CLOSE LOVE LETTER
========================================================= */

function closeLetter() {

    const envelopeWrapper =
        document.getElementById(
            "envelopeWrapper"
        );

    const loveLetter =
        document.getElementById(
            "loveLetter"
        );


    if (
        !envelopeWrapper ||
        !loveLetter
    ) {
        return;
    }


    loveLetter.classList.remove(
        "visible"
    );


    setTimeout(
        function () {

            envelopeWrapper.classList.remove(
                "opening"
            );

        },
        450
    );

}


/* =========================================================
   3D SWIPE GIF CAROUSEL
========================================================= */

const photos = [

    "cat.gif",
    "cat2.gif",
    "cat3.gif",
    "cat4.gif",
    "cat5.gif",
    "cat6.gif",
    "cat8.gif",
    "cat9.gif",
    "cat10.gif",
    "cat11.gif"

];


let currentPhoto = 0;

let carouselBusy = false;

let touchStartX = 0;

let mouseStartX = 0;

let mouseDown = false;


/* =========================================================
   GET PHOTO INDEX
========================================================= */

function getPhotoIndex(index) {

    if (index < 0) {

        return photos.length - 1;

    }


    if (index >= photos.length) {

        return 0;

    }


    return index;

}


/* =========================================================
   CREATE ALL CAROUSEL CARDS
========================================================= */

function createCarouselCards() {

    const stage =
        document.getElementById(
            "carouselStage"
        );


    if (!stage) {
        return;
    }


    stage.innerHTML = "";


    photos.forEach(
        function (photo, index) {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "carousel-card";


            card.dataset.index =
                index;


            const image =
                document.createElement(
                    "img"
                );


            image.src =
                "images/" + photo;


            image.alt = "";

            image.draggable =
                false;


            image.onerror =
                function () {

                    if (
                        image.dataset.fallback !==
                        "true"
                    ) {

                        image.dataset.fallback =
                            "true";

                        image.src =
                            photo;

                    }

                };


            card.appendChild(
                image
            );


            stage.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   UPDATE CARD POSITIONS
========================================================= */

function updateCarouselPositions() {

    const cards =
        document.querySelectorAll(
            ".carousel-card"
        );


    cards.forEach(
        function (card) {

            const index =
                Number(
                    card.dataset.index
                );


            card.classList.remove(

                "position-main",
                "position-prev",
                "position-next",
                "position-hidden-left",
                "position-hidden-right"

            );


            const previousIndex =
                getPhotoIndex(
                    currentPhoto - 1
                );


            const nextIndex =
                getPhotoIndex(
                    currentPhoto + 1
                );


            if (
                index === currentPhoto
            ) {

                card.classList.add(
                    "position-main"
                );

            }

            else if (
                index === previousIndex
            ) {

                card.classList.add(
                    "position-prev"
                );

            }

            else if (
                index === nextIndex
            ) {

                card.classList.add(
                    "position-next"
                );

            }

            else {

                let distance =
                    index -
                    currentPhoto;


                const total =
                    photos.length;


                if (
                    distance >
                    total / 2
                ) {

                    distance -= total;

                }


                if (
                    distance <
                    -total / 2
                ) {

                    distance += total;

                }


                if (
                    distance < 0
                ) {

                    card.classList.add(
                        "position-hidden-left"
                    );

                }

                else {

                    card.classList.add(
                        "position-hidden-right"
                    );

                }

            }

        }
    );

}


/* =========================================================
   UPDATE DOTS
========================================================= */

function updateDots() {

    const dots =
        document.querySelectorAll(
            ".carousel-dot"
        );


    dots.forEach(
        function (dot, index) {

            if (
                index === currentPhoto
            ) {

                dot.classList.add(
                    "active"
                );

            }

            else {

                dot.classList.remove(
                    "active"
                );

            }

        }
    );

}


/* =========================================================
   RENDER CAROUSEL
========================================================= */

function renderCarousel() {

    updateCarouselPositions();

    updateDots();

}


/* =========================================================
   NEXT PHOTO
========================================================= */

function nextPhoto() {

    if (carouselBusy) {
        return;
    }


    carouselBusy = true;


    currentPhoto =
        getPhotoIndex(
            currentPhoto + 1
        );


    renderCarousel();


    setTimeout(
        function () {

            carouselBusy = false;

        },
        550
    );

}


/* =========================================================
   PREVIOUS PHOTO
========================================================= */

function prevPhoto() {

    if (carouselBusy) {
        return;
    }


    carouselBusy = true;


    currentPhoto =
        getPhotoIndex(
            currentPhoto - 1
        );


    renderCarousel();


    setTimeout(
        function () {

            carouselBusy = false;

        },
        550
    );

}


/* =========================================================
   GO TO SPECIFIC PHOTO
========================================================= */

function goToPhoto(index) {

    if (carouselBusy) {
        return;
    }


    if (
        index === currentPhoto
    ) {
        return;
    }


    currentPhoto =
        getPhotoIndex(index);


    renderCarousel();

}


/* =========================================================
   TOUCH START
========================================================= */

function handleTouchStart(event) {

    if (
        !event.touches ||
        !event.touches.length
    ) {
        return;
    }


    touchStartX =
        event.touches[0].clientX;

}


/* =========================================================
   TOUCH END
========================================================= */

function handleTouchEnd(event) {

    if (
        !event.changedTouches ||
        !event.changedTouches.length
    ) {
        return;
    }


    const touchEndX =
        event.changedTouches[0].clientX;


    const difference =
        touchStartX -
        touchEndX;


    const minimumSwipe =
        50;


    if (
        Math.abs(difference) <
        minimumSwipe
    ) {
        return;
    }


    if (
        difference > 0
    ) {

        nextPhoto();

    }

    else {

        prevPhoto();

    }

}


/* =========================================================
   MOUSE DOWN
========================================================= */

function handleMouseDown(event) {

    mouseDown = true;

    mouseStartX =
        event.clientX;

}


/* =========================================================
   MOUSE UP
========================================================= */

function handleMouseUp(event) {

    if (!mouseDown) {
        return;
    }


    mouseDown = false;


    const difference =
        mouseStartX -
        event.clientX;


    const minimumSwipe =
        50;


    if (
        Math.abs(difference) <
        minimumSwipe
    ) {
        return;
    }


    if (
        difference > 0
    ) {

        nextPhoto();

    }

    else {

        prevPhoto();

    }

}


/* =========================================================
   MOUSE LEAVE
========================================================= */

function handleMouseLeave() {

    mouseDown = false;

}


/* =========================================================
   CREATE HEART CURSOR
========================================================= */

function initializeHeartCursor() {

    let heartCursor =
        document.getElementById(
            "heartCursor"
        );


    if (!heartCursor) {

        heartCursor =
            document.createElement(
                "div"
            );


        heartCursor.id =
            "heartCursor";


        heartCursor.className =
            "heart-cursor";


        const heart =
            document.createElement(
                "span"
            );


        heart.textContent =
            "♥";


        heartCursor.appendChild(
            heart
        );


        document.body.appendChild(
            heartCursor
        );

    }


    return heartCursor;

}


/* =========================================================
   PORORO CURSOR + HEART CURSOR
========================================================= */

function initializePororoCursor() {

    const pororoCursor =
        document.getElementById(
            "pororoCursor"
        );


    const heartCursor =
        initializeHeartCursor();


    if (!pororoCursor) {
        return;
    }


    pororoCursor.style.left =
        "-100px";

    pororoCursor.style.top =
        "-100px";


    heartCursor.style.left =
        "-100px";

    heartCursor.style.top =
        "-100px";


    pororoCursor.addEventListener(
        "error",
        function () {

            console.error(
                "Pororo cursor image could not be loaded. " +
                "Check the filename: purorort.jpg - Edited.png"
            );


            pororoCursor.style.display =
                "none";

        }
    );


    document.addEventListener(
        "mousemove",
        function (event) {

            const x =
                event.clientX;


            const y =
                event.clientY;


            pororoCursor.style.left =
                x + "px";


            pororoCursor.style.top =
                y + "px";


            heartCursor.style.left =
                x + "px";


            heartCursor.style.top =
                y + "px";

        }
    );

}


/* =========================================================
   CURSOR MODE BASED ON SCROLL
========================================================= */

function updateCursorMode() {

    const songSection =
        document.getElementById(
            "songSection"
        );


    if (!songSection) {
        return;
    }


    const scrollPosition =
        window.scrollY;


    const songTop =
        songSection.offsetTop;


    const triggerPoint =
        songTop -
        (window.innerHeight * 0.45);


    if (
        scrollPosition >=
        triggerPoint
    ) {

        document.body.classList.add(
            "cursor-heart-mode"
        );

    }

    else {

        document.body.classList.remove(
            "cursor-heart-mode"
        );

    }

}


window.addEventListener(
    "scroll",
    updateCursorMode,
    {
        passive: true
    }
);


/* =========================================================
   HEART CURSOR TRAIL
========================================================= */

let lastHeartTime = 0;


document.addEventListener(
    "mousemove",
    function (event) {

        const now =
            Date.now();


        if (
            now - lastHeartTime <
            100
        ) {
            return;
        }


        lastHeartTime =
            now;


        const heart =
            document.createElement(
                "span"
            );


        heart.className =
            "cursor-heart";


        const hearts = [

            "♥",
            "♡",
            "❤",
            "💕"

        ];


        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];


        heart.style.left =
            event.clientX + "px";


        heart.style.top =
            event.clientY + "px";


        const moveX =
            (
                Math.random() * 30 -
                15
            ) + "px";


        heart.style.setProperty(
            "--move-x",
            moveX
        );


        heart.style.fontSize =
            (
                10 +
                Math.random() * 8
            ) + "px";


        document.body.appendChild(
            heart
        );


        setTimeout(
            function () {

                heart.remove();

            },
            900
        );

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
           Check first if the page was opened
           from Notes using #sceneThree.
        */

        checkReturnToEnvelope();


        initializePororoCursor();

        updateCursorMode();


        /* =================================================
           CAROUSEL
        ================================================= */

        const carousel =
            document.getElementById(
                "carousel"
            );


        const dotsContainer =
            document.getElementById(
                "carouselDots"
            );


        const previousButton =
            document.getElementById(
                "carouselPrev"
            );


        const nextButton =
            document.getElementById(
                "carouselNext"
            );


        if (
            !carousel ||
            !dotsContainer
        ) {
            return;
        }


        createCarouselCards();


        /* =================================================
           CREATE DOTS
        ================================================= */

        photos.forEach(
            function (_, index) {

                const dot =
                    document.createElement(
                        "button"
                    );


                dot.type =
                    "button";


                dot.className =
                    "carousel-dot";


                dot.setAttribute(
                    "aria-label",
                    "Photo " +
                    (index + 1)
                );


                dot.addEventListener(
                    "click",
                    function () {

                        goToPhoto(index);

                    }
                );


                dotsContainer.appendChild(
                    dot
                );

            }
        );


        /* =================================================
           PREVIOUS
        ================================================= */

        if (previousButton) {

            previousButton.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                    prevPhoto();

                }
            );

        }


        /* =================================================
           NEXT
        ================================================= */

        if (nextButton) {

            nextButton.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                    nextPhoto();

                }
            );

        }


        /* =================================================
           TOUCH
        ================================================= */

        carousel.addEventListener(
            "touchstart",
            handleTouchStart,
            {
                passive: true
            }
        );


        carousel.addEventListener(
            "touchend",
            handleTouchEnd,
            {
                passive: true
            }
        );


        /* =================================================
           MOUSE DRAG
        ================================================= */

        carousel.addEventListener(
            "mousedown",
            handleMouseDown
        );


        carousel.addEventListener(
            "mouseup",
            handleMouseUp
        );


        carousel.addEventListener(
            "mouseleave",
            handleMouseLeave
        );


        /* =================================================
           INITIAL RENDER
        ================================================= */

        renderCarousel();

    }
);


/* =========================================================
   TOUCH DEVICES
========================================================= */

if (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0
) {

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            const pororoCursor =
                document.getElementById(
                    "pororoCursor"
                );


            const heartCursor =
                document.getElementById(
                    "heartCursor"
                );


            if (pororoCursor) {

                pororoCursor.style.display =
                    "none";

            }


            if (heartCursor) {

                heartCursor.style.display =
                    "none";

            }

        }
    );

}