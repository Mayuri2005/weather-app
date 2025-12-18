// const apiKey = "YOUR_API_KEY";  
const apiUrl = " https://openweathermap.org/faq#error401 ";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        alert("City Not Found!");
        return;
    }

    let data = await response.json();

    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", () => {
    checkWeather(cityInput.value);
});