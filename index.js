
function createGrid() {
  let userChoice = Number(prompt("How many squares per side for the new grid? "));

  for (let i = 0; i < userChoice; i++) {

  const rowDiv = document.createElement("div");
  rowDiv.classList.add("grid-row");
  rowDiv.style.display = "flex";
  rowDiv.style.width = "100%";

    for (let j = 0; j < userChoice; j++) {
      const newDiv = document.createElement("div");
      newDiv.textContent = ``;
      newDiv.classList.add("new-div");
      container.appendChild(newDiv);


    rowDiv.appendChild(newDiv);
  }

  container.appendChild(rowDiv);
  }

  const div = document.querySelector("div");
  div.addEventListener("mouseover", function (e) {
    e.target.style.background = "blue";
  });

}



