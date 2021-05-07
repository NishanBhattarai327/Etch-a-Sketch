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
            gridCell.style.background = "red";
        });

        //add grid cell to container
        box.appendChild(gridCell);
    }
}

const container = document.querySelector("#container");
createGrid(25, container);

