# javascript-quiz
This project focused on the use of javascript to edit and manipulate a HTML webpage. I was able to do this with the use of javascript tags such as innerHTML and textContent. 

# no install, no wait

This file works on any webpage, so the viewing of this project is as simple as following the link listed below.
https://tussingj89.github.io/javascript-quiz/


# magic HTML

Below is a sample of the code that I used to make my javascript quiz. As it shows I was able to change the text inside the html with javascript using the innerhtml tags as well as hide and display my buttons when needed.


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
        answer1.innerHTML = "incorrect, correct answer was: " + questionsArray[currentQuestionIndex].answer;
        currentQuestionIndex++;
        if (currentQuestionIndex <= questionsIndex) {
            startQuestions();
        }
        else {
            stopgame();
        }
  };
}

# snapshot of the quiz page

![javascript quiz](assets/javascript-quiz.png)
