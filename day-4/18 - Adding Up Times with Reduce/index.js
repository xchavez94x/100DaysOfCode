const listNodes = Array.from(document.querySelectorAll("[data-time]"));
const {
    round,
    floor
} = Math
const initialSeconds = listNodes
    .map(node => node.dataset.time)
    .map(time => {
        const [minutes, seconds] = time.split(':').map(parseFloat)
        return (minutes * 60) + seconds
    })
    .reduce((prev, current) => prev + current, 0);

let secondsLeft = initialSeconds;

const hours = floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const minutes = floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;


console.log(hours, minutes, secondsLeft)