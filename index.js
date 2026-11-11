// Stopwatch program ⏱

const disply = document.getElementById("display");

let timer = null;
let startTime = 0;
let elapsedTimer = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        timer = setInterval(update, 10);
        startTime = Date.now() - elapsedTimer;
        isRunning = true;
    }
}
function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTimer = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    elapsedTimer = 0;
    startTime = 0;
    isRunning = false;
    disply.textContent = " 00:00:00:00"


}

function update() {

    const currentTime = Date.now();
    elapsedTimer = currentTime - startTime;

    let hours = Math.floor(elapsedTimer / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTimer / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTimer / 1000) % 60;
    let milliseconds = Math.floor((elapsedTimer % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");


    disply.textContent =
        `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
