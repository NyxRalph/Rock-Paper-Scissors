const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

elements = [ rock , paper, scissors]

// rock = '1'
// paper = '2'
// scissors = '3'

elements.forEach((el) => el.addEventListener("click", event => random(event)))
function random(event){

   text = event.target.id
   const num =  Math.floor((Math.random() * elements.length + 1))
   

    if (num == 0){
        if(text == "rock"){console.log('tie')}
        if(text == "paper"){console.log('win')}
        if(text == "scissors"){console.log('lose')}
    }
    else if (num == 1){
        if(text == "rock"){console.log('lose')}
        if(text == "paper"){console.log('tie')}
        if(text == "scissors"){console.log('win')}
    }
    else if (num == 2){
        if(text == "rock"){console.log('win')}
        if(text == "paper"){console.log('lose')}
        if(text == "scissors"){console.log('tie')}
    }}