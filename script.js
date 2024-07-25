// Refferecne 
const fetchBtn = document.querySelector(".fetchBtn");
const showCity = document.querySelector(".showCity");
const showDate = document.querySelector(".showDate");
const showStatus = document.querySelector(".showStatus");
const showWheatherIcon = document.querySelector(".showWheatherIcon");
const showDegree = document.querySelector(".showDegree");
const showMin = document.querySelector(".min");
const showMax = document.querySelector(".max");
const showHumidity = document.querySelector(".showHumidity");
const showFeel = document.querySelector(".showFeel");
const showWind = document.querySelector(".showWind");
const showPressure = document.querySelector(".showPressure");
const lowerInfoDiv = document.querySelector(".lowerInfoDiv"); 
const allInfoDiv = document.querySelector(".allInfoDiv");

// Function

const fetchData = async ()=>{
    cityName = document.querySelector(".input").value;
    if (cityName==""){
        cityName = "kolkata"
    }
    const API= "Enter Your Openweathermap API key ";
    URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API}`;
    try{
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    showCity.textContent = data.name;
    showDate.textContent = new Date(data.dt*1000);
    showStatus.textContent = data.weather[0].description;
    showDegree.innerHTML =  `${data.main.temp}&#176;`;
    showMin.innerHTML =  `Min: ${data.main.temp_min}&#176;`;
    showMax.innerHTML =  `Max: ${data.main.temp_max}&#176;`;
    showHumidity.innerHTML =  `${data.main.humidity}%`;
    showFeel.innerHTML =  `${data.main.feels_like}&#176;`;
    showWind.innerHTML =  `${data.wind.speed} m/s`;
    showPressure.innerHTML =  `${data.main.pressure} hpa`;
    showWheatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" />`;
    console.log(data.weather[0].icon);
   
    }
    catch{
        
        console.log("Invalid City. Please check for any typo");
    }



}

fetchBtn.addEventListener("click", fetchData) //Call the func on click
fetchData(); //Call the function on page load

