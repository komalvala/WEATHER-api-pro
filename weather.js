document.getElementById("getWeather").addEventListener("click", function() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "6e3d16bcb3a47526a0e0df1040c180dd"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    document.getElementById("weatherDisplay").innerHTML = "";

    if (!city) {
        document.getElementById("weatherDisplay").innerHTML = "Please enter a city name.";
        return;
    }

    // Fetch weather data
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            const weather = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById("weatherDisplay").innerHTML = weather;
        })
        .catch(error => {
            document.getElementById("weatherDisplay").innerHTML = error.message;
        });
});