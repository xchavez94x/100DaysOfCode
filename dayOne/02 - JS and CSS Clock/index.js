const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');


const setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = Math.floor(((seconds / 60) * 360) + 90);
    const minutesDegrees = Math.floor(((minutes / 60) * 360) + 90);
    const hoursDegrees = Math.floor(((hours / 12) * 360) + 90);

    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000)