function setup() {
	createCanvas(windowWidth,windowHeight);
}

function draw() {
	background(50,150,100);
	
	var d = day();
	var m = month();
	var y = year();
	var h = hour();
	var min = minute();
	var sec = second();

	text("date is " + m + " " + d + " " + y + " " , 5, 40);
	text("time is " + h + " " + min + " " + sec + " ", 5, 50);
}
