let weather={
    apiKey: "df3888d4fc1a86dab8c7bfa81ecabd8f",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            +   "&units=imperial&appid="
            +  this.apiKey

            ).then((response) => response.json() )
            .then((data) => this.displayWeather(data));
           
    },
    displayWeather: function (data){
        const { name } = data;
        const { description }= data.weather[0];
        const { temp, humidity, temp_min, temp_max } = data.main;
        console.log(name, description, temp, humidity)
        document.querySelector('.city').innerText = "Weather in " + name;
        document.querySelector('.temp').innerText = "Current Temperture: " + temp;
        document.querySelector('.description').innerText = "Today's Forecast: " + description;
        document.querySelector('.Hi').innerText = "Today's High: " + temp_max;
        document.querySelector('.Lo').innerText = "Today's Low: "  + temp_min;
        document.querySelector('.Humidity').innerText = "Humidity: " + humidity;
       
    },
    search: function (){
        this.fetchWeather(document.querySelector('.searchbar').value);

    },       
};

document.querySelector('.searchbutton').addEventListener('click', function (){
    weather.search()
})

