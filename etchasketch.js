(() => {
  const container = document.getElementById("container");
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
