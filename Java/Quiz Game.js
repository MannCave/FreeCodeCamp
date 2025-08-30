// Improved quiz data with corrections
const questions = [
    {
        category: "Color",
        question: "What is your favorite color?",
        choices: ["blue", "red", "green"],
        answer: "red"
    },
    {
        category: "Living Place",
        question: "Where do you live?",
        choices: ["Denton", "Dallas", "Fort Worth"],
        answer: "Denton"
    },
    {
        category: "Field of Study",
        question: "What did you graduate in?",
        choices: ["Computer Science", "Mathematics", "Teaching"],
        answer: "Computer Science"
    },
    {
        category: "Cooking",
        question: "What is your favorite food?",
        choices: ["Pizza", "Kebab", "Rice"],
        answer: "Pizza"
    },
    {
        category: "Sports",
        question: "What is your favorite sport?",
        choices: ["Football", "Volleyball", "Swimming"],
        answer: "Football"
    }
];

// Improved functions with better naming and parameter handling
function getRandomQuestion(questionsArray) {
    const randomIndex = Math.floor(Math.random() * questionsArray.length);
    return questionsArray[randomIndex];
}

function getRandomComputerChoice(choices) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResults(questionObject, computerChoice) {
    if (computerChoice === questionObject.answer) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
    }
}

// Main game logic
function playQuizGame() {
    // Get a random question
    const selectedQuestion = getRandomQuestion(questions);
    
    // Computer makes a random choice
    const computerChoice = getRandomComputerChoice(selectedQuestion.choices);
    
    // Check the result
    const result = getResults(selectedQuestion, computerChoice);
    
    // Display results
    console.log(`\n--- QUIZ GAME ---`);
    console.log(`Category: ${selectedQuestion.category}`);
    console.log(`Question: ${selectedQuestion.question}`);
    console.log(`Available choices: ${selectedQuestion.choices.join(', ')}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(`Correct answer: ${selectedQuestion.answer}`);
    console.log(`Result: ${result}\n`);
    
    return {
        question: selectedQuestion,
        computerChoice,
        correctAnswer: selectedQuestion.answer,
        isCorrect: computerChoice === selectedQuestion.answer
    };
}

// Run the game
const gameResult = playQuizGame();

// Optional: Run multiple rounds
function playMultipleRounds(rounds = 5) {
    console.log(`\n=== PLAYING ${rounds} ROUNDS ===\n`);
    let correctCount = 0;
    
    for (let i = 1; i <= rounds; i++) {
        console.log(`Round ${i}:`);
        const result = playQuizGame();
        if (result.isCorrect) correctCount++;
    }
    
    console.log(`\n=== FINAL SCORE ===`);
    console.log(`Correct: ${correctCount}/${rounds} (${(correctCount/rounds*100).toFixed(1)}%)`);
}

// Uncomment to play multiple rounds
// playMultipleRounds();
