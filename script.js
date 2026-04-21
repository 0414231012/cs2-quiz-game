console.log("Script started");

let questions = [
    {
        question: "What is the capital of Arizona?",
        choice1: "Tucson",
        choice2: "Phoenix",
        choice3: "Yuma",
        choice4: "Flagstaff",
        answer: "Phoenix"
    },
    {
        question: "How many nickels in a quarter?",
        choice1: 25,
        choice2: 10,
        choice3: 5,
        choice4: 3,
        answer: 5
    }
]

let userAnswers = [];

let index = 0;

function showNextQuestion() {
    if (index == questions.length) {
        checkAnswers();
        return;
    }
    let current = questions[index];
    
    let questionText = document.getElementById("question");
    questionText.innerText = current.question;

    let choice1 = document.getElementById("choice1text");
    choice1.innerText = current.choice1;

    let choice2 = document.getElementById("choice2text");
    choice2.innerText = current.choice2;

    let choice3 = document.getElementById("choice3text");
    choice3.innerText = current.choice3;

    let choice4 = document.getElementById("choice4text");
    choice4.innerText = current.choice4;
}

function submitAnswer(event) {
    event.preventDefault();
    let option1 = document.getElementById("choice1");
    let option2 = document.getElementById("choice2");
    let option3 = document.getElementById("choice3");
    let option4 = document.getElementById("choice4");

    let currentQ = questions[index];
    if (option1.checked) {
        userAnswers.push(currentQ.choice1);
        option1.checked = false;
    }
    else if (option2.checked) {
        userAnswers.push(currentQ.choice2);
        option2.checked = false;
    }
    else if (option3.checked) {
        userAnswers.push(currentQ.choice3);
        option3.checked = false;
    }
    else if (option4.checked) {
        userAnswers.push(currentQ.choice4);
        option4.checked = false;
    }
    else {
        alert("You must select an answer");
        return;
    }

    console.log(userAnswers);
    index++;
    setTimeout(showNextQuestion, 1000);
}

function checkAnswers() {
    let numCorrect= 0;
    for (let i = 0; i < userAnswers.length; i++) {
        let userAns = userAnswers[i];
        let question = questions[i];
        if (userAns == question.answer) {
            numCorrect++;
        }
    }
    alert("You got " + numCorrect + " out of " + questions.length + " correct!");
    index = 0;
    showNextQuestion();
}

showNextQuestion();