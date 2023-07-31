let score = 0


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

elements = [rock, paper, scissors];

// rock = '1'
// paper = '2'
// scissors = '3'

elements.forEach((el) =>
  el.addEventListener("click", (event) => random(event))
);

function random(event) {
  console.log((text = event.target.id));

  function game__play() {
    const num = Math.floor(Math.random() * elements.length + 1);

    setTimeout(() => {
      document.querySelector(".play__again__btn").style.visibility = "visible";
    }, 500);

    console.log(num);

    if (num == 1) {
      if (text == "rock") {
        document.querySelector("#sect__two").style.visibility = "hidden";
        setTimeout(() => {
          document.querySelector(".playing__2").style.display = "flex";
          document.querySelector(".game__play_5").style.visibility = "visible";
        }, 500);
      }
      if (text == "paper") {
        document.querySelector("#sect__two").style.visibility = "hidden";
        setTimeout(() => {
          document.querySelector(".playing__2").style.display = "flex";
          document.querySelector(".game__play").style.visibility = "visible";
        }, 500);
        score = score + 1;
      }
      if (text == "scissors") {
        document.querySelector("#sect__two").style.visibility = "hidden";
        setTimeout(() => {
          document.querySelector(".playing__2").style.display = "flex";
          document.querySelector(".game__play_8").style.visibility = "visible";
        }, 500);
        score = score - 1;
      }
    }
    if (num == 2) {
      if (text == "rock") {
        document.querySelector("#sect__two").style.visibility = "hidden";
        setTimeout(() => {
          document.querySelector(".playing__2").style.display = "flex";
          document.querySelector(".game__play_4").style.visibility = "visible";
        }, 500);
        score = score - 1;
      }
      if (text == "paper") {
        document.querySelector("#sect__two").style.visibility = "hidden";
        setTimeout(() => {
          document.querySelector(".playing__2").style.display = "flex";
          document.querySelector(".game__play_2").style.visibility = "visible";
        }, 500);
      }
      if (text == "scissors") {
        document.querySelector("#sect__two").style.visibility = "hidden";
        setTimeout(() => {
          document.querySelector(".playing__2").style.display = "flex";
          document.querySelector(".game__play_7").style.visibility = "visible";
        }, 500);
        score = score + 1;
      }
    }
    if (num == 3) {
      if (text == "rock") {
        document.querySelector("#sect__two").style.visibility = "hidden";
        setTimeout(() => {
          document.querySelector(".playing__2").style.display = "flex";
          document.querySelector(".game__play_3").style.visibility = "visible";
        }, 500);
        score = score + 1;
      }
      if (text == "paper") {
        document.querySelector("#sect__two").style.visibility = "hidden";
        setTimeout(() => {
          document.querySelector(".playing__2").style.display = "flex";
          document.querySelector(".game__play_1").style.visibility = "visible";
        }, 500);
        score = score - 1;
      }
      if (text == "scissors") {
        document.querySelector("#sect__two").style.visibility = "hidden";
        setTimeout(() => {
          document.querySelector(".playing__2").style.display = "flex";
          document.querySelector(".game__play_9").style.visibility = "visible";
        }, 500);
      }
    }
    

    function scoreKeeper() {

      localStorage.setItem('score', score)
      const SCO = localStorage.getItem('score')
      document.querySelector('.score').innerHTML = SCO
    }

    scoreKeeper()
  }




  setTimeout(() => {
    game__play();
  }, 100);
}

setTimeout(() => {
  random();
}, 500);

function playAgain() {
  document.querySelector(".playing__2").style.display = "none";
  document.querySelector("#sect__two").style.visibility = "visible";
  document.querySelector(".game__play").style.visibility = "hidden";
  document.querySelector(".game__play_1").style.visibility = "hidden";
  document.querySelector(".game__play_2").style.visibility = "hidden";
  document.querySelector(".game__play_3").style.visibility = "hidden";
  document.querySelector(".game__play_4").style.visibility = "hidden";
  document.querySelector(".game__play_5").style.visibility = "hidden";
  document.querySelector(".game__play_7").style.visibility = "hidden";
  document.querySelector(".game__play_8").style.visibility = "hidden";
  document.querySelector(".game__play_9").style.visibility = "hidden";
}
