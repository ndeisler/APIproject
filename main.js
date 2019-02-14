

const baseURL = "https://rickandmortyapi.com/api/";

let url;
let firstEpisode;

const getInfo = document.querySelector("#form");
const img = document.querySelector("img");
const btn = document.querySelector('button');
const ul = document.querySelector("ul");
const div = document.querySelector("div");
let div1 = document.querySelector(".card");

let ep;


getInfo.addEventListener("click", fetchCharacters);

function fetchCharacters(e) {
    e.preventDefault();
    let characterNumber = Math.floor((Math.random() * 493) + 1);
    

    // console.log(e);
    url = baseURL + "character/" + characterNumber + "/";
    // console.log(url)
    fetch(url).then(function(results) {
        // console.log(results);
        return results.json();
    }).then(function(json) {
        
        displayResults(json);
    });
    

    function displayResults(json) {
        while(div1.firstChild) {
            div1.removeChild(div1.firstChild);   
        }

        let episode1 = json.episode[0];
        fetch(episode1).then(function(results) {
            // console.log(results);
            return results.json();
        }).then(function(json2) {
            // console.log(json2.episode); 
            let ep = json2.episode;


            //Trying to display character stats
            let div2 = document.createElement("div");
            let img = document.createElement("img");    
            let heading = document.createElement("h2");
            let status = document.createElement("p");
            let gender = document.createElement("p");
            let species = document.createElement("p");
            let origin = document.createElement("p");
            let episode = document.createElement("p");


            img.src = json.image;
            heading.innerHTML = json.name;
            status.innerHTML = "<p><span>Status</span>: <em>"  + characterStatus + "</em></p>";
            gender.innerHTML = "<p><span>Gender</span>: <em>" + characterGender + "</em></p><hr>";
            species.innerHTML = "<p><span>Species</span>: <em>" + characterSpecies + "</em></p><hr>";
            episode.innerHTML = "<p><span>First Appeared</span>: <em>" + ep + "</em></p><hr>";
            origin.innerHTML = "<p><span>Origin</span>: <em>" + characterOrigin.name + "</em></p><hr>";


            // div.setAttribute("class", "slide-up");
            div1.appendChild(div2);
            div2.setAttribute("class", "cardbox");
            
            div2.appendChild(img);
            div2.appendChild(heading);
            
            div2.appendChild(species);
            div2.appendChild(gender);
            div2.appendChild(origin);
            div2.appendChild(episode);
            div2.appendChild(status);
        });

        let characterStatus = json.status;
        let characterGender = json.gender;
        let characterSpecies = json.species;
        let characterOrigin = json.origin;
    }
}

    
    
