let holeGame = document.querySelector(".hole-game");
let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

holeGame.addEventListener("click", (e) => {
  let target = e.target;

  if (target.classList.contains("hole_has-mole")) {
    dead.textContent = +dead.textContent + 1;
  } else {
    lost.textContent = +lost.textContent + 1;
  }

  if (dead.textContent == 10 && lost.textContent < 5) {
    alert("Победа!");
    dead.textContent = 0;
    lost.textContent = 0;
  }

  if (lost.textContent > 4) {
    alert("Вы проиграли!");
    dead.textContent = 0;
    lost.textContent = 0;
  }
});
