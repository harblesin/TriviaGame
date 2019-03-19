//just as i did the css, I preface this js file with the clarification that it is a repurposed chunk from
//my progress on another idea and different stylings as well as it being the other homework difficulty
//and i am fully aware of what in my eyes seems to be a bit messy code that could be done much more concise
// forgive me : )
$(document).ready(function () {

    //here i declare all the variables i will be using, the initial value for the timer,
    //vars tracking correct and incorrect answers, booleans checking for a running timer, 
    //and the arrays of questions and answers
    var timeRemaining = 30;
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
    var timer = $(".timer");
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
            "Friedrich Nietzsche"
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

    //this is the initial function that contains the main code. Is run upon clicking past the start
    //screen, fills the content with the questions and answers
    function populate() {

        //a general widely encompassing if statement to judge the needed calls of 
        //functions based on timer status
        if (!clockRunning) {
            $(".content").empty();
            $(".content").append(timer);

            //iniitilizes the timer element text and being the incrementing of the time
            //using the timeLeft function
            timer.text("Time Remaining: " + timeRemaining + " Seconds");
            intervalId = setInterval(timeLeft, 1000);

            //this for loop loops through the questions array, dynamically creating
            //h2 elements and houses the array variables at the appropriate places
            //of the array, or j. In addition each time a question is created, creates
            //a form element that will be appended, housing the answer data
            for (var j = 0; j < questions.length; j++) {
                var question = $("<h2>")
                $(".content").append(question);
                var form = $("<form>");
                question.text(questions[j]);
                question.append(form);

                //this nested loop loops through the potential of four options,
                //the answers, for each variable, or question of its parent loop
                //pushing the appropriate answer text and using jquery
                //appending that information into a dynamically created input element
                for (var i = 0; i < 4; i++) {
                    var answer = $("<br><input type = 'radio' name = 'choice'>" +
                        answers[j][i] + "</input>");
                    answer.val(answers[j][i])
                    form.append(answer);

                    //inside the for loop for the creation each answer input radio elements
                    //is this on click listener, which contains an if statement checking the
                    //value of the clicked element, "this", against the correct answer for each
                    //question, incrementing the correct answers, otherwise, else,
                    //increasing the incorrect answers
                    //i would've liked to write in code to keep it from incrementing either variable
                    //once a click had been made, cancelling any futher even listen for each
                    //radio element, but i did not have the time. And would have to 
                    //look further into the logic of doing so
                    answer.click(function () {
                        if ($(this).val() == "purple" ||
                            $(this).val() == "Salvador Dali" ||
                            $(this).val() == "Grant Wood" ||
                            $(this).val() == "Diogenes" ||
                            $(this).val() == "The Ides of March" ||
                            $(this).val() == "I refuse to answer this question" ||
                            $(this).val() == "Fighting for the People") {
                            correctAns++
                            console.log(correctAns);
                        } else {
                            incorrectAns++
                        }
                    });
                }

            }

            //backing out past the parent for loop, here we dynamically create, write html for,
            //and append the done button to the very last question, once the loop has completed
            doneButton = $("<div>");
            doneButton.html("DONE");
            doneButton.addClass("done");
            form.append(doneButton);

        }
        //going back to the if else statement in the initial scope of the function this is all 
        //nested in, if the if check for a running timer does not come up false, meaning the timer
        //has run to zero, the elements have been created, meaning the done button has been
        //created, this else statement sets the timer back to running so as to prevent it
        //continually running, and listens for a click of the done button
        else {
            clockRunning = true;

            //when the done element is clicked, the listen runs an anonymous function
            //clearing the entire content div and rewriting the html to display the
            //results, ie the users correct and incorrect answers
            $(".done").click(function () {
                doneClicked = true;
                $(".content").empty();
                $(".content").append(timer);
                timer.text("All done!");
                var results = $("<p>");
                results.html("Here are your results!");
                timer.append(results);
                var correctAnswers = $("<p>");
                correctAnswers.html("Correct Answers: " + correctAns + " out of 7!");
                results.append(correctAnswers);
                var incorrectAnswers = $("<p>");
                incorrectAnswers.html("Incorrect Answers: " + incorrectAns + " out of 7!");
                correctAnswers.append(incorrectAnswers);

            })
        }
    }

    //this is a function defining the checks to govern and run the timer
    //and what tells the timer to increment
    function timeLeft() {

        //this if statement checks to see if the timer has run to 0, if so does exactly what
        //clicking the done button does, only displaying the fact that the user had run out of time
        if (timeRemaining == 0) {
            $(".content").empty();
            $(".content").append(timer);
            timer.text("Oh no! You've run out of time!");
            var results = $("<p>");
            results.html("Here are your results!");
            timer.append(results);
            var correctAnswers = $("<p>");
            correctAnswers.html("Correct Answers: " + correctAns + " out of 7!");
            results.append(correctAnswers);
            var incorrectAnswers = $("<p>");
            incorrectAnswers.html("Incorrect Answers: " + incorrectAns + " out of 7!");
            correctAnswers.append(incorrectAnswers);
        } 

        //otherwise, the other circumstance would be tipped off by a boolean governed
        //by the done button click. this is a redundant boolean and to my knowledge is 
        //understandably not needed, but i ran into a few bugs trying to eliminate it
        //and in the process ran out of time doing so
        else if (doneClicked) {
            $(".content").empty();
            $(".content").append(timer);
            timer.text("All done!");
            var results = $("<p>");
            results.html("Here are your results!");
            timer.append(results);
            var correctAnswers = $("<p>");
            correctAnswers.html("Correct Answers: " + correctAns + " out of 7!");
            results.append(correctAnswers);
            var incorrectAnswers = $("<p>");
            incorrectAnswers.html("Incorrect Answers: " + incorrectAns + " out of 7!");
            correctAnswers.append(incorrectAnswers);
        } 

        //lastly, the cap of this if statement, if the timer has not run out, the function
        //continues to decrement the variable governing the timer and its relative functions
        //and events, and displays the time accordingly
        else {
            clockRunning = true;
            timeRemaining--
            timer.text("Time Remaining: " + timeRemaining + " Seconds");
        }
    }

    //and finally, at the very end, a simple call that initiates it all,
    //listening for your click on the click to start element
    //allowing all other functions to occur, like a spicy dominoes-uh
    $(".content").click(function () {
        populate();
    });
});