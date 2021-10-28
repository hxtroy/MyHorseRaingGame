"use strict"

const numHorses = 10
let horses=[]  
let horseX=[]  

let colors=["Red","Blue","Orange","Cyan","Magenta","Yellow","Black","Turquoise","Gray","Lilac","White"]

function startRace(){
    setInterval(move,50)
}

for(let h=0;h<numHorses;h++){
    horses[h] = document.createElement("div")    
    horses[h].classList.add("horse")
    horses[h].style.top = 50 + h*45 + "px"
    horses[h].style.backgroundColor=colors[h]
    horseX[h]=0
    document.body.appendChild(horses[h])
}

const finish=500 

function move(){
    for(let h=0;h<numHorses;h++){
        horses[h].style.left=horseX[h] +"px"
        horseX[h]+= Math.floor(Math.random()*10)
        if(horseX[h] >=finish){alert( ` ${colors[h]} Horse Wins!`);resetRace();}
    }
}

function resetRace(){
    for (let h=0;h<numHorses;h++){
        horseX[h]=0
    }
}





/*
let myName=prompt("What is your name")
let lastName=prompt("What is your last name")
let birthday=prompt("what year were you born")
let question=prompt("How are you feeling?")

myName.slice(0, 1)
birthday.slice(-2)

let userName=(myName.slice(0, 2) + lastName + birthday.slice(-2) )
console.log(userName);

const paragraph = 'we are watching the horses race!';

const searchTerm = 'horses';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);

let newQuestion=(question.replace(/a/gi, "*").replace(/e/gi, "*").replace(/i/gi, "*").replace(/o/gi, "*").replace(/u/gi, "*"))
console.log(newQuestion)
*/


