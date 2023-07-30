let score = 0;
document.querySelector(".score").innerHTML = score;

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
          return (result = "its a tie");
        }, 500);
      } else if (text == "paper") {
        document.querySelector("#sect__two").style.visibility = "hidden";
        setTimeout(() => {
          document.querySelector(".playing__2").style.display = "flex";
          document.querySelector(".game__play").style.visibility = "visible";
          score = score + 1;
        }, 500);
      } else if (text == "scissors") {
        document.querySelector("#sect__two").style.visibility = "hidden";
        setTimeout(() => {
          document.querySelector(".playing__2").style.display = "flex";
          document.querySelector(".game__play_8").style.visibility = "visible";
          score = score - 1;
        }, 500);
      }
    } else if (num == 2) {
      if (text == "rock") {
        document.querySelector("#sect__two").style.visibility = "hidden";
        setTimeout(() => {
          document.querySelector(".playing__2").style.display = "flex";
          document.querySelector(".game__play_4").style.visibility = "visible";
          score = score - 1;
        }, 500);
      } else if (text == "paper") {
        document.querySelector("#sect__two").style.visibility = "hidden";
        setTimeout(() => {
          document.querySelector(".playing__2").style.display = "flex";
          document.querySelector(".game__play_2").style.visibility = "visible";
          return (result = "its a tie");
        }, 500);
      } else if (text == "scissors") {
        document.querySelector("#sect__two").style.visibility = "hidden";
        setTimeout(() => {
          document.querySelector(".playing__2").style.display = "flex";
          document.querySelector(".game__play_7").style.visibility = "visible";
          score = score + 1;
        }, 500);
      }
    } else if (num == 3) {
      if (text == "rock") {
        document.querySelector("#sect__two").style.visibility = "hidden";
        setTimeout(() => {
          document.querySelector(".playing__2").style.display = "flex";
          document.querySelector(".game__play_3").style.visibility = "visible";
          score = score + 1;
        }, 500);
      } else if (text == "paper") {
        document.querySelector("#sect__two").style.visibility = "hidden";
        setTimeout(() => {
          document.querySelector(".playing__2").style.display = "flex";
          document.querySelector(".game__play_1").style.visibility = "visible";
          score = score - 1;
        }, 500);
      } else if (text == "scissors") {
        document.querySelector("#sect__two").style.visibility = "hidden";
        setTimeout(() => {
          document.querySelector(".playing__2").style.display = "flex";
          document.querySelector(".game__play_9").style.visibility = "visible";
          return (result = "its a tie");
        }, 500);
      }
    }

    document.querySelector(".score").innerHTML = score;
    console.log(score);
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
