const baseURL = "https://rickandmortyapi.com/api/character/";

let url;

const getInfo = document.querySelector("form");
const img = document.querySelector("img");
let characterNumber = document.querySelector("input");
const btn = document.querySelector('button');
const ul = document.querySelector("ul");
const div = document.querySelector("div");



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
    
    while(div.firstChild) {
        
        div.removeChild(div.firstChild);
          
    }

    
    console.log(json);
    let characters = json.name;
    let characterID = json.id;
    let characterStatus = json.status;
    console.log(characters);
    console.log(characterID);
    console.log(characterStatus);



    //Trying to display character stats
    let div2 = document.createElement("div");
    let img = document.createElement("img");    
    let heading = document.createElement("h2");
    
    let para = document.createElement("p");
    let link = document.createElement("a");


    img.src = json.image;
    heading.innerHTML = json.name;
    para.innerHTML = "Status: " + json.status;


    // div.setAttribute("class", "slide-up");
    div.appendChild(div2);
    div2.setAttribute("class", "cardbox");
    
    div2.appendChild(img);
    div2.appendChild(heading);
    
    div2.appendChild(para);
    
    

    
    

    
    
    

} 





    



// /*OBJECTS*/

// var Car = {
//     make: "Nissan",
//     model: "versa",
//     tires: 4,
//     color: "white",
//     seats: 5  
// };

// var brand = Car["make"];
// console.log(brand);


// let person = {
//     name: "Nathan Deisler",
//     age: 30,
//     occupation: "JavaScript",
//     max_snatch: 175,
//     eyeColor: "green"
// }


// let swapPerson = {};
// Object.keys(person).forEach(i => {
//     swapPerson[person[i]] = i;
// })

// console.log(swapPerson);

// // Object.values(person).forEach(i => {
// //     swapPerson[i] = i;
// // })
// // console.log(swapPerson);

// // function swap(obj) {
// //     let reversePerson = {};
// //     for (prop in obj) {
// //         // if (obj.hasOwnProperty(prop)) {
// //         //     reversePerson[obj[prop]] = prop;
// //         // }
// //         //             , becomes property of reversePerson and assigns obj prop to that property, reversing them
// //         reversePerson[obj[prop]] = prop;
// //     }
// //     console.log(reversePerson);
// // }
// // swap(person);