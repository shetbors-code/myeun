/* =========================================================
   AUDIO CONTROLS
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const reminderAudios =
            document.querySelectorAll(
                ".reminder-audio"
            );


        reminderAudios.forEach(
            function (audio) {

                audio.addEventListener(
                    "play",
                    function () {

                        reminderAudios.forEach(
                            function (otherAudio) {

                                if (
                                    otherAudio !== audio
                                ) {

                                    otherAudio.pause();

                                }

                            }
                        );

                    }
                );

            }
        );


        document.addEventListener(
            "visibilitychange",
            function () {

                if (document.hidden) {

                    reminderAudios.forEach(
                        function (audio) {

                            if (!audio.paused) {

                                audio.pause();

                            }

                        }
                    );

                }

            }
        );

    }
);


/* =========================================================
   HEART CURSOR
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const heartCursor =
            document.getElementById(
                "heartCursor"
            );


        if (!heartCursor) {
            return;
        }


        /*
           Start cursor outside the screen.
        */

        heartCursor.style.left =
            "-100px";

        heartCursor.style.top =
            "-100px";


        /*
           Move heart cursor.
        */

        document.addEventListener(
            "mousemove",
            function (event) {

                heartCursor.style.left =
                    event.clientX + "px";

                heartCursor.style.top =
                    event.clientY + "px";

            }
        );


        /*
           Make the cursor slightly bigger
           when hovering clickable elements.
        */

        const clickableElements =
            document.querySelectorAll(
                "a, button, audio, input, select"
            );


        clickableElements.forEach(
            function (element) {

                element.addEventListener(
                    "mouseenter",
                    function () {

                        heartCursor.classList.add(
                            "cursor-hover"
                        );

                    }
                );


                element.addEventListener(
                    "mouseleave",
                    function () {

                        heartCursor.classList.remove(
                            "cursor-hover"
                        );

                    }
                );

            }
        );

    }
);


/* =========================================================
   HEART CURSOR HOVER
========================================================= */

const heartCursorStyle =
    document.createElement("style");


heartCursorStyle.textContent = `

    .heart-cursor.cursor-hover {
        transform:
            translate(-50%, -50%)
            rotate(-8deg)
            scale(1.22);
    }

`;


document.head.appendChild(
    heartCursorStyle
);


/* =========================================================
   CUTE HEART TRAIL
========================================================= */

let lastHeartTime = 0;


document.addEventListener(
    "mousemove",
    function (event) {

        /*
           Don't create too many hearts.
        */

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


        /*
           Create heart.
        */

        const heart =
            document.createElement(
                "span"
            );


        heart.className =
            "cursor-heart";


        /*
           Random heart symbols.
        */

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


        /*
           Position at cursor.
        */

        heart.style.left =
            event.clientX + "px";


        heart.style.top =
            event.clientY + "px";


        /*
           Random horizontal movement.
        */

        const moveX =
            (
                Math.random() * 30 -
                15
            ) + "px";


        heart.style.setProperty(
            "--move-x",
            moveX
        );


        /*
           Random size.
        */

        heart.style.fontSize =
            (
                10 +
                Math.random() * 8
            ) + "px";


        document.body.appendChild(
            heart
        );


        /*
           Remove after animation.
        */

        setTimeout(
            function () {

                heart.remove();

            },
            900
        );

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

            const heartCursor =
                document.getElementById(
                    "heartCursor"
                );


            if (heartCursor) {

                heartCursor.style.display =
                    "none";

            }

        }
    );

}