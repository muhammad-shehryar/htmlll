const startButton=document.getElementById("start-btn")
const questionContainerElement=document.getElementById("question-container")
let shuffledQuestion,currentQuestionIndex
const questionElement=document.getElementById("question")
const answerButtonsElement=document.getElementById("answer=buttons")
startButton.addEventListener("click",startGame)



function startGame(){
startButton.classList.add("hide")
shuffledQuestion=question.sort(()=>Math.random()-.5)
currentQuestionIndex=0
questionContainerElement.classList.remove("hide")
setNextQuestion()

}
function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestion[currentQuestionIndex])


}
function showQuestion(question){
questionElement.innerText=question.question
question.answers.forEach(answer=>{
    const button=document.createElement('button')
    button.innerText=answer.text
    button.classList.add('btn')
    if(answer.correct){
        button.dataset.correct=answer.correct
    }
    button.addEventListener('click',selectAnswer)
    answerButtonsElement.appendChild(button)
})
}
function resetState(){
    nextButton.classList.add("hide")
    while(answerButtonsElement.firstChild){
        answerButtonsElement.remove('hide')
        setNextQuestion()
    }

}
function selectAnswer(e){
    selectedButton=e.target
    const correct=selectedButton.dataset.correct
    setStatusClass(document.body.correct)
    Array.from(answerButtonsElement.children).forEach(button=>{
       setStatusClass(button,button.dataset.correct) 
    })
}

const question=[
    {
        question:"What is 2 + 2",
        answers:[
            {text:"4",correct:true},
            {text:"22",correct:false}
        ]
    }
]