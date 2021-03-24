var canvas;
var gameState = 0;
var contestantCount,  contestant, allContestants;
var database;
var quiz;
var question;
var marvelBg;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database()
  
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  question = new Question();
}


function draw(){
  background("pink");

  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
    //question.display();
  }

  //Ma'am this is how I did
  // if(gameState === 2){
  //   quiz.play();
  // }
  
}
