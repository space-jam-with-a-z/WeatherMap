// IIFE / Remove when finished coding //
// (function(){
"use strict";


$(document).ready(function () {

var icons = [
    {
        name: "clear-day",
        image:"img/Sun.svg"
    },
    {
        name: "clear-night",
        image: "img/Moon.svg"

    },
    {
        name: "rain",
        image:'img/Cloud-Drizzle.svg'
    },
    {
        name:"snow",
        image:'img/Cloud-Snow-Alt.svg'
    },
    {
        name:'sleet',
        image:'img/Cloud-Rain.svg'
    },
    {
        name:'wind',
        image:'img/Wind.svg'
    },
    {
        name:'fog',
        image:'img/Cloud-Fog-Alt.svg'
    },
    {
        name:'cloudy',
        image:'img/Cloud.svg'
    },
    {
        name:'partly-cloudy-day',
        image:'img/Cloud-Sun.svg'
    },
    {
        name:'partly-cloudy-night',
        image:'img/Cloud-Moon.svg'
    }
];

var darkSkyUrl = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyToken;

var dateObject = new Date(1551736889 * 1000);



function fillData () {

    $.get(darkSkyUrl).done(function (darkSkyObj) {
        for (var i = 0; i < 2; i++) {

           // for (var x = 0; x < icons.length; x++){}
           //  var dailyIcon = darkSkyObj.daily.data[i].icon;
           //  var iconImage  = icons[x].image;
           //  if (dailyIcon === icons[x].name)
           //      console.log(iconImage);


            //day 0
            $('#tempuratures').html("<div>" + "<strong>High Temp: </strong> " + Math.round(darkSkyObj.daily.data[0].apparentTemperatureHigh) + "&#176" + " " + "<strong>Low Temp: </strong>" + Math.round(darkSkyObj.daily.data[0].apparentTemperatureLow) + "&#176" + "</div>");
            $('#img1').html('<div>' + '<img src=' + iconImage + '>' + '</div>');
            $('#clouds').html("<div>" + "<strong>Clouds: </strong>" + darkSkyObj.daily.data[0].icon.split("-").join(" ") + "</div>");
            $('#humidity').html("<div>" + "<strong>Humidity: </strong>" + (darkSkyObj.daily.data[0].humidity * 100).toFixed(0) + "%" + "</div>");
            $('#wind').html("<div>" + "<strong>Wind: </strong>" + darkSkyObj.daily.data[0].windSpeed + "<strong> MPH</strong>" + "</div>");
            $('#pressure').html("<div>" + "<strong>Pressure: </strong>" + darkSkyObj.daily.data[0].pressure + "</div>");

            //day 1
            $('#tempuratures2').html("<div>" + "<strong>High Temp: </strong> " + Math.round(darkSkyObj.daily.data[1].apparentTemperatureHigh) + "&#176" + " " + "<strong>Low Temp: </strong>" + Math.round(darkSkyObj.daily.data[1].apparentTemperatureLow) + "&#176" + "</div>");
            $('#clouds2').html("<div>" + "<strong>Clouds: </strong>" + darkSkyObj.daily.data[1].icon.split("-").join(" ") + "</div>");
            $('#humidity2').html("<div>" + "<strong>Humidity: </strong>" + (darkSkyObj.daily.data[1].humidity * 100).toFixed(0) + "%" + "</div>");
            $('#wind2').html("<div>" + "<strong>Wind: </strong>" + darkSkyObj.daily.data[1].windSpeed + "<strong> MPH</strong>" + "</div>");
            $('#pressure2').html("<div>" + "<strong>Pressure: </strong>" + darkSkyObj.daily.data[1].pressure + "</div>");

            //day 2
            $('#tempuratures3').html("<div>" + "<strong>High Temp: </strong> " + Math.round(darkSkyObj.daily.data[2].apparentTemperatureHigh) + "&#176" + " " + "<strong>Low Temp: </strong>" + Math.round(darkSkyObj.daily.data[2].apparentTemperatureLow) + "&#176" + "</div>");
            $('#clouds3').html("<div>" + "<strong>Clouds: </strong>" + darkSkyObj.daily.data[2].icon.split("-").join(" ") + "</div>");
            $('#humidity3').html("<div>" + "<strong>Humidity: </strong>" + (darkSkyObj.daily.data[2].humidity * 100).toFixed(0) + "%" + "</div>");
            $('#wind3').html("<div>" + "<strong>Wind: </strong>" + darkSkyObj.daily.data[2].windSpeed + "<strong> MPH</strong>" + "</div>");
            $('#pressure3').html("<div>" + "<strong>Pressure: </strong>" + darkSkyObj.daily.data[2].pressure + "</div>");
        }

    });
}

mapboxgl.accessToken = 'pk.eyJ1IjoiZWJlaG5rZSIsImEiOiJjanNraWd2YWsyYTAxM3luc2M1anZ6bHAxIn0.FZhA0r4vtH7V7Elk9S0ZQQ';

var coordinates = document.getElementById('coordinates');

var mapStyle = {
    "version": 8,
    "name": "Dark",
    "sources": {
        "mapbox": {
            "type": "vector",
            "url": "mapbox://mapbox.mapbox-streets-v6"
        },
        "overlay": {
            "type": "image",
            "url": "https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif",
            "coordinates": [
                [-80.425, 46.437],
                [-71.516, 46.437],
                [-71.516, 37.936],
                [-80.425, 37.936]
            ]
        }
    },
    "sprite": "mapbox://sprites/mapbox/dark-v9",
    "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "paint": {"background-color": "#111"}
        },
        {
            "id": "water",
            "source": "mapbox",
            "source-layer": "water",
            "type": "fill",
            "paint": {"fill-color": "#2c2c2c"}
        },
        {
            "id": "boundaries",
            "source": "mapbox",
            "source-layer": "admin",
            "type": "line",
            "paint": {"line-color": "#797979", "line-dasharray": [2, 2, 6, 2]},
            "filter": ["all", ["==", "maritime", 0]]
        },
        {
            "id": "overlay",
            "source": "overlay",
            "type": "raster",
            "paint": {"raster-opacity": 0.85}
        },
        {
            "id": "cities",
            "source": "mapbox",
            "source-layer": "place_label",
            "type": "symbol",
            "layout": {
                "text-field": "{name_en}",
                "text-font": ["DIN Offc Pro Bold", "Arial Unicode MS Bold"],
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    4, 9,
                    6, 12
                ]
            },
            "paint": {
                "text-color": "#969696",
                "text-halo-width": 2,
                "text-halo-color": "rgba(0, 0, 0, 0.85)"
            }
        },
        {
            "id": "states",
            "source": "mapbox",
            "source-layer": "state_label",
            "type": "symbol",
            "layout": {
                "text-transform": "uppercase",
                "text-field": "{name_en}",
                "text-font": ["DIN Offc Pro Bold", "Arial Unicode MS Bold"],
                "text-letter-spacing": 0.15,
                "text-max-width": 7,
                "text-size": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    4, 10,
                    6, 14
                ]
            },
            "filter": [">=", "area", 80000],
            "paint": {
                "text-color": "#969696",
                "text-halo-width": 2,
                "text-halo-color": "rgba(0, 0, 0, 0.85)"
            }
        }
    ]
};

var map = new mapboxgl.Map({
    container: 'map',
    style: mapStyle,
    center: [-98.4936, 29.4241],
    zoom: 3
});

// console.log(map)

var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.4936, 29.4241])
    .addTo(map);

function onDragEnd() {
    var lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br/>Latitude: ' + lngLat.lat;
    console.log(lngLat.lng);

    var completeLocation = "/" + lngLat.lat.toFixed(4) + "," + lngLat.lng.toFixed(4) + "";

    darkSkyUrl = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyToken;

    darkSkyUrl += completeLocation;

    fillData();

    reverseGeocode({lng: lngLat.lng.toFixed(4), lat: lngLat.lat.toFixed(4) }, mapboxgl.accessToken).then(function(data){

        console.log(data.split(", "));
        var dataArray = data.split(", ");

        var displayLocation = dataArray[dataArray.length - 3] + ", " + dataArray[dataArray.length - 2] + ", " +  dataArray[dataArray.length - 1];

        console.log(displayLocation);
        $("#location").html(displayLocation);

    });
}

    $('#search-btn').click(function () {
       var x = $('#latInput').val();
       var y = $('#lngInput').val();

        reverseGeocode({lng: y, lat: x}, mapboxgl.accessToken).then(function(data){
            // console.log(data);
            // map.center = [y,x] //????

        });

        var searchedCoords = darkSkyUrl += "/" + x + "," + y;

        console.log(searchedCoords);

        fillData();

        ///////////// troubleshooting search button. It will search if you click it when page first loads but will
        // not work if clicked again.

    });

marker.on('dragend', onDragEnd);





});
// IIFE closing //
// })();