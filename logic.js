// var list
var timer1 = document.querySelector("#timer");
var highscore1 = document.querySelector("#highscore");
var textSpace1 = document.querySelector("#text-space");
var button1 = document.querySelector("#buttonOne");
var button2 = document.querySelector("#buttonTwo");
var button3 = document.querySelector("#buttonThree");
var button4 = document.querySelector("#buttonFour");
var answer1 = document.querySelector("#answer");
var start1 = document.querySelector("#buttonStart");


var secondsLeft = 190;
var scoreBoard1 = 0;
scoreBoard1.innerHTML = scoreBoard1;
var ticking;
var questionsIndex = 9;
var currentQuestionIndex = 0;

// functions
function tick() {
    if (ticking == true){
    secondsLeft = secondsLeft -1;
  timer1.innerHTML = ("Time Left: " + secondsLeft);
}
    if (secondsLeft == 0) {
        stopgame();
}
};
  setInterval(tick, 1000);


  function startQuestions(){
    var q = questionsArray[currentQuestionIndex];
    textSpace1.innerHTML = "<p>" + q.question + "</p>";
    button1.innerHTML = "<p>" + q.optionA + "</p>";
    button2.innerHTML = "<p>" + q.optionB + "</p>";
    button3.innerHTML = "<p>" + q.optionC + "</p>";
    button4.innerHTML = "<p>" + q.optionD + "</p>";
    // answer1.hidden = true;
      
  };

  function startGame(){
      start1.hidden = true;
      button1.hidden = false;
      button2.hidden = false;
      button3.hidden = false;
      button4.hidden = false;
      ticking = true;
      startQuestions();
      selectOption;
  };
  function stopgame(){
      ticking = false;
      start1.hidden = true;
      button1.hidden = true;
      button2.hidden = true;
      button3.hidden = true;
      button4.hidden = true;
      answer1.hidden = true;
      textSpace1.innerHTML = ("your highscore is " + scoreBoard1 + " , good job!");
    };
    var correctAnswer;
  function selectOption(){

    if ( correctAnswer == questionsArray[currentQuestionIndex].answer){
        scoreBoard1++;
        answer1.hidden = false;
        answer1.innerHTML = "correct";
        currentQuestionIndex++;
        if (currentQuestionIndex <= questionsIndex) {
            startQuestions();
        }
        else {
            stopgame();
        }
    }
    else {
        answer1.hidden= false;
        answer1.innerHTML = "incorrect, correct answer is: " + questionsArray[currentQuestionIndex].answer;
        currentQuestionIndex++;
        if (currentQuestionIndex <= questionsIndex) {
            startQuestions();
        }
        else {
            stopgame();
        }
  };
}

// objects to hold questions and answers
var questionsArray = [{
    question: "What is the HTML tag under which you link javascript code?",
    optionA: "Logic",
    optionB: "Script",
    optionC: "Action",
    optionD: "Stylesheet",
    answer: "B"
}, {
    question: "What is the correct syntax to display HELLO WORLD! in a alert box?",
    optionA: "text(\"HELLO WORLD!\")",
    optionB: "message(\"HELLO WORLD!\")",
    optionC: "alert(\"HELLO WORLD!\")",
    optionD: "alertbox(\"HELLO WORLD!\")",
    answer: "C"
}, {
    question: "What is the correct syntax for linking to an external javascript file?",
    optionA: "javascript link=",
    optionB: "java src=",
    optionC: "link to src=",
    optionD: "script src=",
    answer: "D"
}, {
    question: "an external javascript must contain a script tag.",
    optionA: "true",
    optionB: "false",
    optionC: "",
    optionD: "",
    answer: "B"
}, {
    question: "Javascript is a ___-side programming language?",
    optionA: "both",
    optionB: "server",
    optionC: "client",
    optionD: "neither",
    answer: "A"
}, {
    question: "How do you find the min of x and y in javascript?",
    optionA: "find.min(x,y)",
    optionB: "Math.min(x,y)",
    optionC: "math.min(xy)",
    optionD: "get(-x-y)",
    answer: "B"
}, {
    question: "What will the code Boolean(3<7) return?",
    optionA: "NaN",
    optionB: "False",
    optionC: "True",
    optionD: "undefined",
    answer: "C"
}, {
    question: "How do you connect to an HTML element by its ID?",
    optionA: "findelementid()",
    optionB: "getid()",
    optionC: "elementid()",
    optionD: "getelementbyid()",
    answer: "D"
}, {
    question: "How do you make a button interactable when you click it?",
    optionA: ".addeventlistener",
    optionB: ".makeclickable",
    optionC: ".addlistenertoelement",
    optionD: ".addfunctiontobutton",
    answer: "A"
}, {
    question: "Which built-in method adds elements to the end of an array and returns the new length?",
    optionA: "push()",
    optionB: "add()",
    optionC: "end()",
    optionD: "complete()",
    answer: "A"
}
];

// event listeners
start1.addEventListener("click", startGame);
button1.addEventListener("click", function() {
    correctAnswer = button1.dataset.value
    console.log(correctAnswer)
    selectOption();
});
button2.addEventListener("click", function() {
    correctAnswer = button2.dataset.value
    console.log(correctAnswer)
    selectOption();
});
button3.addEventListener("click", function() {
    correctAnswer = button3.dataset.value
    console.log(correctAnswer)
    selectOption();
});
button4.addEventListener("click", function() {
    correctAnswer = button4.dataset.value
    console.log(correctAnswer)
    selectOption();
});