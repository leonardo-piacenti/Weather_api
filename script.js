

const key='f2dca74633beeec878063b7efebd2d03'
// const city='London'


fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=${key}&units=metric`)
.then(res=>res.json())
.then(data=>
    {
displayWeather(data);
    })


    function displayWeather(data){

        document.querySelector('.temperature').innerHTML=data.main.temp ;
        document.querySelector('.city-name').innerHTML=data.name ;
        document.querySelector('.weather-description').innerHTML=data.weather[0].description ;
    }