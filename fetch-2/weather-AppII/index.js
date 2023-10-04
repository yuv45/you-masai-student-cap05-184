let show=async(query)=>{
    let resp=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+query+"&units=imperial&appid=9e003096bdf7de29b38fb354ef22fcd2")
    let data=await resp.json();
    result(data); 
}
show("pune");
function result(weather){
    console.log(weather)
    let ans=document.getElementById("parent");
    let icon=document.createElement("h2");
    icon.textContent=weather.weather[0].main;
    let city=document.createElement("h2");
    city.textContent=weather.name;
    ans.append(city)
    let temp=document.createElement("p");
    temp.textContent=`Temp: ${weather.main.temp} F `
    ans.append(temp);
    let humidity=document.createElement("p");
    humidity.textContent=`humidity: ${weather.main.humidity}% `;
    ans.append(humidity);
    let wind=document.createElement("p");
    wind.textContent=`Wind:${weather.wind.speed} mph , Deg ${weather.wind.deg} ° `;
    ans.append(wind);
    let sunsrise=document.createElement("p");
    sunsrise.textContent=new Date(
        weather.sys.sunrise * 1000
      ).toLocaleTimeString();
    ans.append(sunsrise)
    let weatherdetails=weather.weather[0];
    if(weatherdetails&&weatherdetails.icon){
        let  description=document.createElement("img");
        description.src=weatherdetails.iconId;
        ans.append(description);
    }
}
 



















// cloud key=AIzaSyCBWpAqOwz3ipKkFew5xNTITWgjtEMWsbo;
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key};