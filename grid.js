/*
 *grid layout was created with the help of  
 * https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript
 * this link
 */
  //////////////////////////////////////////////////////////
 //////gird.js/////////////////////////////////////////////
//////////////////////////////////////////////////////////

const createGrid = (box, size) => {
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
            let currentBgColor = gridCell.style.backgroundColor;
            
            //only random color for first hover
            if (currentBgColor == "") {
                gridCell.style.backgroundColor = generateRandomColour();
                //change the css initial color var to random color generated
                gridCell.style.setProperty("--initial-cell-color", gridCell.style.backgroundColor);
            } else {
                reduceBrightnessOf(gridCell, currentBgColor, 10);
            }
        });

        //add grid cell to container
        box.appendChild(gridCell);
    }
}

function reduceBrightnessOf(gridCell, currentColor, percentage) {
    /**
     * get initially generated random color stored as css variable
     * convert the rgb string into array
     * get current color and convert rgb into array
     * subtract 10% of intial to current rgb value
     * set the background to subtracted rgb value
     */
    let initialRgb = rgbToArray(gridCell.style.getPropertyValue("--initial-cell-color"));
    let currentRgb = rgbToArray(currentColor).map((value, index) => {
        if (value > 0) {
            return Math.floor(value - initialRgb[index] * percentage / 100);
        }
        return value;
    }).join();
    gridCell.style.backgroundColor = "rgb("+currentRgb+")";
}

//helper functions............

function generateRandomColour(){
    return "rgb("+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+")";
}

function rgbToArray(rgb) {
    let rgbArr = rgb.substring(rgb.indexOf('(') + 1, rgb.length - 1).split(", ");
    return rgbArr.map((value) => parseInt(value));
}

function removeGrid(box){
    while(box.firstChild) {
        box.removeChild(box.lastChild);
    }
}

 ///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

  ///////////////////////////////////////////////////
 /////////// Main.js ///////////////////////////////
///////////////////////////////////////////////////

const container = document.querySelector("#container");
createGrid(container, 25);

//adding button to change size of grids
const button = document.querySelector("#button");
button.addEventListener("click", () => {
    //prompt for size
    let newSize = parseInt(window.prompt("Enter new size", ""));
    if (newSize > 0 && newSize < 100) {
        removeGrid(container);
        createGrid(container, newSize);
    }
});

