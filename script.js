'use strict';

let min = 1,
  max = 20; //range of the number we are guessing
let number = Math.trunc(Math.random() * 19 + 1);
let score = 20;
let highscore = 0;
let w_flag = 0; //when we win flag becomes 1 and we can no longer play
//random returns a number between 0 and 1

document.querySelector('.check').addEventListener('click', function () {
  // this function gets triggered when the button is clicked
  let guess = document.querySelector('.guess').value;
  //input gets read when the event is triggered

  if (w_flag) return; //stops the execution if we have already won
  if (score === 0) {
    //document.querySelector('.message').textContent = 'you lost the game';
    //no need to update it again since when the game reaches for the first time the message is set and it wont change again
    return;
  } else {
    if (guess === '') {
      // if guess is empty it is a falsy value and will be treated as false inside the if
      document.querySelector('.message').textContent = 'empty input';
      return; //exits event handler
    }
    guess = Number(guess); //input gets converted to a numbers

    if (guess === number) {
      document.querySelector('.message').textContent = 'correct guess, you won';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = number;
      w_flag = 1;
    } else if (guess > number) {
      document.querySelector('.message').textContent =
        'your guess is greater than the hidden number';
      score = score - 1; // for a wrong guess the score is reduced by one
      document.querySelector('.score').textContent = score;
    } else if (guess < number) {
      document.querySelector('.message').textContent =
        'your guess is lower than then hidden number';
      score = score - 1; // for a wrong guess the score is reduced by one
      document.querySelector('.score').textContent = score;
    }
  }
  if (score === 0) {
    //gets executed only once when the score reaches zero for the first time
    document.querySelector('.message').textContent = 'you lost the game';
    document.querySelector('body').style.backgroundColor = '#b34747';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  w_flag = 0;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  number = Math.trunc(Math.random() * 19 + 1);
  document.querySelector('.message').textContent = 'Start guessing....';
  document.querySelector('.guess').value = '';
  //empties the box of the previous number
});
