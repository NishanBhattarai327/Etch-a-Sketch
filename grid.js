const createGrid = (size, box) => {
    for (let i = 0; i < size * size; i++) {
        let gridSize = (500 / size).toString() + "px";
        const grid = document.createElement("div");
        grid.setAttribute("class", "grid");
        grid.style.width = gridSize;
        grid.style.height = gridSize;
        grid.addEventListener("mouseover", () => {
            grid.style.background = "red";
        });
        box.appendChild(grid);
    }
}
const container = document.querySelector("#container");
createGrid(5, container);