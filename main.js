

const baseURL = "https://rickandmortyapi.com/api/character/";

let url;

const getInfo = document.querySelector("form");
const img = document.querySelector("img");
const btn = document.querySelector('button');
const ul = document.querySelector("ul");
const div = document.querySelector("div");
let div1 = document.querySelector(".card");


let characterNumber = document.querySelector("input");

getInfo.addEventListener("submit", fetchCharacters);

function fetchCharacters(e) {
    e.preventDefault();

    console.log(e);
    url = baseURL + characterNumber.value + "/";
  console.log(url)
    fetch(url).then(function(results) {
        console.log(results);
        return results.json();
    }).then(function(json) {
        displayResults(json);
    });
}

function displayResults(json) {
    
    while(div1.firstChild) {
        div1.removeChild(div1.firstChild);   
    }

    console.log(json);
    let characters = json.name;
    let characterID = json.id;
    let characterStatus = json.status;
    let characterGender = json.gender;
    let characterSpecies = json.species;
    let characterOrigin = json.origin;
    
    console.log(characters);
    console.log(characterID);
    console.log(characterStatus);

    //Trying to display character stats
    let div2 = document.createElement("div");
    let img = document.createElement("img");    
    let heading = document.createElement("h2");
    let status = document.createElement("p");
    let gender = document.createElement("p");
    let species = document.createElement("p");
    let origin = document.createElement("p");
 
    img.src = json.image;
    heading.innerHTML = json.name;
    status.innerHTML = "<p><span>Status</span>: <em>"  + characterStatus + "</em></p><hr>";
    gender.innerHTML = "<p><span>Gender</span>: <em>" + characterGender + "</em></p><hr>";
    species.innerHTML = "<p><span>Species</span>: <em>" + characterSpecies + "</em></p><hr>";
    origin.innerHTML = "<p><span>Origin</span>: <em>" + characterOrigin.name + "</em></p><hr>";
    
    // div.setAttribute("class", "slide-up");
    div1.appendChild(div2);
    div2.setAttribute("class", "cardbox");
    
    div2.appendChild(img);
    div2.appendChild(heading);
    
    div2.appendChild(species);
    div2.appendChild(gender);
    div2.appendChild(origin);
    div2.appendChild(status);
} 
