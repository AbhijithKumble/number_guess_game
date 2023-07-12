document.addEventListener('DOMContentLoaded', () => {
    let noOfGuess =1;
      
    let guessNumber = Math.floor(Math.random()*100)+1;
  
    const body = document.querySelector("body");
    const guess = document.querySelector(".guess");
    const submit_button = document.querySelector(".submit");
    const prev_guess = document.querySelector(".prev-guess");
    const lowOrHighPara = document.querySelector(".lowOrHigh");
    const guessAns = document.querySelector(".correctOrWrong");
    const button_place = document.querySelector("main");
    let resetButton;
    
  
    // function to check the guessed number
    function checkGuessNumber() {
      const userGuess = Number(guess.value);
      
      if(noOfGuess === 1) {
          prev_guess.textContent = "Previous Guess : ";
      }

      prev_guess.textContent += userGuess + ' ';

      if(userGuess === guessNumber) {
          guessAns.textContent = "Congratulations! You have guessed the correct ans";
          guessAns.style.backgroundColor = "green";
          lowOrHighPara.textContent = "";
          body.style.backgroundColor ="green";
          setGameOver();
      } else if(noOfGuess === 10){
          guessAns.textContent = "!!! GAME OVER !!!";
          lowOrHighPara.textContent = "";
          setGameOver();
      } else {
          guessAns.textContent = "Wrong!";
          guessAns.style.backgroundColor = "red";
          body.style.backgroundColor ="red";
          

          if(userGuess < guessNumber) {
              lowOrHighPara.textContent = "Last Guess was too low!";
              
          } else {
              lowOrHighPara.textContent = "Last Guess was too High!";
              
          } 
      } 
           
      noOfGuess+=1;
      guess.value = "";
      guess.focus()
    }

    //start checking
    submit_button.addEventListener("click",checkGuessNumber);


      //game over function 
    function setGameOver(){
      guess.disabled = true;
      submit_button.disabled = true;
      resetButton = document.createElement("button");
      resetButton.textContent = "start new game";
      button_place.appendChild(resetButton);
      resetButton.style.marginLeft = "30px";
      resetButton.addEventListener("click",resetGame);
    }


    //reset Game
    function resetGame() {
      noOfGuess =1;
      body.style.backgroundColor ="white";
      

      const anwers_div = document.querySelectorAll(".answers-div p");
      for ( const each of anwers_div) {
          each.textContent="";
      }

      guessAns.style.backgroundColor = "white";
      
      resetButton.parentNode.removeChild(resetButton);
      guess.disabled = false;
      submit_button.disabled = false;
      guess.value ="";
      guess.focus();

      guessNumber = Math.floor(Math.random()*100)+1;
    }  
    
});