const cityInput = document.getElementById("cityInput");
const error = document.getElementById("error");

const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

const travelSuggestion = document.getElementById("travelSuggestion");
const forecast = document.getElementById("forecast");


// Get Weather
async function getWeather() {

    const city = cityInput.value.trim();

    if (city === "") {
        error.textContent = "Please enter a city name.";
        return;
    }

    error.textContent = "";
    forecast.innerHTML = "<p>Loading forecast...</p>";

    try {

        // Get city coordinates
        const locationResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
        );

        const locationData = await locationResponse.json();

        if (!locationData.results) {
            throw new Error("City not found");
        }

        const location = locationData.results[0];

        const latitude = location.latitude;
        const longitude = location.longitude;

        // Get weather data
        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`
        );

        const weatherData = await weatherResponse.json();

        // Current weather
        const current = weatherData.current;

        cityName.textContent = `${location.name}, ${location.country}`;

        temperature.textContent =
            `${Math.round(current.temperature_2m)} °C`;

        humidity.textContent =
            `${current.relative_humidity_2m}%`;

        wind.textContent =
            `${Math.round(current.wind_speed_10m)} km/h`;

        description.textContent =
            getWeatherDescription(current.weather_code);

        weatherIcon.textContent =
            getWeatherIcon(current.weather_code);

        // Travel suggestion
        travelSuggestion.textContent =
            getTravelSuggestion(current.weather_code);

        // Forecast
        displayForecast(weatherData.daily);

    } catch (err) {

        console.error(err);

        error.textContent =
            "City not found. Please enter a valid city name.";

        forecast.innerHTML =
            "<p>Unable to load forecast.</p>";
    }
}


// Weather Description
function getWeatherDescription(code) {

    if (code === 0) {
        return "Clear Sky";
    }

    if (code === 1 || code === 2 || code === 3) {
        return "Partly Cloudy";
    }

    if (code === 45 || code === 48) {
        return "Foggy";
    }

    if (code >= 51 && code <= 57) {
        return "Drizzle";
    }

    if (code >= 61 && code <= 67) {
        return "Rainy";
    }

    if (code >= 71 && code <= 77) {
        return "Snowy";
    }

    if (code >= 80 && code <= 82) {
        return "Rain Showers";
    }

    if (code >= 95) {
        return "Thunderstorm";
    }

    return "Unknown Weather";
}


// Weather Icons
function getWeatherIcon(code) {

    if (code === 0) {
        return "☀️";
    }

    if (code === 1 || code === 2) {
        return "🌤️";
    }

    if (code === 3) {
        return "☁️";
    }

    if (code === 45 || code === 48) {
        return "🌫️";
    }

    if (code >= 51 && code <= 57) {
        return "🌦️";
    }

    if (code >= 61 && code <= 67) {
        return "🌧️";
    }

    if (code >= 71 && code <= 77) {
        return "❄️";
    }

    if (code >= 80 && code <= 82) {
        return "🌦️";
    }

    if (code >= 95) {
        return "⛈️";
    }

    return "🌈";
}


// Travel Suggestions
function getTravelSuggestion(code) {

    if (code === 0) {
        return "☀️ Excellent weather! Perfect for sightseeing, beaches and outdoor activities.";
    }

    if (code === 1 || code === 2 || code === 3) {
        return "🌤️ Good weather for travel. You can enjoy sightseeing and outdoor activities.";
    }

    if (code === 45 || code === 48) {
        return "🌫️ Foggy conditions. Travel carefully and prefer indoor attractions.";
    }

    if (code >= 51 && code <= 57) {
        return "🌦️ Light drizzle expected. Carry an umbrella and plan short outdoor activities.";
    }

    if (code >= 61 && code <= 67) {
        return "🌧️ Rainy weather. Carry an umbrella and consider museums, shopping and indoor attractions.";
    }

    if (code >= 71 && code <= 77) {
        return "❄️ Snowy weather. Wear warm clothes and enjoy winter activities.";
    }

    if (code >= 80 && code <= 82) {
        return "🌦️ Rain showers are expected. Keep an umbrella with you while travelling.";
    }

    if (code >= 95) {
        return "⛈️ Thunderstorms expected. Avoid outdoor travel and stay indoors if possible.";
    }

    return "🌍 Check local conditions before travelling.";
}


// Display Forecast
function displayForecast(daily) {

    forecast.innerHTML = "";

    for (let i = 0; i < 7; i++) {

        const date = new Date(daily.time[i]);

        const dayName = date.toLocaleDateString("en-US", {
            weekday: "short"
        });

        const card = document.createElement("div");

        card.className = "forecast-card";

        card.innerHTML = `
            <h3>${dayName}</h3>

            <div class="icon">
                ${getWeatherIcon(daily.weather_code[i])}
            </div>

            <p>
                ${Math.round(daily.temperature_2m_max[i])}°C
                /
                ${Math.round(daily.temperature_2m_min[i])}°C
            </p>

            <p>
                ${getWeatherDescription(daily.weather_code[i])}
            </p>
        `;

        forecast.appendChild(card);
    }
}


// Press Enter to Search
cityInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        getWeather();
    }

});