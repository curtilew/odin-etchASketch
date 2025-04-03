

for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    newDiv.textContent = `Div`;
    newDiv.classList.add("new-div");
    container.appendChild(newDiv);
  }




  const div = document.querySelector("div");
  div.addEventListener("mouseover", function (e) {
      e.target.style.background = "blue";
      
    });

