'use strict';


let rows = 5;
let cols = 5;

let ships = 6;
let userCount = 6;

let reroll = document.getElementById('random2');
let madlib = document.getElementById('madlib');



const grid = document.getElementById('battleship');

for (let i = 0; i < cols; i++) {
  for (let j = 0; j < rows; j++) {

    let space = document.createElement('div');
    grid.appendChild(space);
    space.id = 's' + j + i;
    let topPosition = j * 5;
    let leftPosition = i * 5;

    space.style.top = topPosition + 'rem';
    space.style.left = leftPosition + 'rem';
  }
}

let hitCount = 0;

let gameBoard = [

  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

randomShips();

// console.log(gameBoard[2][2]);
function randomShips() {
  for (let i = 0; i < ships; i++) {
    let row = getRandNum(gameBoard.length);
    let col = getRandNum(gameBoard.length);
    if (gameBoard[row][col] === 0) {
      gameBoard[row][col] = 1;

    } else {
      i--;
    }
  }
}

function getRandNum(max) {
  return Math.floor(Math.random() * max);
}

grid.addEventListener('click', fireTorpedo, false);

function fireTorpedo(e) {
  if (e.target !== e.currentTarget) {
    let row = e.target.id.substring(1, 2);
    let col = e.target.id.substring(2, 3);

    if (gameBoard[row][col] === 0) {
      e.target.style.background = "url(" + 'img/ezgif-1-0417f6fcf8.gif' + ")";

      gameBoard[row][col] = 3;

    } else if (gameBoard[row][col] === 1) {
      e.target.style.background = "url(" + 'https://media4.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif?cid=ecf05e470mrkkuiwg54gbnpz7ad2bt0qubk8kt4t2ffiqf5h&rid=giphy.gif&ct=g' + ")";
      if (userCount === 6) {
        userCount--;
        nounArr.push(prompt('Ahoy! Good shot! Now give us a NOUN.'));
      }
      else if (userCount === 5) {
        userCount--;
        nounArr.push(prompt('Another good shot! Now hand us another NOUN.'));
      } else if (userCount === 4) {
        userCount--;
        verbArr.push(prompt('You sunk another one, Matey! A VERB is what we want.'));
      } else if (userCount === 3) {
        userCount--;
        verbArr.push(prompt("Aargh, yet another good ship sunk! We'll be wanting another VERB from you."));
      } else if (userCount === 2) {
        userCount--;
        adjArr.push(prompt("Avast, Landlubber! You're really shaking down me crew. This time, I want an ADJECTIVE from you."));
      } else if (userCount === 1) {
        userCount--;
        adjArr.push(prompt("Davey Jones claims the last ship! One last ADJECTIVE wouldn't be to much to ask for, would it?"));
      }
      gameBoard[row][col] = 2;

      hitCount++;

      if (hitCount === 6) {
        alert("Yargh! Here's yer booty!");
        renderMadlib();
        updateStorage();
        reroll.addEventListener('click', randomButton);
        grid.removeEventListener('click', fireTorpedo, false);
      }
    } else if (gameBoard[row][col] > 1) {
      alert('Yer wasting yer cannons, Matey! That spot has already been shot.');
    }
  }

  e.stopPropagation();
}

function randomButton(e) {
  e.preventDefault();
  let message = document.querySelector('#madlib p');
  message.remove();
  renderMadlib();
}
