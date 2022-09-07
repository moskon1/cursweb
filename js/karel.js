function traseu(){
   beepersRight();
   upLeft();
   beepersLeft();
   upRight();
      beepersRight();
   upLeft();
   beepersLeft();
   upRight();
      beepersRight();
}
function upRight() {
   turnRight();
   move();
   turnRight();
}
function upLeft() {
   turnLeft();
   move();
   turnLeft();
}
function beepersRight() {
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();  
}
function beepersLeft() {
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}