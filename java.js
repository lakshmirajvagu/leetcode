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


function isvalid(username){
    if(username.trim()===""){
        alert("Please enter a valid username");
        return false;
    }
    const regex = /^[a-zA-Z0-9]+$/;
    if(!regex.test(username)){
        alert("Please enter a valid username");
        return false;
    }
    return true;
}
function displayuserdata(data){
    const repos=data.public_repos;
    const followers=data.followers;
    const following=data.following;
    const name=data.name;
    const avatar=data.avatar_url;

    statsCard.innerHTML = `
    <img src="${avatar}" alt="avatar" class="avatar" style="width: 80px; height: 80px; border-radius: 50%; display: block; margin: 10px auto;">  
    <h2 style="font-size: 1.5rem; text-align: center;">${name || "No Name Provided"}</h2>
    <p style="text-align: center; font-size: 1rem;"><strong>Public Repositories:</strong> ${repos}</p>
    <p style="text-align: center; font-size: 1rem;"><strong>Followers:</strong> ${followers}</p>
    <p style="text-align: center; font-size: 1rem;"><strong>Following:</strong> ${following}</p>
`;



}
async function fetchdetails(username){
    const url=`https://api.github.com/users/${username}`;
    try{
    searchButton.textContent="searching";
    searchButton.disabled=true;
    const response = await fetch(url);
    if(!response.ok){
        throw new Error("User not found");
        return;
    }
    const data= await response.json();
    console.log(data);
    displayuserdata(data);
    }
    catch(err){
        statsCard.innerHTML="no data found";
    }
    finally{
        searchButton.textContent="search";
        searchButton.disabled=false;
    }
    
}
searchButton.addEventListener("click", function(){  
    const username=userInput.value;
    console.log("entered",username);
    if(isvalid(username)){
        fetchdetails(username);
    }
})
});