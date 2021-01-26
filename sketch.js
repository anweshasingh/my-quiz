var canva;
var gameState = 0;
var contestantCount, database, quiz, question, contestant;

function setup(){
  canvas = createCanvas(850,400);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  
}
