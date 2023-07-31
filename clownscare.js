

function clownscare() {
let img = document.createElement("img");
img.src = "https://thebigsmoke.com.au/wp-content/uploads/Science-explains-why-we-have-a-fear-of-clowns.jpg";

img.addEventListener("click", function() {
  console.log("clicked");
})
document.body.prepend(img);

}