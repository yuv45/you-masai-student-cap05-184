let input = document.getElementById("city");
 


let show = async (query) => {
  try {
    let resp = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        query +
        "&units=imperial&appid=9e003096bdf7de29b38fb354ef22fcd2"
    );
    let data = await resp.json();
    result(data);
  } catch (error) {
    console.log(error);
  }
};
let ans = document.getElementById("parent");

function result(weather) {
 
  let ans = document.getElementById("parent");
  ans.innerHTML="";

  let weatherdetails = weather.weather[0];
  let description = document.createElement("p");
  description.textContent = ` Description :${weatherdetails.description}`;
  ans.append(description);

  let iconId = weather.weather[0].icon;
  let iconUrl = `http://openweathermap.org/img/wn/${iconId}.png`;
  let icon = document.createElement("img");
  icon.src = iconUrl;
  ans.append(icon);
  
  let city = document.createElement("h2");
  city.textContent = ` City name :${weather.name}`;
  ans.append(city);

  let temp = document.createElement("p");
  temp.textContent = `Temp: ${weather.main.temp}°C `;
  ans.append(temp);

  let humidity = document.createElement("p");
  humidity.textContent = `humidity: ${weather.main.humidity}% `;
  ans.append(humidity);

  let wind = document.createElement("p");
  wind.textContent = `Wind:${weather.wind.speed} mph , Deg ${weather.wind.deg} ° `;
  ans.append(wind);

  let sunsrise = document.createElement("p");
  sunsrise.innerHTML= ` 
  <div>
  <div><img class="icon" src="https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Sunrise.png"/></div>
  <p>  Sunrise :${new Date(
    weather.sys.sunrise * 1000
  ).toLocaleTimeString()};</p>
  </div>`

  ans.append(sunsrise);

  let sunset = document.createElement("p");
  sunset.innerHTML = ` <div>
  <div><img class="icon" src=" https://cdn-icons-png.flaticon.com/512/362/362409.png"/></div>
  <p> Sunset : ${new Date(
    weather.sys.sunset * 1000
  ).toLocaleTimeString()};</p>
  </div>`
  ans.append(sunset);

}
 
let search = document.getElementById("search-bar");
let button = document.getElementById("btn");
let display = document.getElementById("display");


button.addEventListener("click", (weather) => {

  
    if(input.value!==""){
    search.style.top="100px"
    display.style.display = "block";
    done.style.display="none";  
    show(input.value);
    
    
    
    let map=document.getElementById("gmap_canvas");
    map.src=`https://maps.google.com/maps?q=${input.value}&t=&z=11&ie=UTF8&iwloc=&output=embed`
    
    
      let forecast = async () => {
      try {
        let res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&appid=9e003096bdf7de29b38fb354ef22fcd2&units=metric`
          
        );
        function fetchdata(data) {
          console.log(data)
          const forecastEls = document.getElementById("forecastDays");
          forecastEls.innerHTML = "";
          const dailyData = data.list.filter((item, index) => index % 8 === 0);
        
          dailyData.forEach((day, idx) => {
            if (idx < 5) {
              const wind=day.wind.speed
              const temp = day.main.temp;
              const icon = day.weather[0].icon;
              const date = new Date(day.dt_txt).toLocaleDateString();
        
              forecastEls.innerHTML += `
                          <div class="forecast-day">
                              <div class="forecast-date">${date}</div>
                              <div class="forecast-icon">
                                  <img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
                              </div>
                              <div class="forecast-wind"> Wind :${wind} mph</div>
                              <div class="forecast-temp">Temp: ${temp}°C</div>
                          </div>
                      `;
            }
          });
        }
        let data = await res.json();
        fetchdata(data);
      } catch (error) {
        console.log(error);
      }
    };
     forecast();
  } 
  else{
    let done=document.getElementById("done");
 
    let h1=document.createElement("h1");
    h1.textContent="Please Enter the city name to get the data........";
    done.append(h1);
  }
  
   
});

  