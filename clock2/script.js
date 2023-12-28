let digitalTime = document.querySelector('.digital');
let secondsHand = document.querySelector('.p_s');
let minutesHand = document.querySelector('.p_m');
let hoursHand = document.querySelector('.p_h');
//ponteiro de um relogio em ingles é chamado 'clock hand'

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalTime.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let secondDeg = ((360/60) * second) - 90;
    let minuteDeg = ((360/60) * minute) - 90;
    let hourDeg = ((360/12) * hour) - 90;

    secondsHand.style.transform = `rotate(${secondDeg}deg)`
    minutesHand.style.transform = `rotate(${minuteDeg}deg)`
    hoursHand.style.transform = `rotate(${hourDeg}deg)`

}

function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();

//detalhe para o ponteiro funcionar utilizar o 'transform-origin: left'
//transform-origin: left;