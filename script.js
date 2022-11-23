
let player1="Player1";
let player2="Player2";

function editNames() {
  player1=prompt("Change Player1 name");
  player2=prompt("change Player2 name");


   document.querySelector("p.Player1").innerHTML=player1;
   document.querySelector("p.Player2").innerHTML=player2;
}

function rollTheDice() {
  setTimeout (function () {
    let randomNumber1=Math.floor(Math.random() * 6) +1;
    let randomNumber2=Math.floor(Math.random() * 6) +1;

    document.querySelector(".img1").setAttribute("src","dice" + randomNumber1 +".png");
    document.querySelector(".img2").setAttribute("src","dice" + randomNumber2 +".png");

    if (randomNumber1===randomNumber2){
      document.querySelector("h1").innerHTML="Draw!";
    }
    else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").innerHTML=(player2 + "Wins!");
    }
    else {
      document.querySelector("h1").innerHTML=(player1 + "Wins!");
    }

  }, 25);

}
