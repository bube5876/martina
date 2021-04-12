
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

  document.querySelectorAll(".m, .drum")[0].addEventListener("click", function() {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    this.style.color = "red";
  });


document.querySelectorAll(".a , .drum")[1].addEventListener("click", function() {
  var audio = new Audio("sounds/kick-bass.mp3");
  audio.play();
   this.style.color = "white";
});


document.querySelectorAll(".r , .drum")[2].addEventListener("click", function() {
  var audio = new Audio("sounds/snare.mp3");
  audio.play();
   this.style.color = "gold";
});


document.querySelectorAll(".t , .drum")[3].addEventListener("click", function() {
  var audio = new Audio("sounds/tom-1.mp3");
  audio.play();
   this.style.color = "black";

});


document.querySelectorAll(".i , .drum")[4].addEventListener("click", function() {
  var audio = new Audio("sounds/tom-2.mp3");
  audio.play();
   this.style.color = "yellow";
});

}
document.querySelectorAll(".n , .drum")[5].addEventListener("click", function() {
  var audio = new Audio("sounds/tom-3.mp3");
  audio.play();
   this.style.color = "brown";
});


document.querySelectorAll(".a , .drum")[6].addEventListener("click", function() {
  var audio = new Audio("sounds/tom-4.mp3");
  audio.play();
   this.style.color = "blue";
});
//var audio = new Audio("sounds/crash.mp3");
//audio.play();//
