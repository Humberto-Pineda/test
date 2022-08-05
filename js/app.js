'use strict';
// GLOBAL Variables



function makeMadlib(noun1, noun2, verb1, verb2, adj1, adj2) {

  let madlibArr = [`London ${noun1} is going to ${verb2} ${adj2}, My ${adj1} ${noun2}`, `My ${noun1} came up with ${adj1} ideas to ${verb1} the ${noun2} - the ${adj2}, ${adj2} ${noun2}.`, `Once upon a ${adj1} time, the ${noun1} decided to build a ${adj2} house made of ${noun2}. The ${noun1} was ${adj1}.`, `Don't ${verb1} about a ${noun1}, because every ${adj1} ${noun2} is gonna be ${adj2}`, `Don't be ${adj1}, ${noun2}. The only ${noun1} to ${verb1} is ${noun1}, itself.`, `Go ${verb1} the ${noun1} everywhere you go. Let no ${noun2} ever ${verb2} without feeling ${adj1}.`, `My ${noun1} came up with a ${adj1} idea to ${verb1} ${adj1} soup - the most ${adj2} soup! I called my ${adj1} soup ${adj2}.  Its main ingredient is ${noun2}.`, `To ${verb1} or not to ${verb1}, that is the ${adj1} ${noun1}.`, `Life is like a ${noun1}, you never ${verb2} what you're gonna ${verb1}.`, `Isn't it ${adj1}, all alone, ${noun1} made of ${adj2}, my ${noun2} of stone.`, `I've been like a ${adj1} ${noun1} and ${adj2} ${noun2} man, I ${verb1} just like a rockstar.`, `She would ${verb1} the ${adj1} ${noun1} by the ${adj2} ${noun2}.`, `When you ${verb1} upon a ${adj1} ${noun1}, your dreams ${verb2} ${adj2}.`, `Hey, ${verb1} my ${adj1} ${noun1} out of your ${adj2} ${noun2}!`];


  let random = getRandMadlib(madlibArr.length);
  return madlibArr[random];
}

//Global Variables
let nounArr = [];
let verbArr = [];
let adjArr = [];
const form = document.querySelector('form');


//Functional Logic

function getRandMadlib(max) {
  return Math.floor(Math.random() * max);
}

function getRandNoun() {
  return Math.floor(Math.random() * nounArr.length);
}

function getRandVerb() {
  return Math.floor(Math.random() * verbArr.length);
}

function getRandAdj() {
  return Math.floor(Math.random() * adjArr.length);
}

function renderMadlib() {
  let a = getRandNoun();
  let noun1 = nounArr[a];
  console.log(typeof (nounArr));
  console.log(nounArr);
  console.log(noun1);
  a = getRandNoun();
  let noun2 = nounArr[a];
  a = getRandVerb();
  let verb1 = verbArr[a];
  a = getRandVerb();
  let verb2 = verbArr[a];
  a = getRandAdj();
  let adj1 = adjArr[a];
  a = getRandAdj();
  let adj2 = adjArr[a];
  let container = document.getElementById('madlib');
  let madlib = document.createElement('p');
  madlib.textContent = makeMadlib(noun1, noun2, verb1, verb2, adj1, adj2);

  container.appendChild(madlib);
}


function handleSubmit(event) {
  event.preventDefault();
  //dom manip to add class that will add animation
  document.getElementById('battleshipAnimation').setAttribute('class', 'gridAppears');
  document.getElementById('battleshipAnimation').setAttribute('class', 'battleship-section');
  document.getElementById('form').setAttribute('class', 'formAnimation');
  document.getElementById('logoImg').setAttribute('class', 'logoImgSlide');
}

function updateStorage() {
  const arrayString1 = JSON.stringify(nounArr);
  const arrayString2 = JSON.stringify(verbArr);
  const arrayString3 = JSON.stringify(adjArr);
  localStorage.setItem('nounArr', arrayString1);
  localStorage.setItem('verbArr', arrayString2);
  localStorage.setItem('adjArr', arrayString3);

}

function getStorage() {
  // retrieve data from local storage
  const data1 = localStorage.getItem('nounArr');
  const data2 = localStorage.getItem('verbArr');
  const data3 = localStorage.getItem('adjArr');
  // convert the data (array) from a string to something that we can use in JavaScript.
  const inputData1 = JSON.parse(data1);
  const inputData2 = JSON.parse(data2);
  const inputData3 = JSON.parse(data3);

  // If this is the first time we visit the page, there will not be an array for us to use in localStorage
  if (inputData1 !== null) {
    nounArr = inputData1;
  }
  if (inputData2 !== null) {
    verbArr = inputData2;
  }
  if (inputData1 !== null) {
    adjArr = inputData3;
  }
}

//Executable Code

getStorage();

form.addEventListener('submit', handleSubmit);
