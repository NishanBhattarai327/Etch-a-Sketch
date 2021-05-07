let container = document.querySelector("#container");

for (let i = 0; i < 6; i++) {
    const grid = document.createElement("div");
    grid.setAttribute("class", "grid");
    grid.addEventListener("mouseover", () => {
        grid.style.background = "red";
    });
    container.appendChild(grid);
}
