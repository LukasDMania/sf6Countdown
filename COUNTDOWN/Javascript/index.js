const targetDate = new Date("2023-06-01T23:59:59").getTime();
const timerElement = document.getElementById("timer");

const add0toString = (number) => {
    if (number < 10) {
        number = "0" + number.toString();
    }
    return number;
}


const countdown = setInterval(function() {
const timeNow = new Date();

const timeLeft = targetDate - timeNow;

const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

hours = add0toString(hours);
minutes = add0toString(minutes);
seconds = add0toString(seconds);


timerElement.innerHTML = `Days: ${days}\n ${hours} : ${minutes} : ${seconds}`;

    if (timeLeft < 0) {
        clearInterval(countdown);
    }

}, 1000);