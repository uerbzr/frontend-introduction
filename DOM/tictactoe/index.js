//get javascript and the document model to build the board
//one of the most useful - querySelector to find an element on the page

const cellValues = Array(9).fill(null);
let lastValue = ["X", "O"];

const container = document.querySelector(".container");

function drawBoard() {
  container.innerHTML = "";

  for (let x = 0; x < 9; x++) {
    //create cell
    const cell = document.createElement("div");
    //add css class for cell
    cell.classList.add("cell");
    console.log(cell);

    //set symboll to contents of array
    const symbol = document.createElement("p");
    symbol.classList.add("symbol");
    symbol.innerText = cellValues[x];

    //add the event to change
    cell.addEventListener("click", function () {
      lastValue.reverse();
      cellValues[x] = lastValue[0];

      drawBoard();
      console.log(x);
      console.log(cellValues);
    });
    container.append(cell);
    cell.append(symbol);
  }
}

drawBoard();
