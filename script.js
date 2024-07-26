document
    .getElementById("get-weather-btn");
addEventListener("click", getWeather);

async function getWeather() {
    const city = document.getElementById("city-input").value;
    if (!city) return;

    try {
        const apiKey = "b95d916b0ba6601243305191ee8da11d";
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const weatherResponse = await fetch(weatherApiUrl);
        const weatherData = await weatherResponse.json();

        console.log(weatherData);

        updateWeatherCard(weatherData);

    } catch (error) {
        console.log(error);
    }
}

function updateWeatherCard(data) {
    const { main, weather, name, wind } = data;

    const temperature = main.temp;
    const humidity = main.humidity;
    const description = weather[0].description;
    const windSpeed = wind.speed;
    const cityName = name;
    const icon = weather[0].icon;

    document.getElementById("city-name").innerText = cityName;
    document.getElementById("temperature").innerText = `${temperature}`;
    document.getElementById("degree").innerText = `°C`;
    document.getElementById("feels-like").innerText = description;
    document.getElementById("about-humidity").innerText = `Humidity: ${humidity}%`;
    document.getElementById("about-wind").innerText = `Wind: ${windSpeed} m/s`;

    document.getElementById("weather-icon").src = `http://openweathermap.org/img/wn/${icon}.png`;


}
