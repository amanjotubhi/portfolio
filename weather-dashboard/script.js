const form = document.getElementById('city-form');
const cityInput = document.getElementById('city-input');
const weatherResult = document.getElementById('weather-result');

const API_KEY = 'your_openweathermap_api_key'; // Replace with your API key
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();

    if (city === '') {
        weatherResult.textContent = 'Please enter a city name.';
        return;
    }

    try {
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();

        weatherResult.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        weatherResult.textContent = 'Error fetching weather data.';
    }
});
