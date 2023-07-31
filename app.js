<script>
{/* /* 
function displayTime(){

    Date date = Date().getMinutes();

    document.getElementById("showTime").innerHTML  = date;
    Console.WriteLine("this is working  js");

*/ */}




document.getElementById("waterStatus").onclick = function() {waterPlant()};

function waterPlant() {
  document.getElementById("waterStatus").innerHTML = {"You watered the plant!"}

</script>

<!--- --->
<script>
function displayDate() {
    document.getElementById("showDate").innerHTML = Date();
    Console.WriteLine("this is working  js");
}

document.getElementById("waterStatus").onclick = function () { waterPlant() };
document.getElementById("waterStatus").addEventListener("click", waterPlant);
function waterPlant() {
    document.getElementById("waterStatus").innerHTML = "You watered the plant!";
}
</script>