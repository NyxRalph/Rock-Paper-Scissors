userChoice = 0
computerChoice = 0

// rock = document.querySelector("#rock")
// paper = document.querySelector("#paper")
// scissors = document.querySelector("#scissors")


// const options = document.querySelector(".option")

options = { rock , paper , scissors}


// rock = '1'
// paper = '2'
// scissors = '3'





options.forEach((option) => option.addEventListener("click",(event) => {random(event)}))
   
function random(event){

        // console.log(event.target.innerHTML);

    const num =  Math.floor((Math.random() * options.length))
    text = event.target.className
 

    if (num == 0){
        if(text == 1){console.log('tie')}
        if(text == 2){console.log('win')}
        if(text == 3){console.log('lose')}
    }
    if (num == 1){
        if(text == 1){console.log('lose')}
        if(text == 2){console.log('tie')}
        if(text == 3){console.log('win')}
    }
    if (num == 2){
        if(text == 1){console.log('win')}
        if(text == 2){console.log('lose')}
        if(text == 3){console.log('tie')}
    }



    console.log(num)
}
    





