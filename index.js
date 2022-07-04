const BASE_URL = "http://localhost:3000/catbreeds/"

class Breed{
    id; length; origin; image_link; family_friendly; shedding; general_health; playfulness; children_friendly; stranger_friendly; grooming; intelligence; other_pets_friendly; min_weight; max_weight; min_life_expectancy; max_life_expectancy; name;
    constructor(id, length, origin, image_link, family_friendly, shedding, general_health, playfulness, children_friendly, stranger_friendly, grooming, intelligence, other_pets_friendly, min_weight, max_weight, min_life_expectancy, max_life_expectancy, name) {
        this.id = id;
        this.length = length;
        this.origin = origin;
        this.image_link = image_link;
        this.family_friendly = family_friendly;
        this.shedding = shedding;
        this.general_health = general_health;
        this.playfulness = playfulness;
        this.children_friendly = children_friendly;
        this.stranger_friendly = stranger_friendly;
        this.grooming = grooming;
        this.intelligence = intelligence;
        this.other_pets_friendly = other_pets_friendly;
        this.min_weight = min_weight;
        this.max_weight = max_weight;
        this.min_life_expectancy = min_life_expectancy;
        this.max_life_expectancy = max_life_expectancy;
        this.name = name;
    }
}



document.addEventListener('DOMContentLoaded', ()=>{
  getBreeds();
  loadBreed("1")
  
})


function getBreeds(){

  const breedHeadear = document.getElementById("breeds");
  
  fetch(BASE_URL)
    .then( response => response.json() )
    .then( (result) => {
  
      result.forEach(
        (breed) => {
            let breedInfo = new Breed(breed.id, breed.length, breed.origin, breed.image_link, breed.family_friendly, breed.shedding, breed.general_health, breed.playfulness, breed.children_friendly, breed.stranger_friendly, breed.grooming, breed.intelligence, breed.other_pets_friendly, breed.min_weight, breed.max_weight, breed.min_life_expectancy, breed.max_life_expectancy, breed.name);

            let breedName = document.createElement("li");
            breedName.classList.add("itemName");
            breedName.style.cursor = "pointer";
            breedName.style.color = "coral";
            breedName.innerText = breedInfo.name;
            breedHeadear.append(breedName);
            breedName.addEventListener("click", ()=>{
                loadBreed(breedInfo.id);
          })
  
        }
      )
  
    }).catch( error => {throw error});
  
}




  function loadBreed(id){

    fetch(BASE_URL+id)
      .then( response => response.json() )
      .then( (breed) => {

          let breedInfo = new Breed(breed.id, breed.length, breed.origin, breed.image_link, breed.family_friendly, breed.shedding, breed.general_health, breed.playfulness, breed.children_friendly, breed.stranger_friendly, breed.grooming, breed.intelligence, breed.other_pets_friendly, breed.min_weight, breed.max_weight, breed.min_life_expectancy, breed.max_life_expectancy, breed.name);

          document.getElementById("name").innerText=breedInfo.name;
          document.getElementById("max-life-expectancy").innerText = breedInfo.max_life_expectancy;
          document.getElementById("min-life-expectancy").innerText = breedInfo.min_life_expectancy;
          document.getElementById("max-weight").innerText = breedInfo.max_weight;
          document.getElementById("min-weight").innerText = breedInfo.min_weight;
          document.getElementById("pets").innerText = breedInfo.other_pets_friendly;
          document.getElementById("stranger").innerText = breedInfo.stranger_friendly;
          document.getElementById("children").innerText = breedInfo.children_friendly;
          document.getElementById("grooming").innerText = breedInfo.grooming;
          document.getElementById("intelligence").innerText = breedInfo.intelligence;
          document.getElementById("length").innerText = breedInfo.length;
          document.getElementById("origin").innerText = breedInfo.origin;
          document.getElementById("image").src = breedInfo.image_link;
          document.getElementById("family").innerText = breedInfo.family_friendly;
          document.getElementById("shedding").innerText = breedInfo.shedding;
          document.getElementById("health").innerText = breedInfo.general_health;
          document.getElementById("playfulness").innerText = breedInfo.playfulness;
          
          
            
            

          }
  
        )
      .catch( error => {throw error});
  }
