document.addEventListener('DOMContentLoaded', function(){
    const mainDiv = document.querySelector(".main");
const containerDiv = document.querySelector(".container");
const heading = document.querySelector(".container h1");
const inputLabel = document.querySelector(".container p");
const userInput = document.querySelector(".container input");
const searchButton = document.querySelector(".container button"); 
const statsContainer = document.querySelector(".stats-cont");
const levelsContainer = document.querySelector(".levels");
const easyLevel = document.querySelector(".levels span:nth-child(1)");
const mediumLevel = document.querySelector(".levels span:nth-child(2)");
const hardLevel = document.querySelector(".levels span:nth-child(3)");
const statsCard = document.querySelector(".stats-card");


searchButton.addEventListener("click", function(){  
    const username=userInput.value;
    console.log("entered",username);
    console.log("entered",username);
})
});