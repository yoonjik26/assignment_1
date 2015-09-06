function setup() {
	// create a place to draw
	createCanvas(640, 360);
}

function draw() {
	// clear the background
	background(107, 174, 239);
	//set a stroke color
	noStroke ();


fill (237, 70, 36);
arc (450, 360, 400, 400, PI, TWO_PI);
fill (255, 242, 114);
arc (460, 365, 380, 380, PI, TWO_PI);
fill (98, 226, 158);
arc (470, 370, 360, 360, PI, TWO_PI);
fill (140, 83, 145);
arc (480, 375, 340, 340, PI, TWO_PI);
fill (107, 174, 239);
arc (490, 380, 320, 320, PI, TWO_PI);

fill(255, 255, 255);
ellipse (320, 50, 20, 20);
ellipse (340, 50, 30, 30);
ellipse (360, 50, 20, 20);
ellipse (430, 50, 30, 30);
ellipse (460, 50, 45, 45);
ellipse (490, 50, 30, 30);

fill (241, 179, 41);
rect (100, 170, 100, 100, 5, 5, 5, 5);
fill (255, 242, 186);
rect (91, 150, 120, 40, 5, 5, 5, 5);

fill (185, 226, 225);
arc (650, 450, 400, 800, PI, TWO_PI);
fill (255, 255, 255);
ellipse (540, 290, 50, 50);
ellipse (500, 300, 60, 60);
ellipse (455, 285, 70, 70);

fill (188, 190, 192);
quad (600, 80, 640, 60, 640, 360, 550, 360);
fill (147, 149, 152);
quad (600, 160, 640, 130, 640, 360, 560, 360);
fill (109, 110, 113);
quad (570, 200, 615, 180, 625, 360, 520, 360);

fill (79, 122, 74);
ellipse (275, 240, 40, 80);
ellipse (345.5, 200, 50, 100);
ellipse (43, 253, 35, 70);


fill (0, 0, 0);
textSize (40);
textAlign (RIGHT);
text("...?", 290, 100)

fill (139, 94, 60);
rect (271, 250, 8, 100, 10, 10, 4, 4);
rect (342, 210, 8, 100, 10, 10, 4, 4);
rect (40, 260, 8, 100, 10, 10, 4, 4);


fill (190, 190, 110);
arc (110, 500, 400, 400, PI, TWO_PI);
fill (153, 172, 110);
arc (370, 550, 550, 550, PI, TWO_PI);
fill (123, 152, 110);
arc (550, 450, 300, 300, PI, TWO_PI);

fill (79, 122, 74);
ellipse (230, 350, 35, 35);
ellipse (265, 350, 70, 70);
ellipse (300, 350, 35, 35);
ellipse (360, 350, 50, 50);
ellipse (410, 350, 100, 100);
ellipse (460, 350, 50, 50);




//set a fill color
fill (38, 84, 94);
rect (120, 250, 20, 80, 20, 20, 5, 5);
rect (160, 250, 20, 80, 20, 20, 5, 5);
// set a fill color
fill (190, 30, 45);
// draw a rectangle
rect (109.5, 180, 80, 85, 20, 20, 5, 5);
push();
translate (115, 177);
rotate (radians (25));
rect (0, 0, 20, 80, 20, 20, 5, 5);
pop();
push();
translate (165,185)
rotate (radians (-25));
rect (0, 0, 20, 80, 20, 20, 5, 5);
pop();
fill (241, 122, 41);
quad (125, 180, 140, 180, 109.5, 260, 109.5, 240);
quad (160, 180, 175, 180, 189.5, 240, 189.5, 260);
fill (169, 124, 80);
ellipse (150, 100, 80, 80);
fill (196, 154, 108);
ellipse (150, 130, 180, 105);
fill (169, 124, 80);
ellipse (150, 140, 120, 68);
fill (255, 255, 255);
rect (111, 300, 35, 35, 30, 30, 5, 5);
rect (151, 300, 35, 35, 30, 30, 5, 5);
fill (106, 152, 152)
rect (111, 325, 35, 11, 3, 3, 3, 3);
rect (151, 325, 35, 11, 3, 3, 3, 3);





	// set a fill color
	fill (255, 225, 195);


	// set a stroke color
	noStroke ();

	fill(255, 225, 195);
	// draw a circle
	ellipse (150, 150, 90, 90);
	ellipse (92, 250, 20, 20);
	ellipse (206, 250, 20, 20);

	fill (126, 59, 19);
	//draw a circle
	ellipse (150, 110, 20, 28);
	push();
	translate (135, 110)
	rotate (radians (45));
	ellipse (0, 0, 20, 28);
	pop();
	push();
	translate (165, 110);
	rotate (radians (135));
	ellipse (0, 0, 20, 28);
	pop();
	fill (255, 225, 195);
	ellipse (100, 150, 20, 25);
	ellipse (200, 150, 20, 25);
	//set a fill color
	fill (0, 104, 56);
	ellipse (125, 150, 45, 45);
	ellipse (175, 150, 45, 45);
	fill (255, 255, 255);
	ellipse (125, 150, 35, 35);
	ellipse (175, 150, 35, 35);
	fill (0, 104, 56);
	// draw a rectangle
	rect (145, 150, 10, 5);
	fill (0, 0, 0)
	// draw a circle
	ellipse (130, 150, 5, 5);
	ellipse (170, 150, 5, 5);
	fill (236, 134, 140)
	ellipse (150, 180, 10, 15);
}
