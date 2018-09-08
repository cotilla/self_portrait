function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(220);
	
	// ears
	fill("tan");
	ellipse(100, 150, 100, 100);
	ellipse(300, 150, 100, 100);
	
	// face
	fill("khaki");
	rect(100, 50, 200, 250);
	
	// eyebrows
	fill("black");
	rect(230, 80, 50, 5);
	rect(120, 80, 50, 5);
	
	// eyes
	fill("white");
	ellipse(150, 150, 50, 55);
	ellipse(250, 150, 50, 55);
	
	// eyes_pupil
	fill("black");
	ellipse(150, 150, 20, 20);
	ellipse(250, 150, 20, 20);
	
	// nose
	fill("black");
	triangle(220, 210, 205, 210, 210, 215);

	// outline
	stroke("black");
	line(150, 250, 250, 250);
	
	// muststash
	fill("black");
	rect(148, 230, 105, 10, 10);
	
	
	}
	
	
