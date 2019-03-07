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

    //day 0
    console.log("DAY 0");
    console.log("The current .temperature is " + darkSkyObj.currently.temperature);
    console.log("The current .cloudCover is " + darkSkyObj.currently.cloudCover);
    console.log("The current .humidity is " + darkSkyObj.currently.humidity);
    console.log("The current .windSpeed is " + darkSkyObj.currently.windSpeed);
    console.log("The current .pressure is " + darkSkyObj.currently.pressure);

    //day 1
    console.log("DAY 1");
    console.log("The day 1 high temp is " + darkSkyObj.daily.data[0].apparentTemperatureHigh);
    console.log("The day 1 low temp is " + darkSkyObj.daily.data[0].apparentTemperatureLow);
    console.log("The day 1 cloudCover is " + darkSkyObj.daily.data[0].cloudCover);
    console.log("The day 1 humidity is " + darkSkyObj.daily.data[0].humidity);
    console.log("The day 1 windSpeed is " + darkSkyObj.daily.data[0].windSpeed);
    console.log("The day 1 pressure is " + darkSkyObj.daily.data[0].pressure);

    //day 2
    console.log("DAY 2");
    console.log("The day 2 high temp is " + darkSkyObj.daily.data[1].apparentTemperatureHigh);
    console.log("The day 2 low temp is " + darkSkyObj.daily.data[1].apparentTemperatureLow);
    console.log("The day 2 cloudCover is " + darkSkyObj.daily.data[1].cloudCover);
    console.log("The day 2 humidity is " + darkSkyObj.daily.data[1].humidity);
    console.log("The day 2 windSpeed is " + darkSkyObj.daily.data[1].windSpeed);
    console.log("The day 2 pressure is " + darkSkyObj.daily.data[1].pressure);



    console.log(darkSkyObj)
});




});
// IIFE closing //
// })();