const quizDB = [
    {
        question:"Q1:What is the full form of HTML?",
        a:"Hello to my land",
        b:"Hey text markup language",
        c:"HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans:"ans4"

    },
    {
        question:"Q2:What is the full form of CSS?",
        a:"Cascading Style Sheets",
        b:"Cascading Style Sheep",
        c:"Cartoon Style Sheets",
        d:"Cascading Super Sheets",
        ans:"ans1"
    },
    {
        question:"Q3:What is the full form of HTTP?",
        a:"HyperText Transfer Product",
        b:"HyperText Test Protocol",
        c:"Hey Test Protocol",
        d:"HyperText Transfer Protocol",
        
        ans:"ans4"
    },
    {
        question:"Q4:What is the full form of JS?",
        a:"JavaScript",
        b:"JavaSuper",
        c:"JustScript",
        d:"JordenShoes",
        
        ans:"ans1"
    }
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const  submit = document.querySelector('#submit ');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelectorAll('#showSore');


let questionCount=0;
let score=0;
const loadQuestion = () => {
    question.innerText=quizDB[0].questtion;
    const questionList = quizDB[questionCount];
    question.innerText= questionList.question;

    option1.innerText = questionList.a;
    
    option2.innerText = questionList.b;
    
    option3.innerText = questionList.c;
    
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
              answer= curAnsElem.id;
        }
        
        
    });
    return answer;
   

    
};
function deselectAll() {
    answer.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () =>{
    const checkedAnswer = getCheckAnswer();
    if(checkedAnswer === quizDB[questionCount].ans )
        score++;
    });
    questionCount++;
    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML=`
        <h3>You scored ${score}/${quizDB.length}&#9996; </h3>
        <button class="btn" onclick="location.reload()"></button>`
        ;
        showScore.classlist.remove('scoreArea');
      }
});