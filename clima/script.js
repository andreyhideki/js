document.querySelector('.busca').addEventListener('submit',  async(event) => {
    event.preventDefault();

    let search = document.querySelector('#searchInput').value;
    let key = '4a5fa906cfbb32acc4734233eee9ea50';
    console.log(search);

    if(search !== '') {
        clearInfo();
        showMessage('buscando....');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(search)}&appid=${key}&units=metric&lang=pt_br`;

        let results = await fetch(url);
        let json = await results.json();

        console.log(json);
        if (json.cod === 200) {
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempMax: json.main.temp_max,
                tempMin: json.main.temp_min,
                tempFeelsLike: json.main.feels_like,
                humidity: json.main.humidity,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            });
        } else {
            clearInfo();
            showMessage('Cidade não encontrada');
        }
    } else {
        clearInfo();
    }
});

function showMessage(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}

function showInfo(json) {
    showMessage('');

    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
    document.querySelector('.tempInfo').innerHTML = `${Math.round(json.temp)}<sup>ºC</sup>`;
    document.querySelector('.tempMaximo').innerHTML = `${Math.round(json.tempMax)}<sup>ºC</sup>`;
    document.querySelector('.tempMinimo').innerHTML = `${Math.round(json.tempMin)}<sup>ºC</sup>`;
    document.querySelector('.tempFeelsLike').innerHTML = `${Math.round(json.tempFeelsLike)}<sup>ºC</sup>`;
    document.querySelector('.humidity').innerHTML = `${json.humidity}<sup>%</sup>`;


    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`;
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg)`;

    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);

    document.querySelector('.resultado').style.display = 'block';

}

function clearInfo(){
    showMessage('');
    document.querySelector('.resultado').style.display = 'none';
}

//console.log(process.env.KEY_OPENWEATHERMAP);