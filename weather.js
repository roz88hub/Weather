	
function ajaxFnc(){
	var zipCode = document.getElementById('zipcode');
	$.ajax({
		  type: "POST",
		  url: 'https://api.openweathermap.org/data/2.5/weather?zip='+zipCode.value+',us&units=imperial&appid=c2f8212a26a7a84d3ab42886d3861a88',
		   success: function(data){
			$("#city-name").text(data.name);
			$("#lat").text(data.coord.lat);
			$("#lon").text(data.coord.lon);
			$("#main").text(data.main);
			$("#weather-main").text(data.weather[0].main);
			$("#weather-desc").text(data.weather[0].description);
			$("#wind-speed").text(data.wind.speed);
			$("#wind-degree").text(data.wind.deg);
			$("#temp-current").text(data.main.temp);
			$("#temp-min").text(data.main.temp_min);
			$("#temp-max").text(data.main.temp_max);
			$("#humidity").text(data.main.humidity);
			
			}
					});
		console.log('data');
}
