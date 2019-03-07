// IIFE / Remove when finished coding //
// (function(){
"use strict";
$(document).ready(function () {
console.warn('The DOM has finished loading in JS!');

var darkSkyUrl = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyToken
    + "/29.4241,-98.4936";

var dateObject = new Date(1551736889 * 1000);

console.log(dateObject.toString());
$.get(darkSkyUrl).done(function (darkSkyObj) {
    console.log("The temp is currently " + darkSkyObj.currently.temperature);
});



});
// IIFE closing //
// })();