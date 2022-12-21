/* Declare variables below to save the different sections (divs) of your story*/
let title = document.querySelector('.title');
let buttons = document.querySelector('.buttons');
let clickStart = document.querySelector('.clickStart');
let mage = document.querySelector('.option-one');
let warrior = document.querySelector('.option-two');
let optionOne = document.querySelector('.option-one-screen');
let buttons1 = document.querySelector('.buttons1');
let optionTwo = document.querySelector('.option-two-screen');
let buttons2 = document.querySelector('.buttons2');
let enter = document.querySelector('.enter');
let leave = document.querySelector('.leave');
let optiononeEnd = document.querySelector('.option-one-end');
let optiononeLeave = document.querySelector('.option-one-leave');
let fight = document.querySelector('.fight');
let enemy = document.querySelector('.enemy');
let surrender = document.querySelector('.run');
let body = document.querySelector('body');


clickStart.onclick=function(){
  title.style.display="block";
  buttons.style.display="block";
  clickStart.style.display="none";
  body.style.backgroundColor="red";
}

mage.onclick=function(){
  title.style.display="none";
  buttons.style.display="none";
  optionOne.style.display="block";
  buttons1.style.display="block";
  body.style.backgroundColor="blue";
}

enter.onclick=function(){
  optionOne.style.display="none";
  buttons1.style.display="none";
  optiononeEnd.style.display="block";
  body.style.backgroundColor="green";
}

warrior.onclick=function(){
  title.style.display="none";
  buttons.style.display="none";
  optionTwo.style.display="block";
  buttons2.style.display="block";
  enemy.style.display="block";
  body.style.backgroundColor="pink";
  
}

leave.onclick=function(){
  optiononeLeave.style.display="block";
  optionOne.style.display="none";
  body.style.backgroundColor="cyan";
}

fight.onclick=function(){
  enemy.innerHTML="You fight the zombie warrior and become the best warrior alive!";
  buttons2.style.display="none";  
  body.style.backgroundColor="purple";
}

surrender.onclick=function(){
  enemy.innerHTML="You surrendered and became a zombie warrior";
  buttons2.style.display="none";
  body.style.backgroundColor="yellow";
}







/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
