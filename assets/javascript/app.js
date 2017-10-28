//VARIABLES
//==================================================================
var questionArray = [{
	question: "Thomas is older than Cindy. <br> Bob is older than Thomas. <br> Cindy is older than Bob. <br>If the first two statements are true, the third statement is:",
	choices: ["true", "false", "uncertain"],
	answer: 1
},{
	question: "34:17 as 96:",
	choices: ["53", "43", "48", "49"],
	answer: 3
},{
	question: "2, 6, 14, 30, 62, 126, ___?",
	choices: ["152", "254", "262", "268"],
	answer: 1
},{
	question: "Four people witness a mugging. Each have a different description of the suspect. Which is probably correct?",
	choices: ["Average height, thin, middle aged", "tall, thin, middle aged", "tall, thin, young", "tall, average weight, middle aged"],
	answer: 1
},{
	question: "Yard is to inch as quart is to:",
	choices: ["ounce", "cup", "gallon", "pint"],
	answer: 0
},{
	question: "23=?",
	choices: ["13x2-4", "22x0+1", "22+2/2", "44+2/2"],
	answer: 2
},{
	question: "Which of the following can be arranged into a 5-letter word?",
	choices: ["IKOSL", "DNIF", "RPUNP", "TOOMT"],
	answer: 3
},{
	question: "1.5, 2.3, 3.1, 3.9, __?",
	choices: ["4.7", "4.3", "5.2", "4.6"],
	answer: 0
},{
	question: "Book is to Reading as Spoon is to:",
	choices: ["mouth", "eating", "plate", "toasting"],
	answer: 1
},{
	question: "6, 15, 28, 45, __? ",
	choices: ["68", "54", "56", "66"],
	answer: 3
}];

var current;
var correct;
var incorrect;
var userClick;
var answered;

var timer = 0;
var intervalId;
var unanswered = 0;
var correctTotal = 0;


//FUNCTIONS
//==================================================================

function startGame() {
	$("#correct").empty();
	$("#incorrect").empty();
	$("#unanswered").empty();
	current = 0;
	correct = 0;
	incorrect = 0;
	unanswered = 0;
	askQuestion();
}

function askQuestion() {
	$("#question").html(questionArray[current].question);
	for(var i = 0; i < 4; i++) {
		var answers = $('<div>');
		answers.text(questionArray[current].choices[i]);
		answers.attr({"data-index": i });
		answers.addClass("selected");
		$("#answers").append(answers);
	}
	run();

	$(".selected").click(function() {
		userClick = $(this).data("index");
		clearInterval(intervalId);
		userGuess(); 
	});
}

function run() {
	timer = 21;
	intervalId = setInterval(decrement, 1000);
}

function decrement() {
	timer--;
	$("#timer").html(timer);
}


function userGuess(){
	$(".selected").empty();
	$("#question").empty();

	var correctChoice = questionArray[current].answer;
	console.log(correctChoice);

	if(userClick == correctChoice) {
		correct++;
	} else if(userClick != correctChoice) {
		incorrect++;
	} else {
		unanswered++;
		run();
	}

	if (current == (questionArray.length - 1)) {
		results();
	} else {
		current++;
		setTimeout(askQuestion, 1000);
	}
}

function results() {
	$(".results").show();
	$("#correct").html("Correct: " + correct);
	$("#incorrect").html("Incorrect: " + incorrect);
	$("#unanswered").html("Unanswered: " + unanswered);
}
	


//START
//==================================================================



$("#question-container").hide();
$(".results").hide();

$("button").click(function() {
	$("#question-container").show();
	$(".start").hide();
	startGame();
});

//HOW TO INCORPORATE THIS?
//=================================================================

if (timer = 0) {
run();
	unanswered++;
	askQuestion();
}



//=================================================================
//THINGS I STILL NEED TO FIGURE OUT
//=================================================================
//
// DONE - PUT MY QUESTIONS INTO AN ARRAY, COMPLETE WITH ANSWERS AND CORRECT ANSWERS
// DONE - CONFIGURE MY ON CLICKS TO THE QUESTION
// DONE - CREATE FOR LOOP FOR QUESTIONS TO RUN THROUGH EACH
//CREATE A WAY TO COMPLETE QUESTIONS AND SHOW RESULTS
// DONE - PUSH MY CORRECT, INCORRECT, AND UNANSWERED ANSWERS TO RESULTS DIV