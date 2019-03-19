$(document).ready(function () {

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


    function populate() {

        if (!clockRunning) {
            $(".content").empty();
            $(".content").append(timer);

            timer.text("Time Remaining: " + timeRemaining + " Seconds");
            intervalId = setInterval(timeLeft, 1000);


            for (var j = 0; j < questions.length; j++) {
                var question = $("<h2>")
                $(".content").append(question);
                var form = $("<form>");

                question.text(questions[j]);
                question.append(form);
                //question.append(form);

                for (var i = 0; i < 4; i++) {
                    var answer = $("<br><input type = 'radio' name = 'choice'>" +
                        answers[j][i] + "</input>");
                    answer.val(answers[j][i])
                    form.append(answer);
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
                        console.log($(this).val());

                    });
                }

            }



            doneButton = $("<div>");
            doneButton.html("DONE");
            doneButton.addClass("done");
            form.append(doneButton);

        } else {
            clockRunning = true;
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

    function timeLeft() {


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

            //intervalId = setInterval (switchDelay, 1000);

        } else if (doneClicked) {
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
            

        } else {
            clockRunning = true;
            timeRemaining--
            timer.text("Time Remaining: " + timeRemaining + " Seconds");
        }



    }

    $(".content").click(function () {

        populate();

    });

});