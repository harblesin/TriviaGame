$(document).ready(function () {

var timeRemaining = 30;
var pageNum;
var correctAns = 0;
var incorrectAns = 0;
var timeOut = false;
var switchSlideDelay = 3;
var gameReady = false;
var intervalId;
var answers = [
    firstAns = {
        a : 1,
        b : 2,
        c : 2,
        d : 1,
    }
    secondAns = {

    }
]

$(".content").click(function(){
    start();
}) 


function start(){
     var timer = $("div")
     timer.addClass("timer");
     timer.text("Time Remaining: " + timeRemaining + " Seconds");
     $("p").append(timer);
     //timeOut(timeLeft, 1000);


}
function timeLeft(){
    
}

});
