const editor = document.querySelector("#editor");
const buttonClear = document.querySelector("#clear");

if (localStorage.getItem("text") !== null) {
  editor.value = localStorage.getItem("text");
}

editor.addEventListener("keyup", (e) => {
  localStorage.setItem("text", e.target.value);
});

buttonClear.addEventListener("click", () => {
  localStorage.clear();
  editor.value = "";
});
