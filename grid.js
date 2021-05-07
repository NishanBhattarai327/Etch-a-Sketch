/*
 *grid layout was created with the help of  
 * https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript
 * this link
 */

const createGrid = (size, box) => {
    //updating grid layout
    box.style.setProperty("--grid-rows", size);
    box.style.setProperty("--grid-cols", size);

    //creating grids
    for (let i = 0; i < size * size; i++) {
        //size of a cell
        let gridSize = (500 / size).toString() + "px";

        //cell
        const gridCell = document.createElement("div");
        gridCell.setAttribute("class", "gridCell");
        gridCell.style.width = gridSize;
        gridCell.style.height = gridSize;

        //adding hover effect
        gridCell.addEventListener("mouseover", () => {
            gridCell.style.background = generateRandomColour();
        });

        //add grid cell to container
        box.appendChild(gridCell);
    }
}

const removeGrid = (box) => {
    while(box.firstChild) {
        box.removeChild(box.lastChild);
    }
}
 
function generateRandomColour(){
    return "#" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16);
}

const container = document.querySelector("#container");
createGrid(25, container);

//adding button to change size of grids
const button = document.querySelector("#button");
button.addEventListener("click", () => {
    //prompt for size
    let newSize = parseInt(window.prompt("Enter new size", ""));
    if (newSize > 0 && newSize < 100) {
        removeGrid(container);
        createGrid(newSize, container);
    }
});

