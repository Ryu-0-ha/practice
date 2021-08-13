const API_KEY = "06a592d3c1d556aee841afccbf61f377";

function onGeoOk(position){
    const lat =position.coords.latitude;
    const lon =position.coords.longitude;
    console.log(lat,lon);
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const weather = document.querySelector("#weather span:first-child");
                const city = document.querySelector("#weather span:last-child");
                city.innerText = data.name;
                weather.innerText = `${data.weather[0].main}/ ${data.main.temp}`;
    })
}

function onGeoError(){
    alert("FAIL")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);