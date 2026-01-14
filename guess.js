let randomNumber=parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const  guesslot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHigh=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');
let prevGuess=[];
let numGuess=0;
let playGame=true;

if(playGame){
    submit.addEventListener('click',function(event){
        event.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);;
    })
}
function validateGuess(guess){
 if(isNaN(guess)){
    alert('Please enter valid number');
    return;
 }
  if(guess<1 || guess>100){
    alert("please enter the number between 1 and 100");
    return;
}
 
    prevGuess.push(guess);
    displayGuess(guess);
    checkGuess(guess);
 
 if(numGuess===10){
    displayMessage(`You ran out of guesses. The number was ${randomNumber}`);
    endGame();
 }

}
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('🎉Congratulations  ! You got it right');
    }
    else if(guess<randomNumber){
        displayMessage('⬇️Oops! Your guess is too low');
    }
    else if(guess>randomNumber){
        displayMessage('⬆️Oops! Your guess is too high');
    }
}
function displayGuess(guess){
    userInput.value='';
    guesslot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML= `Guesses left: ${10 - numGuess}`;
    

}
function displayMessage(message){
    lowOrHigh.innerHTML= `<h2>${message}</h2>`;


}
function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}
function newGame(){
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', function () {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 0;
        guesslot.innerHTML = '';
        remaining.innerHTML = 'Guesses left: 10';
        lowOrHigh.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}

