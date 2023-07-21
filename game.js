setTimeout(() => {const score = document.querySelector('.score').innerHTML = 0},10)

function userChoiceRock() {
  const rock = document.querySelector("#rock");
  const rockId = rock.id;
  function randomNum() {
    min = Math.ceil(1);
    max = Math.floor(4);
    const result = Math.floor(Math.random() * (4 - 1) + 1);
    setTimeout(() => {document.querySelector(".play__again__btn").style.visibility = "visible"; },500)
    console.log(result);

    if (result == 1 && rockId) {
      document.querySelector("#sect__two").style.visibility = "hidden";
      setTimeout(() => {
      document.querySelector(".playing__2").style.display = "flex";
      document.querySelector(".game__play_5").style.visibility = "visible";
      return "its a tie"
    },500)

    }
    if (result == 2 && rockId) {
      document.querySelector("#sect__two").style.visibility = "hidden";
      setTimeout(() => {
      document.querySelector(".playing__2").style.display = "flex";
      document.querySelector(".game__play_4").style.visibility = "visible";
      setTimeout(() => {const score = document.querySelector('.score').innerHTML = 0
      localStorage.setItem('scoreBoard', score - 1)},10)
      
      return "you lose"
    },500)
    }
    if (result == 3 && rockId) {
      document.querySelector("#sect__two").style.visibility = "hidden";
      setTimeout(() => {
      document.querySelector(".playing__2").style.display = "flex";
      document.querySelector(".game__play_3").style.visibility = "visible";
      setTimeout(() => {const score = document.querySelector('.score').innerHTML = 0
      localStorage.setItem('scoreBoard', score + 1)},10)
     
      return "you win"
    },500)
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
    setTimeout(() => {document.querySelector(".play__again__btn").style.visibility = "visible"; },500)
    console.log(result);

    if (result == 1 && paperId) {
      document.querySelector("#sect__two").style.visibility = "hidden";
      setTimeout(() => {
      document.querySelector(".playing__2").style.display = "flex";
      document.querySelector(".game__play").style.visibility = "visible";
      setTimeout(() => {const score = document.querySelector('.score').innerHTML = 0
      localStorage.setItem('scoreBoard', score + 1)},10)
      
      return "you win"
    },500)
    }
    if (result == 2 && paperId) {
      document.querySelector("#sect__two").style.visibility = "hidden";
      setTimeout(() => {
      document.querySelector(".playing__2").style.display = "flex";
      document.querySelector(".game__play_2").style.visibility = "visible";
      return "its a tie"
    },500)
    }
    if (result == 3 && paperId) {
      document.querySelector("#sect__two").style.visibility = "hidden";
      setTimeout(() => {
      document.querySelector(".playing__2").style.display = "flex";
      document.querySelector(".game__play_1").style.visibility = "visible";
      setTimeout(() => {const score = document.querySelector('.score').innerHTML = 0
      localStorage.setItem('scoreBoard', score - 1)},10)
      
      return "you lose"
    },500)
    }

    return result;
  }
  randomNum();
}

function userChoiceScissors() {
  const scissors = document.querySelector("#scissors");
  const scissorsId = scissors.id;

  function randomNum() {
    min = Math.ceil(1);
    max = Math.floor(4);
    const result = Math.floor(Math.random() * (4 - 1) + 1);
    setTimeout(() => {document.querySelector(".play__again__btn").style.visibility = "visible"; },500)
    console.log(result);

    if (result == 1 && scissorsId) {
      const scLOSE = "you lose";
      document.querySelector("#sect__two").style.visibility = "hidden";
      setTimeout(() => {
      document.querySelector(".playing__2").style.display = "flex";
      document.querySelector(".game__play_8").style.visibility = "visible"; 
      setTimeout(() => {const score = document.querySelector('.score').innerHTML = 0
      localStorage.setItem('scoreBoard', score - 1)},10)
      
      return "you lose";
    },500)
    }
    if (result == 2 && scissorsId) {
      const scWin = "you win";
      document.querySelector("#sect__two").style.visibility = "hidden";
      setTimeout(() => {
      document.querySelector(".playing__2").style.display = "flex";
      document.querySelector(".game__play_7").style.visibility = "visible";
      setTimeout(() => {const score = document.querySelector('.score').innerHTML = 0
      localStorage.setItem('scoreBoard', score + 1)},10)
      
      return "you win";
    },500)
    }
    if (result == 3 && scissorsId) {
      document.querySelector("#sect__two").style.visibility = "hidden";
      setTimeout(() => {
      document.querySelector(".playing__2").style.display = "flex";
      document.querySelector(".game__play_9").style.visibility = "visible";
      return "its a tie"
    },500)
    }
    return result;
  }
  randomNum();
}

function playAgain() {

  document.querySelector(".playing__2").style.display = "none";
  document.querySelector("#sect__two").style.visibility = "visible";
  document.querySelector('.game__play').style.visibility = "hidden";
  document.querySelector('.game__play_1').style.visibility = "hidden";
  document.querySelector('.game__play_2').style.visibility = "hidden";
  document.querySelector('.game__play_3').style.visibility = "hidden";
  document.querySelector('.game__play_4').style.visibility = "hidden";
  document.querySelector('.game__play_5').style.visibility = "hidden";
  document.querySelector('.game__play_7').style.visibility = "hidden";
  document.querySelector('.game__play_8').style.visibility = "hidden";
  document.querySelector('.game__play_9').style.visibility = "hidden";
}




