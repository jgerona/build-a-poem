document.querySelectorAll(".poem").forEach((poem) => {
  const poemArr = (str) => {
    const poemArr = str.trim().split(" ");
    console.log(poemArr);
    return poemArr;
  };

  const randomizeTilePosition = (tileEl) => {
    const marginVar = 10;
    tileEl.style.marginTop = Math.floor(Math.random() * marginVar) + "px";
    tileEl.style.marginRight = Math.floor(Math.random() * marginVar) + "px";
    tileEl.style.marginLeft = Math.floor(Math.random() * marginVar) + "px";
    tileEl.style.marginBottom = Math.floor(Math.random() * marginVar) + "px";
  };

  const displayArr = (arr) => {
    poem.textContent = "";
    for (let i = 0; i < arr.length; i++) {
      let div = document.createElement("div");
      div.className = "tile";
      div.innerHTML = arr[i];

      poem.appendChild(div);
    }

    document.querySelectorAll(".tile").forEach((tile) => {
      randomizeTilePosition(tile);
      tile.classList.add("animate__animated", "animate__fadeIn");
    });
  };

  const strArr = poemArr(poem.textContent);
  displayArr(strArr);
});
