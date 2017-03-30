function draw() {
        background(50,150,100);


 fill(100,100,100);
 ellipse(mouseX,mouseY,20,20);

        var d = day();
        var m = month();
        var y = year();
        var h = hour();
        var min = minute();
        var sec = second();

        textAlign(LEFT);
        text("date is " + m + " " + d + " " + y + " " , 5, 40);
        text("time is " + h + " " + min + " " + sec + " ", 5, 50);
}

