/* =========================================================
   PIN LOGIN
========================================================= */

let pin = "";

const correctPin = "9426";


/* =========================================================
   PIN FUNCTIONS
========================================================= */

function addNumber(number) {

    if (pin.length < 4) {

        pin += number;

        updateDisplay();

    }

}


/* =========================================================
   REMOVE LAST NUMBER
========================================================= */

function removeNumber() {

    pin = pin.slice(0, -1);

    updateDisplay();

}


/* =========================================================
   CLEAR PIN
========================================================= */

function clearPin() {

    pin = "";

    updateDisplay();

    const error =
        document.getElementById("error");

    if (error) {

        error.style.display = "none";

    }

}


/* =========================================================
   UPDATE PIN DOTS
========================================================= */

function updateDisplay() {

    const dots =
        document.querySelectorAll(
            ".pin-display span"
        );

    dots.forEach(function (dot, index) {

        if (index < pin.length) {

            dot.classList.add("filled");

        } else {

            dot.classList.remove("filled");

        }

    });

}


/* =========================================================
   LOGIN
========================================================= */

function login() {

    const error =
        document.getElementById("error");

    if (pin === correctPin) {

       window.location.href = "clickme.html";

    } else {

        if (error) {

            error.style.display = "block";

        }

        pin = "";

        updateDisplay();

    }

}


/* =========================================================
   PORORO DIALOGUE
   ONLY PORORO CALLS THIS FUNCTION
========================================================= */

function showPororoMessage() {

    const dialogue =
        document.getElementById(
            "pororoDialogue"
        );

    if (dialogue) {

        dialogue.classList.add("show");

    }

}


/* =========================================================
   CLOSE PORORO DIALOGUE
========================================================= */

function closePororoMessage() {

    const dialogue =
        document.getElementById(
            "pororoDialogue"
        );

    if (dialogue) {

        dialogue.classList.remove("show");

    }

}


/* =========================================================
   CLOSE DIALOGUE WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const dialogue =
            document.getElementById(
                "pororoDialogue"
            );

        const content =
            document.querySelector(
                ".dialogue-content"
            );

        if (!dialogue || !content) {

            return;

        }


        if (
            dialogue.classList.contains("show") &&
            event.target === dialogue
        ) {

            closePororoMessage();

        }

    }
);


/* =========================================================
   PORORO CUSTOM MOUSE CURSOR
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const pororoCursor =
            document.getElementById(
                "pororoCursor"
            );

        if (!pororoCursor) {

            return;

        }


        /* MOVE PORORO WITH MOUSE */

        document.addEventListener(
            "mousemove",
            function (event) {

                pororoCursor.style.left =
                    event.clientX + "px";

                pororoCursor.style.top =
                    event.clientY + "px";

            }
        );


        /* ONLY ACTUAL CLICKABLE ELEMENTS */

        const clickableElements =
            document.querySelectorAll(
                "button, .pororo-icon"
            );

        clickableElements.forEach(
            function (element) {

                element.addEventListener(
                    "mouseenter",
                    function () {

                        document.body.classList.add(
                            "cursor-hover"
                        );

                    }
                );


                element.addEventListener(
                    "mouseleave",
                    function () {

                        document.body.classList.remove(
                            "cursor-hover"
                        );

                    }
                );

            }
        );


        /* IF PORORO IMAGE CANNOT LOAD */

        pororoCursor.addEventListener(
            "error",
            function () {

                console.warn(
                    "Pororo cursor image was not found. " +
                    "Make sure 'purorort.jpg - Edited.png' " +
                    "is in the same folder as index.html."
                );

                pororoCursor.style.display =
                    "none";

                document.body.style.cursor =
                    "auto";

            }
        );

    }
);


/* =========================================================
   CUTE HEART TRAIL
========================================================= */

let lastHeartTime = 0;


document.addEventListener(
    "mousemove",
    function (event) {

        const now =
            Date.now();


        if (
            now - lastHeartTime < 100
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