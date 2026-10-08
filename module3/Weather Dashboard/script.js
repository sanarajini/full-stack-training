const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const weatherCondition = document.getElementById("weatherCondition");
const windSpeed = document.getElementById("windSpeed");
const humidity = document.getElementById("humidity");
const feelsLike = document.getElementById("feelsLike");

const errorMessage = document.getElementById("errorMessage");


// Search button event

searchButton.addEventListener("click", function () {

    const city = cityInput.value.trim();

    if (city === "") {

        errorMessage.textContent =
            "Please enter a city name.";

        return;
    }

    getWeather(city);
});


// Press Enter to search

cityInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        searchButton.click();
    }
});


// Get weather information

async function getWeather(city) {

    try {

        errorMessage.textContent = "Loading...";

        // Step 1: Find city coordinates

        const locationURL =
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

        const locationResponse =
            await fetch(locationURL);

        if (!locationResponse.ok) {

            throw new Error("Unable to find city.");
        }

        const locationData =
            await locationResponse.json();

        // Invalid city

        if (!locationData.results ||
            locationData.results.length === 0) {

            throw new Error(
                "City not found. Please enter a valid city name."
            );
        }

        const location = locationData.results[0];

        const latitude = location.latitude;
        const longitude = location.longitude;

        const foundCity = location.name;

        // Step 2: Get weather information

        const weatherURL =
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&timezone=auto`;

        const weatherResponse =
            await fetch(weatherURL);

        if (!weatherResponse.ok) {

            throw new Error(
                "Unable to fetch weather information."
            );
        }

        const weatherData =
            await weatherResponse.json();

        const currentWeather =
            weatherData.current;

        // Display data

        cityName.textContent = foundCity;

        temperature.textContent =
            currentWeather.temperature_2m;

        humidity.textContent =
            currentWeather.relative_humidity_2m + " %";

        windSpeed.textContent =
            currentWeather.wind_speed_10m + " km/h";

        feelsLike.textContent =
            currentWeather.apparent_temperature + " °C";

        weatherCondition.textContent =
            getWeatherCondition(
                currentWeather.weather_code
            );

        errorMessage.textContent = "";

    }

    catch (error) {

        console.error(error);

        errorMessage.textContent =
            error.message;

        cityName.textContent =
            "Weather Dashboard";

        temperature.textContent =
            "--";

        humidity.textContent =
            "-- %";

        windSpeed.textContent =
            "-- km/h";

        feelsLike.textContent =
            "-- °C";

        weatherCondition.textContent =
            "Unable to get weather";
    }
}


// Convert weather code into readable condition

function getWeatherCondition(code) {

    if (code === 0) {
        return "☀️ Clear Sky";
    }

    if (code === 1 ||
        code === 2 ||
        code === 3) {

        return "🌤 Partly Cloudy";
    }

    if (code === 45 ||
        code === 48) {

        return "🌫 Foggy";
    }

    if (code >= 51 &&
        code <= 57) {

        return "🌦 Drizzle";
    }

    if (code >= 61 &&
        code <= 67) {

        return "🌧 Rain";
    }

    if (code >= 71 &&
        code <= 77) {

        return "❄️ Snow";
    }

    if (code >= 80 &&
        code <= 82) {

        return "🌧 Rain Showers";
    }

    if (code >= 95 &&
        code <= 99) {

        return "⛈ Thunderstorm";
    }

    return "🌤 Unknown Weather";
}