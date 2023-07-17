"use strict";
const randomnumber1=Math.trunc(Math.random()*6+1);
const randomnumber2=Math.trunc(Math.random()*6+1);

console.log(randomnumber1);
console.log(randomnumber2);

const image1="../images/d"+randomnumber1+".jpg";
const image2="../images/d"+randomnumber2+".jpg";

console.log(image1,image2);
document.querySelector("#die1").setAttribute("src",image1)
document.querySelector("#die2").setAttribute("src",image2)

var player1 = "Player 1";
var player2 = "Player 2";
if (randomnumber1 === randomnumber2) {
    document.querySelector("h1").innerHTML="DRAW!!"
    console.log("Draw!");
}

else if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML=player2 + " WINS!"
    console.log(player2 + " WINS!");
}

else {
    document.querySelector("h1").innerHTML=player1 + " WINS!"
    console.log(player1 + " WINS!");
}
