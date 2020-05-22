function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}


function draw() {

    background(0);
    translate(200, 200);
    rotate(-90);

    let hr = hour();
    let mn = minute();
    let sc = second();
    let msc = millis();

    strokeWeight(2);
    stroke(255);
    line(141, 0, 145, 0);

    strokeWeight(2);
    stroke(255);
    line(-141, 0, -145, 0);

    strokeWeight(2);
    stroke(255);
    line(0, 141, 0, 145);

    strokeWeight(2);
    stroke(255);
    line(0, -141, 0, -145);

    push();
    rotate(60);
    strokeWeight(2);
    stroke(255);
    line(141, 0, 145, 0);
    pop();

    push();
    rotate(30);
    strokeWeight(2);
    stroke(255);
    line(141, 0, 145, 0);
    pop();

    push();
    rotate(120);
    strokeWeight(2);
    stroke(255);
    line(141, 0, 145, 0);
    pop();

    push();
    rotate(150);
    strokeWeight(2);
    stroke(255);
    line(141, 0, 145, 0);
    pop();

    push();
    rotate(210);
    strokeWeight(2);
    stroke(255);
    line(141, 0, 145, 0);
    pop();

    push();
    rotate(240);
    strokeWeight(2);
    stroke(255);
    line(141, 0, 145, 0);
    pop();

    push();
    rotate(-30);
    strokeWeight(2);
    stroke(255);
    line(141, 0, 145, 0);
    pop();

    push();
    rotate(-60);
    strokeWeight(2);
    stroke(255);
    line(141, 0, 145, 0);
    pop();





    push();
    rotate(90);
    fill(255);
    noStroke();
    if (mn < 10) {
        text(hr + ':0' + mn + ':' + sc, -160, -150)
    } else if (sc < 10) {
        text(hr + ':' + mn + ':0' + sc, -160, -150)
    } else if (mn < 10 && sc < 10) {
        text(hr + ':' + mn + ':0' + sc, -160, -150)
    } else {
        text(hr + ':' + mn + ':' + sc, -160, -150)
    }
    pop();

    strokeWeight(4);
    stroke(255, 100, 150);
    noFill();
    let end1 = map(sc, 0, 60, 0, 360);
    arc(0, 0, 278, 278, 0, end1);


    stroke(150, 100, 255);
    let end2 = map(mn, 0, 60, 0, 360);
    arc(0, 0, 267, 267, 0, end2);

    push();
    rotate(end2);
    strokeWeight(5.5);
    stroke(150, 100, 255);
    line(0, 0, 110, 0);
    pop();

    stroke(150, 255, 100);
    let end3 = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 256, 256, 0, end3);

    push();
    rotate(end3);
    strokeWeight(6.5);
    stroke(150, 255, 100);
    line(0, 0, 70, 0);
    pop();

    push();
    rotate(end1);
    strokeWeight(2);
    stroke(255, 100, 150);
    line(0, 0, 120, 0);
    pop();

    push();
    rotate(end1 + 180);
    strokeWeight(2);
    stroke(255, 100, 150);
    line(0, 0, 20, 0);
    pop();

    strokeWeight(15);
    stroke(255);
    point(0, 0);

    strokeWeight(5);
    stroke(0);
    point(0, 0);
}
