//Display Date and Time
function showDateTime(){
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var today = new Date();
var date = today.getDate();
var m = month[today.getMonth()];
var hour = today.getHours();
var ampm =  (today.getHours() < 11) ? 'am' : 'pm';

hour = ((hour + 11) % 12 + 1);
var minutes = today.getMinutes();
minutes = (minutes < 10) ? (minutes  = "0" + minutes): minutes;

var year = today.getFullYear();
var day = weekday[today.getDay()];

var el = document.getElementById("showDate");
el.innerHTML = '<p> '+ day + ', ' + m + ' '+ date + ', ' + year + ' </p>';

var el = document.getElementById("showTime");
el.innerHTML = '<p>' + hour + ':' + minutes + ampm +'</p>'

//fetch weather info - temp
//fetch(jason placeholder).then(res =>{
        //res.json();})
        //.then(data => {console.log(res);})
}


