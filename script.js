async function fetchWeatherData(cityName){
	let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0fdae633f9c9c8f6ec0e8ec1db8c752e`
	const response=await fetch(url)
	const data=await response.json();
	console.log(data.name)
}

function fetchCity(){
	let cityName=document.getElementById("city_name");
	if(cityName===""){
		alert("Enter a city name");

	}
	else{
		fetchWeatherData(cityName.value);
		cityName.value="";
	}
}