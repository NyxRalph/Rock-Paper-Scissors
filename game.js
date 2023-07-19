function userChoiceRock() {
  const rock = document.querySelector("#rock");
  const rockId = rock.id;
  function randomNum() {
    min = Math.ceil(1);
    max = Math.floor(4);
    const result = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(result);

   if(result == 1 && rockId){
    console.log('its a tie')
   }
   if(result == 2 && rockId){
    console.log('you lose')
   }
   if(result == 3 && rockId){
    console.log('you win')
   }

    return result;
  }
  randomNum();
  
}

function userChoicePaper() {
  const paper = document.querySelector("#paper");
  const paperId = paper.id;
  function randomNum() {
    min = Math.ceil(1);
    max = Math.floor(4);
    const result = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(result);


    if(result == 1 && paperId){
        console.log('you win')
       }
       if(result == 2 && paperId){
        console.log('its a tie')
       }
       if(result == 3 && paperId){
        console.log('you lose')
       }


    return result;
  }
  randomNum();
}

function userChoiceScissors() {
  const scissors = document.querySelector("#scissors");
  const scissorsId = scissors.id;
  //   return scissorsId;
  function randomNum() {
    min = Math.ceil(1);
    max = Math.floor(4);
    const result = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(result);


    if(result == 1 && scissorsId){
        console.log('you lose')
       }
       if(result == 2 && scissorsId){
        console.log('you win')
       }
       if(result == 3 && scissorsId){
        console.log('its a tie')
       }

    return result;
  }
  randomNum();
}


