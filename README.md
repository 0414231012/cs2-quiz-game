# cs2-quiz-game

# Learning Target
I am learning how to use objects and arrays to work with data in a quiz app

# Success Criteria
- I can create an array of objects to store quiz questions and answers​
- I can use a for loop to iterate through an array of user answer and count how many are correct​
- I can use DOM functions to set text and get form values

# Development Outline

1. Store each question, answer choices, and the correct answer in an object (we'll start with two)
    ```javascript
    {​
    question: "What is the capital of Arizona?",​
    option1: "Tucson",​
    option2: "Phoenix",​
    option3: "Yuma",​
    option4: "Flagstaff",​
    answer: "Phoenix"​
    }
    ```
2. Create array of questions: ```let questions = [{ }, { }, { } …];​```
3. Declare a global variable to keep track of what question we are on​
4. Write a function ```showNextQuestion()``` to get the current question and set the text on the page​
5. Create an empty array to store the user's answers​
6. Write a function ```submitAnswer(event)``` to process the form ​
7. Check which radio button the user clicked and add the corresponding choice to the user's answer array​
8. Update the index for the question array​
9. Show the next question​
10. Update ```showNextQuestion()``` function to call a ```checkAnswers()``` function when the last index is reached which we will write next​
11. Write the ```checkAnswers()``` function​
    - Declare a variable to store/count how many answers the user got correct​
    - Use one for loop to iterate through both arrays at the same time (they both have the same length)​
        - Get the current user answer​
        - Get the current question​
        - Use an if to check if the user answer == question.answer, if it does, add one to the variable tracking how many they get correct​
    - Display an alert​ with their results
    - Reset the index and user array​
    - Call showNextQuestion() to restart the quiz