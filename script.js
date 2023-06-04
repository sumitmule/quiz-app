const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainer = document.getElementById('question-container')
const quizQuestion = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')

let currentIndex


startButton.addEventListener('click',startGame)
nextButton.addEventListener('click', () =>{
    currentIndex++
    setNextQuestion()
})

function startGame(){
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    currentIndex = 0
    setNextQuestion()
}

function setNextQuestion(){
    resetAll()
    showQuestion(question[currentIndex])
}

function showQuestion(question){
    quizQuestion.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtons.appendChild(button)
    });
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatus(document.body,correct)
    Array.from(answerButtons.children).forEach(button => {
        setStatus(button,button.dataset.correct)
    });
    if(question.length > currentIndex+1){
        nextButton.classList.remove('hide')
    }else{
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatus(element,correct){
    clearStatus(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearStatus(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function resetAll(){
    clearStatus(document.body)
    nextButton.classList.add('hide')
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}


const question = [
    {
        question: '2 + 3 ?',
        answers:[
            {text:'1', correct: false},
            {text:'5', correct:true },
            {text:'-1', correct: false},
            {text:'6', correct: false}
        ]
    },
    {
        question: 'Who is the Best Player? 😁❤️',
        answers:[
            {text:'Ronaldo', correct: true},
            {text:'Messi', correct:true },
            {text:'Neymar', correct: true},
            {text:'Mbappe', correct: true}
        ]
    },
    {
        question: 'Kitne aadmi the ? 💀',
        answers:[
            {text:'2', correct: true},
            {text:'Ek bhi nahi!', correct:false },
            {text:'Sholay nahi dekhi', correct: false},
            {text:'3', correct: false}
        ]
    },
    {
        question: 'Fraud bank in Hera Pheri ? 💰💵',
        answers:[
            {text:'SBI', correct: false},
            {text:'150 rupya dega', correct:false },
            {text:'Lakshmi Chit Fund', correct: true},
            {text:'Dhanlakshmi Corporation', correct: false}
        ]
    },
]
