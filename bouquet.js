/* =========================================================
   HEART CURSOR
========================================================= */

const heartCursor =
    document.getElementById(
        "heartCursor"
    );


document.addEventListener(
    "mousemove",
    function (event) {

        heartCursor.style.left =
            event.clientX + "px";

        heartCursor.style.top =
            event.clientY + "px";

    }
);


/* =========================================================
   HEART TRAIL
========================================================= */

let lastHeartTime = 0;


document.addEventListener(
    "mousemove",
    function (event) {

        const now =
            Date.now();


        if (
            now - lastHeartTime <
            90
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


        heart.style.fontSize =
            (
                9 +
                Math.random() * 7
            ) + "px";


        const moveX =
            (
                Math.random() * 30 -
                15
            ) + "px";


        heart.style.setProperty(
            "--move-x",
            moveX
        );


        document.body.appendChild(
            heart
        );


        setTimeout(
            function () {

                heart.remove();

            },
            950
        );

    }
);


/* =========================================================
   ROSE MESSAGES
========================================================= */

const roseMessages = {

    blue: {

        flower: "💙",

        title:
            "The Blue Rose",

        text:
            "You are one of a kind, someone I could never compare to anyone else. Your personality, your little quirks, and the way you see things make you special in ways you probably don't even realize. You have this kind of magic that makes ordinary moments feel extraordinary. I hope you never lose the things that make you YOU."
    },


    red: {

        flower: "❤️",

        title:
            "The Red Rose",

        text:
            "This rose represents your bravery. I know life isn't always easy, and there are moments when problems come one after another. But despite everything, you continue to stand strong and face whatever comes your way. I'm so proud of the person you are. Even when things get difficult, I hope you never forget how strong and capable you are."

    },


    white: {

        flower: "🤍",

        title:
            "The White Rose",

        text:
            "This reminds me of the sincerity you carry. You don't have to pretend to be someone else just to be loved. I appreciate the real you, even on your not-so-good days, even when you're tired, quiet, or not in the mood to smile. I want you to know that you don't always have to be okay around me. You can be yourself, and that will always be enough."

    },


    pink: {

        flower: "🩷",

        title:
            "The Pink Rose",

        text:
            "I know you're sensitive, and sometimes even the smallest things can make you feel a lot. You get tired, you overthink, and there are moments when things become too much for you. But I hope you never see your sensitivity as a weakness. It's part of what makes you genuine. Your ability to feel deeply is also one of the reasons your heart is so beautiful. You deserve the same gentleness you give to others."

    },


    yellow: {

        flower: "💛",

        title:
            "The Yellow Rose",

        text:
          "This reminds me of your cheerful, makulit, and kwela side. The way you make me laugh, even on days when I don't feel like smiling, is something I will always treasure. And one thing I love the most is your laugh. I don't know how to explain it, but hearing you laugh makes me happy too. I hope I get to hear that laugh over and over again. You bring so much happiness into my life without even trying, and I hope life gives you more reasons to smile and laugh every day. And syempre, your pagiging yapper HAHAHA. I love listening to all your stories, random thoughts, chikas, and even those little things that you suddenly remember. You never seem to run out of things to say, and I honestly love that about you. I love hearing you talk, especially when you're excited about something. Kahit gaano pa kahaba kwento mo, I'll always love listening to you."

    },


    purple: {

        flower: "💜",

        title:
            "The Purple Rose",

        text:
            "This represents how special and rare you are. Behind your playful personality is a heart that feels deeply, understands, and loves genuinely. There's something about you that makes me admire you more and more. You're someone worth appreciating, not just for what you show the world, but also for the beautiful person you are inside."
    }

};


/* =========================================================
   DIALOGUE ELEMENTS
========================================================= */

const dialogueOverlay =
    document.getElementById(
        "dialogueOverlay"
    );


const dialogueFlower =
    document.getElementById(
        "dialogueFlower"
    );


const dialogueTitle =
    document.getElementById(
        "dialogueTitle"
    );


const dialogueText =
    document.getElementById(
        "dialogueText"
    );


const dialogueClose =
    document.getElementById(
        "dialogueClose"
    );


/* =========================================================
   SHOW MESSAGE
========================================================= */

function showMessage(
    roseColor
) {

    const message =
        roseMessages[
            roseColor
        ];


    if (!message) {
        return;
    }


    dialogueFlower.textContent =
        message.flower;


    dialogueTitle.textContent =
        message.title;


    dialogueText.textContent =
        message.text;


    dialogueOverlay.classList.add(
        "show"
    );

}


/* =========================================================
   CLOSE MESSAGE
========================================================= */

function closeMessage() {

    dialogueOverlay.classList.remove(
        "show"
    );

}


dialogueClose.addEventListener(
    "click",
    closeMessage
);


/* =========================================================
   CLICK OUTSIDE DIALOGUE
========================================================= */

dialogueOverlay.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            dialogueOverlay
        ) {

            closeMessage();

        }

    }
);


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key ===
            "Escape"
        ) {

            closeMessage();

        }

    }
);

/* =========================================================
   BOUQUET MUSIC
========================================================= */

const bouquetMusic =
    document.getElementById(
        "bouquetMusic"
    );

let musicStarted =
    false;

function startBouquetMusic() {

    if (
        !bouquetMusic ||
        musicStarted
    ) {
        return;
    }

    bouquetMusic.volume = 0.75;

    const playPromise =
        bouquetMusic.play();

    if (
        playPromise !== undefined
    ) {

        playPromise
            .then(function () {

                musicStarted =
                    true;

            })
            .catch(function () {

                /*
                 * Browser blocked autoplay.
                 * The first user interaction below
                 * will start the music.
                 */

            });
    }
}


/* Try to play immediately */

window.addEventListener(
    "load",
    function () {

        startBouquetMusic();

    }
);


/* Fallback for browsers
   that block autoplay */

document.addEventListener(
    "click",
    function () {

        if (
            !musicStarted &&
            bouquetMusic
        ) {

            bouquetMusic.volume =
                0.75;

            bouquetMusic
                .play()
                .then(function () {

                    musicStarted =
                        true;

                })
                .catch(function () {

                });
        }

    },
    {
        once: false
    }
);


/* Also support touch */

document.addEventListener(
    "touchstart",
    function () {

        if (
            !musicStarted &&
            bouquetMusic
        ) {

            bouquetMusic.volume =
                0.75;

            bouquetMusic
                .play()
                .then(function () {

                    musicStarted =
                        true;

                })
                .catch(function () {

                });
        }

    },
    {
        once: false
    }
);