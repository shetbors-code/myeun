/* =========================================================
   CLICKME.JS
   OPTIMIZED MASSIVE FLOWER EFFECT — 5TH CLICK
========================================================= */


/* =========================================================
   VARIABLES
========================================================= */

let bigHeartClickCount = 0;

let finalTransitionStarted = false;


/* =========================================================
   FLOWER FILES
========================================================= */

const flowerImages = [

    "bulaklak.jpg - Edited.png",

    "bulaklak2.jpg - Edited.png",

    "bulaklak3.jpg - Edited.png",

    "bulaklak4.jpg - Edited.png",

    "bulaklak5.jpg - Edited.png",

    "bulaklak6.jpg - Edited.png"

];


/* =========================================================
   FLOWER INDEX
========================================================= */

let flowerIndex = 0;


function getNextFlower() {

    const flower =
        flowerImages[flowerIndex];


    flowerIndex++;


    if (
        flowerIndex >=
        flowerImages.length
    ) {

        flowerIndex = 0;

    }


    return flower;

}


/* =========================================================
   PRELOAD FLOWERS
========================================================= */

function preloadFlowers() {

    flowerImages.forEach(
        function (src) {

            const img =
                new Image();


            img.src =
                src;


            img.onload =
                function () {

                    console.log(
                        "Flower loaded:",
                        src
                    );

                };


            img.onerror =
                function () {

                    console.error(
                        "FLOWER NOT FOUND:",
                        src
                    );

                };

        }
    );

}


/* =========================================================
   MOVE HEART
========================================================= */

function moveBigHeart() {

    const heartContainer =
        document.getElementById(
            "heartContainer"
        );


    if (!heartContainer) {

        return;

    }


    const positions = [

        {
            left: 50,
            top: 50
        },

        {
            left: 30,
            top: 38
        },

        {
            left: 70,
            top: 40
        },

        {
            left: 38,
            top: 65
        },

        {
            left: 65,
            top: 65
        }

    ];


    const position =
        positions[
            Math.min(
                bigHeartClickCount,
                positions.length - 1
            )
        ];


    heartContainer.style.left =
        position.left + "%";


    heartContainer.style.top =
        position.top + "%";


    /*
       Restart jump animation
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
   SMALL FLOWERS
   FIRST 4 CLICKS
========================================================= */

function createSmallClickSparkles() {

    const heartContainer =
        document.getElementById(
            "heartContainer"
        );


    if (!heartContainer) {

        return;

    }


    const rect =
        heartContainer.getBoundingClientRect();


    /*
       Create 6 small flowers
    */

    for (
        let i = 0;
        i < 6;
        i++
    ) {

        const flower =
            document.createElement(
                "img"
            );


        flower.className =
            "flower-click-particle";


        flower.src =
            getNextFlower();


        flower.alt =
            "";


        flower.draggable =
            false;


        /*
           Start from center
           of heart.
        */

        flower.style.left =
            (
                rect.left +
                rect.width / 2
            ) + "px";


        flower.style.top =
            (
                rect.top +
                rect.height / 2
            ) + "px";


        /*
           CSS uses --x and --y
        */

        flower.style.setProperty(
            "--x",
            (
                Math.random() *
                220 -
                110
            ) + "px"
        );


        flower.style.setProperty(
            "--y",
            (
                Math.random() *
                220 -
                110
            ) + "px"
        );


        flower.style.setProperty(
            "--rotation",
            (
                Math.random() *
                360 -
                180
            ) + "deg"
        );


        flower.style.animationDelay =
            (
                Math.random() *
                0.08
            ) + "s";


        document.body.appendChild(
            flower
        );


        setTimeout(
            function () {

                flower.remove();

            },
            1200
        );

    }

}


/* =========================================================
   MASSIVE BUT OPTIMIZED FLOWER EXPLOSION
   5TH CLICK
========================================================= */

function createHeartExplosion() {

    const explosion =
        document.getElementById(
            "heartExplosion"
        );


    if (!explosion) {

        console.error(
            "heartExplosion element not found."
        );

        return;

    }


    /*
       Move explosion directly to body
    */

    if (
        explosion.parentElement !==
        document.body
    ) {

        document.body.appendChild(
            explosion
        );

    }


    explosion.innerHTML = "";


    explosion.classList.add(
        "active"
    );


    /* =====================================================
       FLASH
    ===================================================== */

    const flash =
        document.createElement(
            "div"
        );


    flash.className =
        "flower-explosion-flash";


    explosion.appendChild(
        flash
    );


    setTimeout(
        function () {

            flash.remove();

        },
        700
    );


    /* =====================================================
       EXPLOSION RINGS
       ONLY 2 FOR BETTER PERFORMANCE
    ===================================================== */

    for (
        let i = 0;
        i < 2;
        i++
    ) {

        const ring =
            document.createElement(
                "div"
            );


        ring.className =
            "explosion-ring";


        ring.style.width =
            (
                80 +
                i * 120
            ) + "px";


        ring.style.height =
            (
                80 +
                i * 120
            ) + "px";


        ring.style.animationDelay =
            (
                i * 0.1
            ) + "s";


        explosion.appendChild(
            ring
        );


        setTimeout(
            function () {

                ring.remove();

            },
            1500
        );

    }


    /* =====================================================
       BIG FLOWER BURST
       
       80 FLOWERS ONLY
       BUT VERY LARGE
    ===================================================== */

    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const flower =
            document.createElement(
                "img"
            );


        flower.className =
            "flower-burst-particle";


        flower.src =
            getNextFlower();


        flower.alt =
            "";


        flower.draggable =
            false;


        /* =================================================
           RANDOM ANGLE
        ================================================= */

        const angle =
            Math.random() *
            Math.PI *
            2;


        /* =================================================
           LARGE SPREAD
        ================================================= */

        const distance =
            150 +
            Math.random() *
            750;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        flower.style.setProperty(
            "--burst-x",
            x + "px"
        );


        flower.style.setProperty(
            "--burst-y",
            y + "px"
        );


        /* =================================================
           RANDOM ROTATION
        ================================================= */

        flower.style.setProperty(
            "--burst-rotate",
            (
                Math.random() *
                1600 -
                800
            ) + "deg"
        );


        /* =================================================
           SCALE
        ================================================= */

        flower.style.setProperty(
            "--burst-scale",
            (
                0.8 +
                Math.random() *
                0.8
            )
        );


        /* =================================================
           HUGE FLOWER SIZE
        ================================================= */

        const size =
            80 +
            Math.random() *
            100;


        flower.style.width =
            size + "px";


        flower.style.height =
            size + "px";


        /* =================================================
           SMALL RANDOM DELAY
        ================================================= */

        flower.style.animationDelay =
            (
                Math.random() *
                0.18
            ) + "s";


        explosion.appendChild(
            flower
        );


        setTimeout(
            function () {

                flower.remove();

            },
            3000
        );

    }


    /* =====================================================
       BIG FLOWER RAIN
       
       50 FLOWERS ONLY
       BUT LARGE
    ===================================================== */

    for (
        let i = 0;
        i < 50;
        i++
    ) {

        createRainFlower(
            explosion,
            i % 2 === 0
        );

    }

}


/* =========================================================
   CREATE HUGE RAIN FLOWER
========================================================= */

function createRainFlower(
    explosion,
    extra
) {

    const flower =
        document.createElement(
            "img"
        );


    flower.className =
        "flower-rain-particle";


    if (extra) {

        flower.classList.add(
            "extra"
        );

    }


    flower.src =
        getNextFlower();


    flower.alt =
        "";


    flower.draggable =
        false;


    /* =====================================================
       RANDOM HORIZONTAL POSITION
    ===================================================== */

    flower.style.left =
        (
            Math.random() *
            105 -
            2.5
        ) + "vw";


    /* =====================================================
       RANDOM STARTING POSITION
    ===================================================== */

    flower.style.top =
        (
            -20 -
            Math.random() *
            100
        ) + "vh";


    /* =====================================================
       VERY LARGE FLOWERS
    ===================================================== */

    let size;


    if (extra) {

        size =
            65 +
            Math.random() *
            70;

    } else {

        size =
            80 +
            Math.random() *
            90;

    }


    flower.style.width =
        size + "px";


    flower.style.height =
        size + "px";


    /* =====================================================
       SIDE-TO-SIDE MOVEMENT
    ===================================================== */

    flower.style.setProperty(
        "--rain-x",
        (
            Math.random() *
            700 -
            350
        ) + "px"
    );


    /* =====================================================
       RANDOM ROTATION
    ===================================================== */

    flower.style.setProperty(
        "--rain-rotate",
        (
            Math.random() *
            1600 -
            800
        ) + "deg"
    );


    /* =====================================================
       FALL SPEED
    ===================================================== */

    const duration =
        2 +
        Math.random() *
        1.5;


    flower.style.setProperty(
        "--duration",
        duration + "s"
    );


    /* =====================================================
       SMALL RANDOM DELAY
    ===================================================== */

    flower.style.animationDelay =
        (
            Math.random() *
            0.7
        ) + "s";


    explosion.appendChild(
        flower
    );


    setTimeout(
        function () {

            flower.remove();

        },
        4200
    );

}


/* =========================================================
   FINAL SCENE
========================================================= */

function finishBigHeartScene() {

    if (finalTransitionStarted) {

        return;

    }


    finalTransitionStarted =
        true;


    const sceneOne =
        document.getElementById(
            "sceneOne"
        );


    /*
       Remove shimmer on 5th click
    */

    const bigHeart =
        document.getElementById(
            "bigHeart"
        );


    if (bigHeart) {

        bigHeart.classList.remove(
            "shimmering"
        );

        bigHeart.style.pointerEvents =
            "none";

    }


    /*
       Create flower explosion
    */

    createHeartExplosion();


    /*
       Final heart animation
    */

    if (sceneOne) {

        sceneOne.classList.add(
            "final-heart-click"
        );

    }


    /*
       Hide click text
    */

    const clickText =
        document.getElementById(
            "clickText"
        );


    if (clickText) {

        clickText.style.opacity =
            "0";

    }


    /*
       Dashboard
    */

    setTimeout(
        function () {

            window.location.href =
                "dashboard.html";

        },
        3500
    );

}


/* =========================================================
   BIG HEART CLICK
========================================================= */

function handleBigHeartClick() {

    /*
       Prevent additional clicks
    */

    if (finalTransitionStarted) {

        return;

    }


    bigHeartClickCount++;


    /* =====================================================
       FIRST 4 CLICKS
    ===================================================== */

    if (
        bigHeartClickCount < 5
    ) {


        /* -----------------------------------------------
           SHIMMER ON
        ----------------------------------------------- */

        const bigHeart =
            document.getElementById(
                "bigHeart"
            );


        if (bigHeart) {

            bigHeart.classList.add(
                "shimmering"
            );


            /*
               Clear previous timer
            */

            clearTimeout(
                bigHeart.shimmerTimeout
            );


            /*
               Keep shimmer while moving
            */

            bigHeart.shimmerTimeout =
                setTimeout(
                    function () {

                        bigHeart.classList.remove(
                            "shimmering"
                        );

                    },
                    1000
                );

        }


        /* -----------------------------------------------
           MOVE HEART
        ----------------------------------------------- */

        moveBigHeart();


        /* -----------------------------------------------
           SMALL FLOWERS
        ----------------------------------------------- */

        createSmallClickSparkles();


        return;

    }


    /* =====================================================
       FIFTH CLICK
    ===================================================== */

    finishBigHeartScene();

}


/* =========================================================
   PORORO CURSOR
========================================================= */

function initializePororoCursor() {

    const pororoCursor =
        document.getElementById(
            "pororoCursor"
        );


    const heartCursor =
        document.getElementById(
            "heartCursor"
        );


    if (
        !pororoCursor ||
        !heartCursor
    ) {

        return;

    }


    /*
       Hide at first
    */

    pororoCursor.style.left =
        "-100px";


    pororoCursor.style.top =
        "-100px";


    heartCursor.style.left =
        "-100px";


    heartCursor.style.top =
        "-100px";


    /*
       Follow mouse
    */

    document.addEventListener(
        "mousemove",
        function (event) {

            pororoCursor.style.left =
                event.clientX + "px";


            pororoCursor.style.top =
                event.clientY + "px";


            heartCursor.style.left =
                event.clientX + "px";


            heartCursor.style.top =
                event.clientY + "px";

        }
    );

}


/* =========================================================
   PORORO ERROR HANDLING
========================================================= */

function initializeCursorErrorHandling() {

    const pororoCursor =
        document.getElementById(
            "pororoCursor"
        );


    if (!pororoCursor) {

        return;

    }


    pororoCursor.addEventListener(
        "error",
        function () {

            console.error(
                "Pororo cursor image not found."
            );


            pororoCursor.style.display =
                "none";

        }
    );

}


/* =========================================================
   MOBILE CURSOR
========================================================= */

function disableCustomCursorOnMobile() {

    if (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
    ) {

        const pororoCursor =
            document.getElementById(
                "pororoCursor"
            );


        const heartCursor =
            document.getElementById(
                "heartCursor"
            );


        const cursorTracker =
            document.getElementById(
                "cursorTracker"
            );


        if (pororoCursor) {

            pororoCursor.style.display =
                "none";

        }


        if (heartCursor) {

            heartCursor.style.display =
                "none";

        }


        if (cursorTracker) {

            cursorTracker.style.display =
                "none";

        }

    }

}


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
           Preload all flowers
        */

        preloadFlowers();


        /*
           Initialize cursor
        */

        initializePororoCursor();


        initializeCursorErrorHandling();


        disableCustomCursorOnMobile();

    }
);