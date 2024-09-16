let click = false;

function GridTemplate(size) {
  const main = document.getElementById("main");
  const boxs = main.querySelectorAll("div");
  boxs.forEach((div) => {
    div.remove();
  });
  main.style.gridTemplateColumns = `repeat(${size},1fr)`;
  main.style.gridTemplateRows = `repeat(${size},1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = "blue";
    main.insertAdjacentElement("beforeend", box);
    box.addEventListener("mouseover", colorSquare);

    box.style.border = "solid 1px black";
  }
}

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    GridTemplate(input);
  } else {
    console.log("error");
  }
}
const btnSetsize = document.getElementById("btnSetsize");
btnSetsize.addEventListener("click", (e) => {
  e.preventDefault();
});

function colorSquare() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}
function changeColor(choice) {
  color = choice;
  const colorSelected = document.getElementById("colorSelected");
  colorSelected.innerHTML = color;
  colorSelected.style.color = color;
  if (color === "random") {
    colorSelected.classList.add("random");
  } else {
    colorSelected.classList.remove("random");
  }
}
function resetColor() {
  const main = document.getElementById("main");
  const boxs = main.querySelectorAll("div");
  boxs.forEach((div) => {
    div.style.backgroundColor = "blue";
  });
}

document.getElementById("main").addEventListener("click", (e) => {
  click = !click;
  const modeColor = document.getElementById("modeColor");

  if (e.target.tagNAME !== "BUTTON") {
    if (click) {
      modeColor.innerHTML = "coloring";
    } else {
      modeColor.innerHTML = "not coloring";
    }
  }
});
