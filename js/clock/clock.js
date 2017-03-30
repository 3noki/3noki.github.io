function setup() {
	createCanvas(200,100);
}

function draw() {
	background(50,150,100);
	
	var d = day();
	var m = month();
	var y = year();
	var h = hour();
	var min = minute();
	var sec = second();

	textAlign(CENTER);
	text("date is " + m + " " + d + " " + y + " " , 5, 40);
	text("time is " + h + " " + min + " " + sec + " ", 5, 50);
}
