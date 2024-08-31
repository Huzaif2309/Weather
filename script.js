async function fetchData(city) {
    const cityNameElement = document.getElementById("cityName");
    cityNameElement.innerHTML = city;

    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'afa2e55efbmshbe40aef57e46ba3p11a1c0jsnf899b0626b69',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        document.getElementById("cloud_pct").innerHTML = result.cloud_pct;
        document.getElementById("temp").innerHTML = result.temp;
        document.getElementById("temp2").innerHTML = result.temp;
        document.getElementById("feels_like").innerHTML = result.feels_like;
        document.getElementById("humidity").innerHTML = result.humidity;
        document.getElementById("humidity2").innerHTML = result.humidity;
        document.getElementById("min_temp").innerHTML = result.min_temp;
        document.getElementById("max_temp").innerHTML = result.max_temp;
        document.getElementById("wind_speed").innerHTML = result.wind_speed;
        document.getElementById("wind_speed2").innerHTML = result.wind_speed;
        document.getElementById("wind_degrees").innerHTML = result.wind_degrees;
        document.getElementById("sunrise").innerHTML = result.sunrise;
        document.getElementById("sunset").innerHTML = result.sunset;
    } catch (error) {
        console.error(error);
    }
}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const cityInput = document.getElementById("city");
    const city = cityInput.value;
    fetchData(city);
});

// Call the async function to fetch data for Bengaluru by default
fetchData("Bengaluru");
