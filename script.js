// --- Countdown ----
const eventDate = new Date("10/06/2023 09:00:00").getTime();
let timeInterval;


const second = 1000;
const minute = second * 60; 
const hour = minute * 60; 
const day = hour * 24;

// Get elements
const daysElm = document.getElementById("days");
const hoursElm = document.getElementById("hours");
const minutesElm = document.getElementById("minutes");
const secondsElm = document.getElementById("seconds");


function countDown() {
    //Calculate the time for countdown based on current date
    const currentDate = new Date().getTime();
    const timeSpan = eventDate - currentDate;

    //Stop the countdown if set date is reached
    if (timeSpan <= 0) {
        clearInterval(timeInterval);
    }

    // Calculate the days, hours, minutes and seconds remained
    const days = Math.floor(timeSpan / day);
    const hours = Math.floor((timeSpan % day) / hour);
    const minutes = Math.floor((timeSpan % hour) / minute);
    const seconds = Math.floor((timeSpan % minute) / second);

    // Display text
    daysElm.innerHTML = days;
    hoursElm.innerHTML = hours;
    minutesElm.innerHTML = minutes;
    secondsElm.innerHTML = seconds;
}

timeInterval = setInterval(countDown, second);



// Display men watch image based on color selected

const colorsDisplayedHim = document.querySelectorAll(".color-container-him");
const productImgHim = document.querySelector(".watch-for-him")

const watchImagesHim = [
    './assets/watch-color1.png',
    './assets/watch-color2.png',
    './assets/watch-color3.png',
];

colorsDisplayedHim.forEach((color, index) => {
    color.addEventListener("click", () => {
        productImgHim.src = watchImagesHim[index];
    })
})


// Display women watch image based on color selected
const colorsDisplayedHer = document.querySelectorAll(".color-container-her");
const productImgHer = document.querySelector(".watch-for-her")

const watchImagesHer = [
    './assets/watch-color4.png',
    './assets/watch-color5.png',
    './assets/watch-color6.png',
];

colorsDisplayedHer.forEach((color, index) => {
    color.addEventListener("click", () => {
        productImgHer.src = watchImagesHer[index];

    })

})