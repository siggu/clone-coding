const API_KEY = "7de0e19f641884f5e504a5a463dd975b";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in ", + lat + ", " + lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY};`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weatherContainer = document.querySelector("#weater span:first-child");
            const city = document.querySelector("#weater span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);