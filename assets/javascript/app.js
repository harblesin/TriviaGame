$(document).ready(function () {

var timeRemaining = 10;
var pageNum = 0;
var correctAns = 0;
var incorrectAns = 0;
var switchSlideDelay = 3;
var gameReady = false;
var intervalId;
var clockRunning = false;
var delayRunning = false;
var ended = true;
var timer  = $(".timer");
var question = $(".question");
var questions = [
    "Where will you be when the revolution comes?",
    "Do you believe in God?"
]
var answers = [
    firstAns = {
        a : "under my bed",
        b : "crying",
        c : "fighting for my life",
        d : "dead",
    }
   // secondAns = {

  ///  }
]

//initial function that activates the game up clicking
//the content div


function start(){
    
    if(!clockRunning){
    clockRunning = true;
    $(".content").empty();
    
    $(".content").append(timer);
    change();
    intervalId = setInterval (timeLeft, 1000);
    
    
    
    
    }
   //else{
     //  intervalId = setInterval (switchDelay, 1000)
    //}
}

function timeLeft(){

    
    if(timeRemaining == 0){
        timer.text("Oh no! You've run out of time!");
        timer.append(question);
        question.text("The correct answer was ");

        intervalId = setInterval (switchDelay, 1000);
       
    }
    else{
        clockRunning = true;
        timeRemaining--    
        timer.text("Time Remaining: " + timeRemaining + " Seconds");
    }

    
}

function switchDelay(){
    

    if(switchSlideDelay == 0){
        delayRunning = false;
        change();
   }
   else{
       delayRunning = true;
        switchSlideDelay--;
    }
}


function change(){

    if(!delayRunning){
    var question = $(".question");
    question.text("yes");
    timer.append(question);

    var answer1 = $("<li>");
    answer1.html(answers[pageNum].a);
    question.add(answer1)
    }
   // question.html(questions[2]);


   // $("#one").html("yres");
   // $("#two").html(answers[i].b);
    //$("#three").html(answers[gameLength](i));
    //$("#four").html(answers[gameLength](i));

    


}


$(".content").click(function(){

    start();
}) ;









});
