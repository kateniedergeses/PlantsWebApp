
function waterMe(){

    var el = document.getElementById("waterprogressbar");
    var water;
    var waterlevel = "<%= MyProperty %>";
    water =  el.style.width;
  
        el.innerHTML= waterlevel + `%`;
        el.style.width = waterlevel + `%`;
  
    //alert("Plant is completely hydrated. Please wait.");

    el.addEventListener("click", function() {
        console.log("clicked");})

}