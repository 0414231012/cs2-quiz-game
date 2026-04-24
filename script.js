console.log("Script started");

/* Questions objects should be formatted like this:
{
    question: "What is the capital of Arizona?",
    option1: "Tucson",
    option2: "Phoenix",
    option3: "Yuma",
    option4: "Flagstaff",
    answer: "Phoenix"
}
*/

// TODO: Create an array of objects to store the questions, options, and answer
let questions = [
    {
        question: "What is the capital of Arizona?",
        option1: "Pheonix",
        option2: "Yuma",
        option3: "New Mexico",
        option4: "Ohio",
        answer: "Pheonix",
    },
    {
        question: "How many states in the US?",
        option1: "67",
        option2: "51",
        option3: "50",
        option4: "4",
        answer: "50",
    },
    {
        question: "Which one is not a basketball player",
        option1: "Lebron James",
        option2: "Lionel Messi",
        option3: "George Russel",
        option4: "Stephen Curry",
        answer: "Lionel Messi",
    }
]
// TODO: Declare an empty array that will hold the user's answers
let userAnswers = [];

// TODO: Declare a variable to keep track of which question (index) we are on

let qNum = 0;

function showNextQuestion() {
    // Check if its the end of quiz
    if (qNum >= questions.length) {
        checkAnswers();
        return;
    }

    // Get the current question
    let currQues = questions[qNum]
    // Set the text of the question element
    let question = document.getElementById("question")
    question.innerText = currQues.question;
    // TODO: Set the text of each option element
    let option1 = document.getElementById("option1text");
    option1.innerText = currQues.option1;

    let option2 = document.getElementById("option2text");
    option2.innerText = currQues.option2;

    let option3 = document.getElementById("option3text");
    option3.innerText = currQues.option3;

    let option4 = document.getElementById("option4text");
    option4.innerText = currQues.option4;

}

// TODO: Call showNextQuestion to load the first question when the page loads
showNextQuestion();

function submitAnswer(event) {
    console.log("Submit clicked");
    // TODO: Prevent the form from reloading the page
    event.preventDefault();
    // Get the radio button input elements
    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");
    let option3 = document.getElementById("option3");
    let option4 = document.getElementById("option4");

    // TODO: Get the current question
    let currQues = questions[qNum];
    

    // TODO: Use a conditional (if/else-if) to check which option was clicked and push the option text into the userAnswer array
    if (option1.checked) {
        userAnswers.push(currQues.option1);
        option1.checked = false
    }
    else if (option2.checked){
        userAnswers.push(currQues.option1);
        option2.checked = false
    }
    else if (option3.checked){
        userAnswers.push(currQues.option1);
        option3.checked = false
    }
    else if (option4.checked){
        userAnswers.push(currQues.option1);
        option4.checked = false
    }
    else {
        alert("Pick one!")
        return
    }
    // TODO: Add one to the question index
    qNum++
    // TODO: Load the next question
    showNextQuestion();
}

function checkAnswers() {
    // TODO: Iterate through the user answers array and count how many are correct
    let numCorrect = 0;
    for (let i = 0; i < userAnswers.length; i++) {
        let userAnswer = userAnswers[i]; 
        let question = questions[i];
        if (userAnswer == questions.answer){
            numCorrect++;
        }
    }
    // TODO: Show an alert to the user with how many they got right out of the total
    alert("You got " + numCorrect + " Right! Congrats!"); 
    // TODO: Reset and start over
}