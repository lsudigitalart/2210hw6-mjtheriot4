var img;

function preload(){
  img01 = loadImage("img/img01.jpg");
  img02 = loadImage("img/img02.jpg");
  img03 = loadImage("img/img03.jpg");
  img04 = loadImage("img/img04.jpg");
  img05 = loadImage("img/img05.jpg");
  img06 = loadImage("img/img06.jpg");
  img07 = loadImage("img/img07.jpg");
  img08 = loadImage("img/img08.jpg");
  img09 = loadImage("img/img09.jpg");
  img10 = loadImage("img/img10.jpg");
  img11 = loadImage("img/img11.jpg");
  img12 = loadImage("img/img12.jpg");
  img13 = loadImage("img/img13.jpg");
  img14 = loadImage("img/img14.jpg");
  img15 = loadImage("img/img15.jpg");
  img16 = loadImage("img/img16.jpg");
  img17 = loadImage("img/img17.jpg");
  img18 = loadImage("img/img18.jpg");
  img19 = loadImage("img/img19.jpg");
  img20 = loadImage("img/img20.jpg");
  img21 = loadImage("img/img21.jpg");
  img22 = loadImage("img/img22.jpg");
  img23 = loadImage("img/img23.jpg");
  img24 = loadImage("img/img24.jpg");
  img25 = loadImage("img/img25.jpg");
  img26 = loadImage("img/img26.jpg");
  img27 = loadImage("img/img27.jpg");
  img28 = loadImage("img/img28.jpg");
  img29 = loadImage("img/img29.jpg");
  img30 = loadImage("img/img30.jpg");
  // img31 = loadImage("img/img31.jpg");
  img32 = loadImage("img/img32.jpg");
  img33 = loadImage("img/img33.jpg");
  img34 = loadImage("img/img34.jpg");
  img35 = loadImage("img/img35.jpg");
  img36 = loadImage("img/img36.jpg");
  img37 = loadImage("img/img37.jpg");
  img38 = loadImage("img/img38.jpg");
  img39 = loadImage("img/img39.jpg");
  img40 = loadImage("img/img40.jpg");
  img41 = loadImage("img/img41.jpg");
  img42 = loadImage("img/img42.jpg");
  img43 = loadImage("img/img43.jpg");
  img44 = loadImage("img/img44.jpg");
  img45 = loadImage("img/img45.jpg");
  background = loadImage("img/map.jpg");
}
function setup(){
  createCanvas(1200, 700);
  println("create");
  //rectMode(CENTER);
}

var timeline = 0;
var timer = 60 * 15;
var printImg;
var toggle = 1

function draw (){
printImg = floor(random(10,46));
if (timeline % timer == 0) {
  image(background,0,0);
  textSize(30);
  text ("click anywhere", 10, 30);
}
if (mouseIsPressed && toggle == 1) {

  switch (printImg) {
    case 01:
      image(img01,mouseX,mouseY);
      break;
    case 02:
      image(img02,mouseX,mouseY);
      break;
    case 03:
      image(img03,mouseX,mouseY);
      break;
    case 04:
      image(img04,mouseX,mouseY);
      break;
    case 05:
      image(img05,mouseX,mouseY);
      break;
    case 06:
      image(img06,mouseX,mouseY);
      break;
    case 07:
      image(img07,mouseX,mouseY);
      break;
    case 08:
      image(img08,mouseX,mouseY);
      break;
    case 09:
      image(img09,mouseX,mouseY);
      break;
    case 10:
      image(img10,mouseX,mouseY);
      break;
    case 11:
      image(img11,mouseX,mouseY);
      break;
    case 12:
      image(img12,mouseX,mouseY);
      break;
    case 13:
      image(img13,mouseX,mouseY);
      break;
    case 14:
      image(img14,mouseX,mouseY);
      break;
    case 15:
      image(img15,mouseX,mouseY);
      break;
    case 16:
      image(img16,mouseX,mouseY);
      break;
    case 17:
      image(img17,mouseX,mouseY);
      break;
    case 18:
      image(img18,mouseX,mouseY);
      break;
    case 19:
      image(img19,mouseX,mouseY);
      break;
    case 20:
      image(img20,mouseX,mouseY);
      break;
    case 21:
      image(img21,mouseX,mouseY);
      break;
    case 22:
      image(img22,mouseX,mouseY);
      break;
    case 23:
      image(img23,mouseX,mouseY);
      break;
    case 24:
      image(img24,mouseX,mouseY);
      break;
    case 25:
      image(img25,mouseX,mouseY);
      break;
    case 26:
      image(img26,mouseX,mouseY);
      break;
    case 27:
      image(img27,mouseX,mouseY);
      break;
    case 28:
      image(img28,mouseX,mouseY);
      break;
    case 29:
      image(img29,mouseX,mouseY);
      break;
    case 30:
      image(img30,mouseX,mouseY);
      break;
    case 41:
      image(img41,mouseX,mouseY);
      break;
    case 42:
      image(img42,mouseX,mouseY);
      break;
    case 43:
      image(img43,mouseX,mouseY);
      break;
    case 44:
      image(img44,mouseX,mouseY);
      break;
    case 45:
      image(img45,mouseX,mouseY);
      break;
    case 46:
      image(img46,mouseX,mouseY);
      break;
    case 47:
      image(img47,mouseX,mouseY);
      break;
    case 48:
      image(img48,mouseX,mouseY);
      break;
    case 49:
      image(img49,mouseX,mouseY);
      break;
    case 50:
      image(img50,mouseX,mouseY);
      break;
  }
    toggle = 0;
}
  if (timeline % 20 == 0) { toggle = 1}
  timeline++;

}
