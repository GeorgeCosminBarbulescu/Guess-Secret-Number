'use strict';

// Variables for: "Modal window" section
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelector('.button-show-modal');
const btnCloseModal = document.querySelector('.button-close-modal');
const btnIconCloseModal = document.querySelector('.button-icon-close-modal');

///////////////////////////////////////////////////////////
// -- === Modal window === --

// Modal: Functions
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Modal: Event handlers

btnOpenModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
btnIconCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
    return;
  }
});

// Variables for: "Game functionality" section
const bodyEl = document.querySelector('body');
const hScoreEl = document.querySelector('.highscore');
const restartGameEl = document.querySelector('.restart-game');
const sNumberEl = document.querySelector('.secret-number');
const hintsMessageEl = document.querySelector('.hints');
const inputNumberGuessEl = document.querySelector('.input-number');
const btnCheckEl = document.querySelector('.button-check');
const decreasedScoreEl = document.querySelector('.score');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

///////////////////////////////////////////////////////////
// -- === Game functionality === --

const displayMessage = function (message) {
  hintsMessageEl.textContent = message;
};
// displayMessage();

btnCheckEl.addEventListener('click', function () {
  const guess = Number(inputNumberGuessEl.value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('🤖 Not a number!');
    return;
  }

  // When guess is wrong
  if (guess !== secretNumber) {
    displayMessage(
      guess > secretNumber ? '🤖 Hint: Too high ↗️' : '🤖 Hint: Too low ↘️'
    );
    // Same as above
    // if (guess > secretNumber) {
    //   displayMessage('🤖 Hint: Too high ↗️');
    // } else if (guess < secretNumber) {
    //   displayMessage('🤖 Hint: Too low ↘️');
    // }
    score--;
    decreasedScoreEl.textContent = score;
  }

  if (guess > 20) {
    displayMessage('🤖 Number is higher than 20!');
  }

  if (guess < 1) {
    displayMessage('🤖 Number is lower than 1!');
  }

  if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
      hScoreEl.textContent = highscore;
    }
    displayMessage('🥳🎉You won the game');
    bodyEl.style.backgroundColor = '#58a524';
    sNumberEl.textContent = secretNumber;
    sNumberEl.style.color = '#000';
  } else if (score < 1) {
    displayMessage('💥☠️ You lost the game');
    bodyEl.style.backgroundColor = '#ec5f1d';
  }
});

const restart = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  sNumberEl.textContent = '?';
  bodyEl.style.backgroundColor = '#fff';
  sNumberEl.style.color = '#fff';
  inputNumberGuessEl.value = '';
  decreasedScoreEl.textContent = 20;
  displayMessage('Hint: Start guessing... 🤔🧐');
};

restartGameEl.addEventListener('click', restart);

/*
'use strict';

// Variables for: "Modal window" section
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelector('.button-show-modal');
const btnCloseModal = document.querySelector('.button-close-modal');
const btnIconCloseModal = document.querySelector('.button-icon-close-modal');

///////////////////////////////////////////////////////////
// -- === Modal window === --

// Modal: Functions
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Modal: Event handlers

btnOpenModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
btnIconCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
    return;
  }
});

// Variables for: "Game functionality" section
const body = document.querySelector('body');
const hScore = document.querySelector('.highscore');
const restartGame = document.querySelector('.restart-game');
const sNumber = document.querySelector('.secret-number');
const hintsMessage = document.querySelector('.hints');
const inputNumberGuess = document.querySelector('.input-number');
const btnCheck = document.querySelector('.button-check');
const decreasedScore = document.querySelector('.score');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

///////////////////////////////////////////////////////////
// -- === Game functionality === --

const displayMessage = function (message) {
  hintsMessage.textContent = message;
};

btnCheck.addEventListener('click', function () {
  const guess = Number(inputNumberGuess.value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number');
  }

  if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    sNumber.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    sNumber.style.color = '#60b347';

    if (score > highscore) {
      highscore = score;
      hScore.textContent = highscore;
    }
  }

  // When guess is wrong
  if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Hint: 📈 Too high!' : 'Hint: 📉 Too low!'
      );
      score--;
      decreasedScore.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      displayMessage.textContent = 0;
    }
  }
});

// Reset game
restartGame.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Hint: Start guessing...');
  sNumber.textContent = '?';
  inputNumberGuess.value = '';
  body.style.backgroundColor = '#fff';
  sNumber.style.color = '#fff';
});

*/
