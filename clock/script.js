function updateClockDigital() {
    const now = new Date();

    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    //console.log(minutes);

    // Atualizar relógio digital
    const digitalClock = document.getElementById('digital-clock');
    const formattedTime = `${formatTimeComponent(hours)}:${formatTimeComponent(minutes)}:${formatTimeComponent(seconds)}`;
    digitalClock.textContent = formattedTime;
    //console.log(digitalClock.textContent);
}

function getCenterPosition(element) {
    const clock = element.getBoundingClientRect();
    const centerX = clock.left + clock.width / 2;
    const centerY = clock.top + clock.height / 2;
    return { x: centerX, y: centerY };
}
function updateClock() {
    const now = new Date();

    let clockAnalogico = document.getElementById('analog-clock');
    let centerPosition = getCenterPosition(clockAnalogico);
    //console.log(centerPosition);

    // Atualizar relógio analógico
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');

    //console.log(centerPosition);
    // hourHand.style.left = centerPosition.x + 'px';
    // hourHand.style.top = centerPosition.y + 'px';

    // minuteHand.style.left = centerPosition.x + 'px';
    // minuteHand.style.top = centerPosition.y + 'px';
    //
    // secondHand.style.left = centerPosition.x + 'px';
    // secondHand.style.top = centerPosition.y + 'px';

    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    //console.log(minutes);

    const hourDeg = (360 / 12) * hours + (360 / 12) * (minutes / 60);
    const minuteDeg = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
    const secondDeg = (360 / 60) * seconds;
    //console.log(minuteDeg);

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    // console.log(hourDeg);
    // console.log(minuteDeg);
    // console.log(secondDeg);


    // Atualizar relógio digital
    const digitalClock = document.getElementById('digital-clock');
    const formattedTime = `${formatTimeComponent(hours)}:${formatTimeComponent(minutes)}:${formatTimeComponent(seconds)}`;
    digitalClock.textContent = formattedTime;
    //console.log(digitalClock.textContent);
}



function formatTimeComponent(component) {
    return component < 10 ? `0${component}` : component;
}

function alarm() {

    let alarms = ['08:00','10:00'];

    switch (hour){
        case 12:
            console.log('é meio dia');
            break;
        default:
            break;
    }

}

let alarmes = [];
function alarmadd(){
    const hora = document.querySelector('#tempo');
    alarmes.push(hora.value);
    //alert(alarmes);

    alarmupdatelista(hora.value)
}

function alarmupdatelista(novoAlarme){
    //alert(alarmes);
    const lista = document.querySelector('#alarmelista');
    const ul = lista.querySelector('ul');

    let novoListItem = document.createElement("li");
    novoListItem.innerText = novoAlarme;

    ul.appendChild(novoListItem);
}

setInterval(updateClockDigital, 1000);
updateClockDigital();

// Atualizar o relógio a cada segundo
setInterval(updateClock, 1000);

// Atualizar o relógio imediatamente ao carregar a página
updateClock();


