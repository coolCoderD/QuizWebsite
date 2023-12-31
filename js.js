
let question = [
    { q: "Which of the following is not a CSS selector which is used to 'find' the HTML elements we want to style?", options: ["Complex Selectors","Combinator Selectors","Pseudo-elements Selectors","Simple Selectors"], answer: "Complex Selectors", used: false },
    { q: "____create a rough sketch of what the website will look like when completed" , options: ["Wireframes", "Webflows", "Wirefalls", "Webframes"], answer: "Wireframes", used: false },
    { q: "Which of the following can read and render HTML web pages", options: ["Server", "Head Task", "Web browser", "All Of the above"], answer: "Web Browser", used: false },
    { q: "Which state has three capitals", options: ["Odisha", "Punjab", "Delhi", "Andhra Pradesh"], answer: "Andhra Pradesh", used: false },
    { q: "Which is the center of India?", options: ["Raipur", "Patna", "Delhi", "Nagpur"], answer: "Nagpur", used: false },
    { q: "Port Blair is the capital of which Union Territory?", options: ["Lakshadweep", "Andaman and Nicobar Islands", "Daman and Diu", "Puducherry"], answer: "Andaman and Nicobar Islands", used: false }
];

let timer = 60;
let clear;
let idx;
let currques = document.querySelector("#currques");
let score = 0;
let scoreval = document.querySelector(".scoreval");
let rightRange=document.querySelector("#right");
let wrongRange=document.querySelector("#wrong");
let rightAns=0;
let ques=document.querySelector("#ques");
let totalques=document.querySelector("#totalques");
let counter=1;

totalques.textContent=question.length;



function updatePanel(){
    counter++;
    ques.textContent=counter;

}

function incScore() {
    score += 10;
    scoreval.textContent = score;
}

function decScore(){
    if(score>0){
        score-=10;
        scoreval.textContent=score;
    }
    else quizOver();
}

function updateTimer() {
    if (timer >= 0) {
        document.querySelector("#timerval").textContent = timer;
        timer--;
        clear = setTimeout(updateTimer, 1000);
    } else {
        quizOver();
        clearInterval(clear);
    }
}

updateTimer();

function getRandomIdx() {
    let unusedQuestions = question.filter(q => !q.used);
    if (unusedQuestions.length === 0) {
        quizOver();
        return -1;
    }
    let randomIndex = Math.floor(Math.random() * unusedQuestions.length);
    let randomQuestion = unusedQuestions[randomIndex];
    randomQuestion.used = true;
    return question.indexOf(randomQuestion);
}

function randomQuestion() {
    idx = getRandomIdx();
    if (idx !== -1) {
        currques.textContent = question[idx].q;
        for (let i = 0; i < 4; i++) {
            document.querySelector(`#option${i + 1}`).textContent = question[idx].options[i];
        }
    }
}

function checkAnswer(selectedOption) {
    let crctOption = question[idx].answer;
    return selectedOption === crctOption;
}

randomQuestion();

let options = document.querySelectorAll(".opt");

options.forEach(function(option) {
    option.addEventListener("click", function() {
        if (checkAnswer(option.textContent)) {
            incScore();
        }
        else{
            decScore();
        }
        updatePanel();
        randomQuestion();
    });
});

function quizOver(){
    document.querySelector("#panel").innerHTML=`
    <div id="gameover">
    <h1>Quiz Is Over</h1>
    <h3 class="white">Your Score is : ${score}</h3>
    <h4>Reload to start again</h4>
    </div>`;
}



    // Get references to the images
    const img1 = document.getElementById("img1");
    const img3 = document.getElementById("img3");

    // Set the maximum movement distance
    const maxMovement = 20;

    // Add mousemove event listeners to each image
    img1.addEventListener("mousemove", moveImage);
    img3.addEventListener("mousemove", moveImage);

    // Function to move the images
    function moveImage(e) {
        const movementX = (e.clientX / window.innerWidth - 0.5) * 2 * maxMovement;
        const movementY = (e.clientY / window.innerHeight - 0.5) * 2 * maxMovement;

        e.target.style.transform = `translate(${movementX}px, ${movementY}px)`;
    }

    // Reset the images when the mouse leaves
    img1.addEventListener("mouseleave", resetImage);
    img3.addEventListener("mouseleave", resetImage);

    // Function to reset the images
    function resetImage(e) {
        e.target.style.transform = "translate(0, 0)";
    }

