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
    var doneClicked = false;
    var ended = true;
    var timer  = $(".timer");
    var questions = [

        "Which of these is not a primary color?",
        "Who is known for a painting of melting clocks?",
        "What famous artist painted 'American Gothic'?",
        "Which philosopher was quoted as saying, 'In a rich mans house, there is no place to spit but his face'",
        "What was Caesar told to beware?",
        "Do you believe in God?",
        "Where will you be when the revolution comes?",

    ]
    var answers = [
        [
            "red",
            "blue",
            "purple",
            "yellow"
        ],
        [
            "Picasso",
            "Salvador Dali",
            "Frank Lloyd Wright",
            "Edward Hopper"
        ],
        [
            "Rothko",
            "Basquiat",
            "Andy Warhol",
            "Grant Wood"
        ],
        [
            "Plato",
            "Diogenes",
            "Hippocrates",
            "Friedric Nietzche"
        ],
        [
            "A dark end",
            "Betrayal",
            "The Ides of March",
            "The Tides of Starch"
        ],
        [
            "I refuse to answer this question",
            "I refuse to answer this question",
            "I refuse to answer this question",
            "I refuse to answer this question"
        ],
        [
            "Under my bed",
            "Crying",
            "Fighting for the People",
            "Dead"
        ]
       
    ]
    

function populate(){

    if(!clockRunning){
    $(".content").empty();
    $(".content").append(timer);
    
    timer.text("Time Remaining: " + timeRemaining + " Seconds");
    intervalId = setInterval (timeLeft, 1000);
    
    var form = $("<form>");

    for(var  j = 0; j < questions.length; j++){
        var question = $("<h2>")
        $(".content").append(question);
        question.text(questions[j]);
        question.append(form);

        for(var i = 0; i < 4; i++){
        var answer = $("<form><br><input type = 'radio' name = 'answer' value = answers[j][i]>" 
        + answers[j][i] + "</form>");
        //answer.text(answers[j][i]);
        question.append(answer);

          }
    
    }
  
    }
    else{
        clockRunning = true;
    }
}
    
   function timeLeft(){
    
        
       if(timeRemaining == 0){
           $(".content").empty();
           $(".content").append(timer);
           timer.text("Oh no! You've run out of time!");
           timer.append($("<br>"))
           timer.append("Here are your results!");
           timer.insertAfter("Correct Answers: " + correctAns);
           ("Incorrect Answers: " + incorrectAns).insertAfter(timer);
    
            //intervalId = setInterval (switchDelay, 1000);
           
       }

       else if(doneClicked){
        $(".content").empty();
        $(".content").append(timer);
        timer.text("All done!");
        ("Here are your results!").insertAfter(timer);
        timer.insertAfter("Correct Answers: " + correctAns);
        ("Incorrect Answers: " + incorrectAns).insertAfter(timer);
       }

       else{
           clockRunning = true;
            timeRemaining--    
            timer.text("Time Remaining: " + timeRemaining + " Seconds");
       }
    

        
    }
    
 
    $(".content").click(function(){
    
        populate();
    }) ;
    

    
    });
    