let randomNumber1 = (Math.floor(Math.random()*6)) + 1;
let randomNumber2 = (Math.floor(Math.random()*6)) + 1;

let randomImage1 = "images/dice" + randomNumber1 + ".png";
let randomImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src",randomImage1);
document.querySelector(".dice .img2").setAttribute("src",randomImage2);

if(randomNumber1 > randomNumber2){
  document.querySelector(".container h1").textContent="✔💲Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector(".container h1").textContent="Player 2 Wins!✔💲";
}
else if(randomNumber1 === randomNumber2) {
  document.querySelector(".container h1").textContent="Draw!";
}
