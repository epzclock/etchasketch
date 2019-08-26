(() => {
  const container = document.getElementById("container");
  let resetbutton = document.createElement("button");
  let newgrid = document.createElement("button");
  resetbutton.innerHTML = "Reset";
  newgrid.innerHTML = "New Grid";
  container.append(resetbutton);
  container.append(newgrid);
  newgrid.id = "new-grid";
  resetbutton.id = "reset";
  for (let i = 1; i < 17; i++) {
    let row = document.createElement("div");
    row.classList.add(`row`);
    container.appendChild(row);
    for (let j = 1; j < 17; j++) {
      let squares = document.createElement("div");
      squares.classList.add("gridsquares");
      squares.addEventListener("mouseover", event => {
        console.log(
          (event.target.style = `background-color: #${Math.floor(
            Math.random() * 10
          )}${Math.floor(Math.random() * 10)}${Math.floor(
            Math.random() * 10
          )}${Math.floor(Math.random() * 10)}${Math.floor(
            Math.random() * 10
          )}${Math.floor(Math.random() * 10)};`)
        );
      });
      row.appendChild(squares);
    }
  }
})();

let resetButton = document.getElementById("reset");

resetButton.addEventListener("click", () => {
  let gs = document.getElementsByClassName("gridsquares");
  for (let i = 0; i < gs.length; i++) {
    gs[i].style = `background-color: rgb(240, 227, 227)`;
  }
  //   gs.style = `background-color: rgb(240, 227, 227)`;
});
