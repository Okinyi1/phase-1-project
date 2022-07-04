const BASE_URL = "http://localhost:3000/catbreeds/"

class Breed{
    id; length; origin; playfulness; shedding; familyFriendly; childrenFriendly; generalHealth; imageLink; meaowing; grooming; intelligence; minWeight; MaxWeight; length; minLifeExpectancy; maxLifeExpectancy; name;
    constructor(id, length, origin, playfulness, shedding, familyFriendly, childrenFriendly, generalHealth, imageLink, meaowing, grooming, intelligence, minWeight, MaxWeight, length, minLifeExpectancy, maxLifeExpectancy, name) {
        this.id = id
        this.length = length
        this.origin = origin
        this.playfulness = playfulness
        this.shedding = shedding
        this.familyFriendly = familyFriendly
        this.childrenFriendly = childrenFriendly
        this.generalHealth = generalHealth
        this.imageLink = imageLink
        this.meaowing = meaowing
        this.grooming = grooming
        this.intelligence = intelligence
        this.minWeight = minWeight
        this.MaxWeight = MaxWeight
        this.length = length
        this.minLifeExpectancy = minLifeExpectancy
        this.maxLifeExpectancy = maxLifeExpectancy
        this.name = name
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
            let breedInfo = new Breed(breed.id, breed.length, breed.origin, breed.playfulness, breed.shedding, breed.familyFriendly, breed.childrenFriendly, breed.generalHealth, breed.imageLink, breed.meaowing, breed.grooming, breed.intelligence, breed.minWeight, breed.MaxWeight, breed.length, breed.minLifeExpectancy, breed.maxLifeExpectancy, breed.name)

            let breedName = document.createElement("li");
            breedName.innerText = breedInfo.name
            breedHeadear.append(breedName)
            breedName.addEventListener("click", ()=>{
              loadBreed(breedInfo.id)
          })
  
        }
      )
  
    }).catch( error => {throw error})
  
}




  function loadBreed(id){

    fetch(BASE_URL+id)
      .then( response => response.json() )
      .then( (breed) => {
        let breedInfo = new Breed(breed.id, breed.length, breed.origin, breed.playfulness, breed.shedding, breed.familyFriendly, breed.childrenFriendly, breed.generalHealth, breed.imageLink, breed.meaowing, breed.grooming, breed.intelligence, breed.minWeight, breed.MaxWeight, breed.minLifeExpectancy, breed.maxLifeExpectancy, breed.name)
            document.getElementById("name").innerText = breedInfo.name
            document.getElementById("origin").innerText = breedInfo.origin
            document.getElementById("length").innerText = breedInfo.length
            document.getElementById("min-weight").innerText = breedInfo.minWeight
            document.getElementById("max-weight").innerText = breedInfo.MaxWeight
            document.getElementById("shedding").innerText = breedInfo.shedding
            document.getElementById("family-friendly").innerText = breedInfo.familyFriendly
            document.getElementById("children-friendly").innerText = breedInfo.childrenFriendly
            document.getElementById("playfulness").innerText = breedInfo.playfulness
            document.getElementById("health").innerText = breedInfo.generalHealth

            document.getElementById("like-breed").addEventListener("click", () =>{
              return 'Thank you'
            } )

            
     
              
                
            }


              
              
            })
          }
  
        )
      .catch( error => {throw error})
  }