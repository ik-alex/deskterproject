//Sets important constants and variables

const container = document.querySelector("#container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

Grid();
//Creates a default grid sized 16x16 
function Grid() {
    rowsGrid(16);
    columnsGrid(16);
}

//Takes (rows, columns) input and makes a grid
function rowsGrid(rowNum) {

    //Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

//Creates columns
function columnsGrid(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};