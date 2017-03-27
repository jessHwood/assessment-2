


document.addEventListener("keyup", movePlayers, false);

// define player variables

var leftTimon = 0;
var leftPumba = 0;
var moveRight = 50;

var timon = document.getElementById("timon");

var pumba = document.getElementById("pumba");


function movePlayers (event) {

	if (event.keyCode == "81") { // adds q keyup to timon function
		console.log("timon moves");
		leftTimon = (leftTimon + moveRight);
		timon.style.left = leftTimon + 'px';
		
	} else if (event.keyCode == "80") { //adds p keyup to pumba
		console.log("pumba moves");
		leftPumba = (leftPumba + moveRight);
		pumba.style.left = leftPumba + 'px';
	} 
	winner();
}

function winner() {
	if (leftTimon === 1200) {
		alert("Timon Wins!");
	} else if (leftPumba === 1200) {
		alert("Pumba Wins!");
	} 
}


//when leftTimon || leftPumba === 600px, declare a winner depending on who hits the bug first

