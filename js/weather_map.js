// IIFE / Remove when finished coding //
// (function(){
"use strict";
$(document).ready(function () {
console.warn('The DOM has finished loading in JS!');

var darkSkyUrl = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyToken
    + "/29.4241,-98.4936";

var locationData = "/[latitude],[longitude]";

var dateObject = new Date(1551736889 * 1000);

console.log(dateObject.toString());


$.get(darkSkyUrl).done(function (darkSkyObj) {

    for (var i = 0; i < 2; i++) {
        //day 0

        $('#tempuratures').html("<div>" + "<strong>High Temp: </strong> " + Math.round(darkSkyObj.daily.data[0].apparentTemperatureHigh) + "&#176" + " "+ "<strong>Low Temp: </strong>" + Math.round(darkSkyObj.daily.data[0].apparentTemperatureLow) + "&#176" + "</div>");
        $('#clouds').html("<div>" + "<strong>Clouds: </strong>" + darkSkyObj.daily.data[0].icon.split("-").join(" ") + "</div>");
        $('#humidity').html("<div>" + "<strong>Humidity: </strong>" + (darkSkyObj.daily.data[0].humidity * 100).toFixed(0)+ "%" + "</div>");
        $('#wind').html("<div>" + "<strong>Wind: </strong>" + darkSkyObj.daily.data[0].windSpeed + "<strong> MPH</strong>" + "</div>");
        $('#pressure').html("<div>" + "<strong>Pressure: </strong>" + darkSkyObj.daily.data[0].pressure + "</div>");

        //day 1
        $('#tempuratures2').html("<div>" + "<strong>High Temp: </strong> " + Math.round(darkSkyObj.daily.data[1].apparentTemperatureHigh) + "&#176" + " "+ "<strong>Low Temp: </strong>" + Math.round(darkSkyObj.daily.data[1].apparentTemperatureLow) + "&#176" + "</div>");
        $('#clouds2').html("<div>" + "<strong>Clouds: </strong>" + darkSkyObj.daily.data[1].icon.split("-").join(" ") + "</div>");
        $('#humidity2').html("<div>" + "<strong>Humidity: </strong>" + (darkSkyObj.daily.data[1].humidity * 100).toFixed(0)+ "%" + "</div>");
        $('#wind2').html("<div>" + "<strong>Wind: </strong>" + darkSkyObj.daily.data[1].windSpeed + "<strong> MPH</strong>" + "</div>");
        $('#pressure2').html("<div>" + "<strong>Pressure: </strong>" + darkSkyObj.daily.data[1].pressure + "</div>");

        //day 2
        $('#tempuratures3').html("<div>" + "<strong>High Temp: </strong> " + Math.round(darkSkyObj.daily.data[2].apparentTemperatureHigh) + "&#176" + " "+ "<strong>Low Temp: </strong>" + Math.round(darkSkyObj.daily.data[2].apparentTemperatureLow) + "&#176" + "</div>");
        $('#clouds3').html("<div>" + "<strong>Clouds: </strong>" + darkSkyObj.daily.data[2].icon.split("-").join(" ") + "</div>");
        $('#humidity3').html("<div>" + "<strong>Humidity: </strong>" + (darkSkyObj.daily.data[2].humidity * 100).toFixed(0)+ "%" + "</div>");
        $('#wind3').html("<div>" + "<strong>Wind: </strong>" + darkSkyObj.daily.data[2].windSpeed + "<strong> MPH</strong>" + "</div>");
        $('#pressure3').html("<div>" + "<strong>Pressure: </strong>" + darkSkyObj.daily.data[2].pressure + "</div>");
    }



    console.log(darkSkyObj)
});




});
// IIFE closing //
// })();