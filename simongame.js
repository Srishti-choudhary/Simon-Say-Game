let gameSeq = [];
let userSeq = [];
let btns = ["red", "blue", "yellow", "green"];
let h2 = document.querySelector("h2");

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started.");
        started = true;
        levelup();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);  
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}


function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randInd = Math.floor(Math.random() * 3);
    let randColor = btns[randInd];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log("randInd");
    // console.log("randColor");
    // console.log("randBtn");
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameflash(randBtn);
}
function checkans(inx) {
    if (userSeq[inx] === gameSeq[inx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup(), 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score is <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}


function btnPress() {
    let btn = this;
    userflash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkans(userSeq.length - 1);

}

function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}